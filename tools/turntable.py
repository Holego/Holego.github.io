# Renders a 360-degree turntable of a 3D model with a transparent-looking dark background, for the site.
#
#   blender -b --factory-startup --python tools/turntable.py -- MODEL OUT_DIR [--hide Name1,Name2] [--frames 96] [--boost 1.0] [--az -32] [--still still.png]
#   ffmpeg -framerate 24 -i OUT_DIR/f_%03d.png -c:v libx264 -crf 26 -pix_fmt yuv420p -an -movflags +faststart model.mp4
#
# MODEL is a .glb / .gltf / .blend file. Tiny helper meshes (such as a stray Icosphere) are skipped.
# --hide skips objects whose name contains the given text, --boost makes the lights stronger (useful for very dark models),
# --still renders one big picture instead of the frames.
import bpy, math, sys, os
from mathutils import Vector

argv = sys.argv[sys.argv.index("--") + 1:]
src, out = argv[0], argv[1]
hide = argv[argv.index("--hide") + 1].split(",") if "--hide" in argv else []
N = int(argv[argv.index("--frames") + 1]) if "--frames" in argv else 96
still = argv[argv.index("--still") + 1] if "--still" in argv else None
az0 = float(argv[argv.index("--az") + 1]) if "--az" in argv else -32.0
boost = float(argv[argv.index("--boost") + 1]) if "--boost" in argv else 1.0

if src.endswith((".glb", ".gltf")):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=src)
else:
    bpy.ops.wm.open_mainfile(filepath=src)
sc = bpy.context.scene

for o in list(bpy.data.objects):
    if o.type in ("CAMERA", "LIGHT"):
        bpy.data.objects.remove(o)
    elif o.type == "ARMATURE":
        o.data.pose_position = "REST"            # rest pose, ignore any animation
        if o.animation_data: o.animation_data_clear()
for o in bpy.data.objects:
    if any(h and h in o.name for h in hide): o.hide_render = True; o.hide_viewport = True

meshes = [o for o in bpy.data.objects if o.type == "MESH" and not o.hide_render]
big = max(len(o.data.vertices) for o in meshes)
for o in list(meshes):                           # skip tiny helper meshes
    if len(o.data.vertices) < big * 0.02 or o.name.startswith(("Icosphere", "Cube", "Plane")) and len(o.data.vertices) < 500:
        o.hide_render = True; o.hide_viewport = True; meshes.remove(o); print("skipped:", o.name)

dg = bpy.context.evaluated_depsgraph_get()
pts = []
for o in meshes:
    eo = o.evaluated_get(dg)
    pts += [o.matrix_world @ Vector(c) for c in eo.bound_box]
mn = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
mx = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
h = mx.z - mn.z; cx, cy = (mn.x + mx.x) / 2, (mn.y + mx.y) / 2
foot = math.hypot(mx.x - mn.x, mx.y - mn.y)

# everything rotates around an empty at the center of the model
pivot = bpy.data.objects.new("pivot", None); sc.collection.objects.link(pivot); pivot.location = (cx, cy, 0)
for o in bpy.data.objects:
    if o is not pivot and o.parent is None and o.type in ("MESH", "ARMATURE", "EMPTY"):
        mw = o.matrix_world.copy(); o.parent = pivot; o.matrix_parent_inverse = pivot.matrix_world.inverted(); o.matrix_world = mw

world = bpy.data.worlds.new("W"); sc.world = world; world.use_nodes = True
bg = world.node_tree.nodes["Background"]; bg.inputs[0].default_value = (0.012, 0.016, 0.008, 1); bg.inputs[1].default_value = 1.0

focus = Vector((cx, cy, mn.z + h * 0.50)); s = h / 1.9
def area(name, az, el, dist, energy, color, size):
    a = math.radians(az); e = math.radians(el)
    loc = focus + Vector((math.sin(a) * math.cos(e), -math.cos(a) * math.cos(e), math.sin(e))) * dist
    d = bpy.data.lights.new(name, "AREA"); d.energy = energy * s * s * boost; d.color = color; d.size = size * s
    o = bpy.data.objects.new(name, d); sc.collection.objects.link(o); o.location = loc
    o.rotation_euler = (focus - loc).to_track_quat("-Z", "Y").to_euler()
area("key", -40, 38, 3.9 * s, 420, (1.0, 0.93, 0.82), 2.5)      # warm key light
area("rim", 150, 28, 3.9 * s, 900, (0.72, 0.83, 0.21), 1.5)     # green rim light (the site's accent color)
area("fill", 40, 12, 3.9 * s, 90, (0.55, 0.65, 0.9), 3.0)       # cool fill light

cam = bpy.data.objects.new("cam", bpy.data.cameras.new("cam")); sc.collection.objects.link(cam); sc.camera = cam
cam.data.lens = 62
dist = max(1.93 * h * 1.16, 2.57 * foot)
a = math.radians(az0); e = math.radians(7)
cam.location = focus + Vector((math.sin(a) * math.cos(e), -math.cos(a) * math.cos(e), math.sin(e))) * dist
cam.rotation_euler = (focus - cam.location).to_track_quat("-Z", "Y").to_euler()
cam.data.clip_end = max(100, dist * 10)

sc.render.engine = "BLENDER_EEVEE"
try: sc.eevee.taa_render_samples = 40
except Exception: pass
sc.render.resolution_x, sc.render.resolution_y = (1000, 1300) if still else (540, 720)
sc.view_settings.view_transform = "AgX"

if still:
    sc.render.filepath = still; bpy.ops.render.render(write_still=True)
else:
    os.makedirs(out, exist_ok=True)
    for i in range(N):
        pivot.rotation_euler.z = 2 * math.pi * i / N
        sc.render.filepath = f"{out}/f_{i:03d}.png"; bpy.ops.render.render(write_still=True)
print("DONE", flush=True)
