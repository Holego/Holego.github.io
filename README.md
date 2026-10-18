# Rouger Bin: portfolio site

Live: https://holego.github.io/

A plain static site (no build step): GitHub Pages publishes whatever is in the `main` branch, about a minute after each commit.

## Files

| File | What it is |
|---|---|
| `index.html` | the page itself: texts, projects, stack, contacts |
| `assets/games.js` | **the games showcase data** (Google Play games): add, change or remove a game here (see below) |
| `assets/projects.js` | **the "Current projects" tabs**: text, screenshots and rotating models of each project (see below) |
| `privacy-policy.html` | privacy policy used by the Google Play listings |
| `app-ads.txt` | AdMob verification file: keep the name and the place (the site root) |
| `assets/games/<id>/` | icon and screenshots of each game |
| `assets/fi4/`, `assets/dtb/` | screenshots of Forgotten Island 4 and Darker than Black |
| `assets/models/` | rotating character models (short looping videos with a poster picture) |
| `assets/icons/` | mod icons |
| `tools/turntable.py` | Blender script that renders a rotating model (see below) |
| `assets/bg*.jpg` | background pictures |

## Edit on GitHub, without any tools

1. Open the file in the repository, click the pencil icon (**Edit this file**).
2. Change the text. Press **Commit changes...**, then **Commit changes** again (the default "commit directly to main" is fine).
3. Wait about a minute and reload the site. The **Actions** tab shows whether the publish finished (green tick).

You can also press the `.` key on the repository page to open a full editor in the browser.

### Add or change a game

1. Put the pictures into `assets/games/<id>/` (**Add file → Upload files**): an `icon.webp` (square, 128x128 is enough) and the screenshots (`1.webp`, `2.webp`, ...). Keep each picture under about 200 KB (the free site https://squoosh.app converts and shrinks pictures).
2. Open `assets/games.js`, copy one whole `{ ... }` block, paste it into the list, and change the fields. Every field is explained at the top of the file.
3. When the Google Play page of a game opens, change `live: false` to `live: true`. The button then becomes a real link.

Rules for the data file: texts in "double quotes", commas between items, no comma after the last item.

### Change the "Current projects" tabs

Open `assets/projects.js`. Every project is one `{ ... }` block (= one tab) with its text, a list of features and **groups** of pictures.
A group is either `layout: "shots"` (screenshots, click to enlarge) or `layout: "models"` (rotating models and short clips). Add a picture by
adding one line to `items` and uploading the file into `assets/fi4/`, `assets/dtb/` or `assets/models/`. The fields are explained at the top of the file.

Tips: screenshots as `.webp` (or `.jpg`) up to about 1400 px wide and 150 KB; crop away debug text and empty margins first.

### Make a rotating model

1. Install Blender and ffmpeg, then render the frames (the model can be a `.glb`, `.gltf` or `.blend`):
   ```
   blender -b --factory-startup --python tools/turntable.py -- model.glb frames --boost 1.0
   ```
   (`--hide Name` skips a part, `--boost 2` makes the light stronger for dark models, `--still pic.png` renders one big picture.)
2. Encode the frames and a poster picture:
   ```
   ffmpeg -framerate 24 -i frames/f_%03d.png -c:v libx264 -crf 26 -pix_fmt yuv420p -an -movflags +faststart assets/models/hero.mp4
   ffmpeg -i frames/f_000.png -frames:v 1 -q:v 4 assets/models/hero-poster.jpg
   ```
3. Add `{ video: "assets/models/hero.mp4", poster: "assets/models/hero-poster.jpg", cap: "Hero" }` to the `items` of a `"models"` group in `assets/projects.js`.

### Something went wrong

Open the file, click **History**, open the last good version and copy it back. Or open the bad commit and press **Revert**.

## Preview on your own computer

```
git clone https://github.com/Holego/Holego.github.io.git
cd Holego.github.io && python3 -m http.server 8000
```

Open http://localhost:8000. Nothing is published until you `git push`.

## Careful

If you commit on GitHub while someone else (or another tool) is pushing at the same time, one of the pushes is rejected: run `git pull --rebase` first.
