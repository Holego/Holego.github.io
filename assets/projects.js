/*
  CURRENT PROJECTS: edit this file to change the "Current projects" tabs. You do not need to touch index.html.

  Each project is one block between { ... } and becomes one tab. Blocks are separated by commas.
  To add a project: copy a whole block, paste it after the last one, then change the fields.

    id, title          short name without spaces / the name shown on the tab
    icon               optional square picture, shown on the tab and next to the title (like an app icon)
    kicker             one line under the title, e.g. the genre
    status             small badge, e.g. "In development"
    tags               small labels
    cover              wide picture at the top of the project
    intro              list of paragraphs
    features           list of bullet points
    groups             galleries below the text. Each group has:
        title, intro   heading and an optional short line under it
        layout         "shots"  = screenshots (click to enlarge)
                       "models" = rotating models and short clips (tall pictures, they play on their own)
        items          list of pictures:
                         screenshot:  { img: "path", cap: "caption", alt: "what is in the picture" }
                         model/clip:  { video: "path.mp4", poster: "path.jpg", cap: "caption" }

  Rules: keep every text in "double quotes", keep the commas between items, no comma after the last item of a list.
  After saving (Commit changes on GitHub) the site updates in about a minute.
*/
window.PROJECTS = [
  {
    id: "fi4",
    title: "Forgotten Island 4",
    kicker: "Fantasy action RPG",
    status: "In development",
    tags: ["Godot 4.7", "GDScript", "Multiplayer", "Blender"],
    cover: "assets/fi4/castle-throne.webp",
    coverAlt: "The throne hall of the Winter Castle in Forgotten Island 4",
    intro: [
      "A story-driven action RPG built in Godot 4 for solo play, co-op and a persistent shared world. Play the campaign alone or with up to eight allies through levels 1-60, then step into the online world.",
      "A playable prototype in active development: systems are built, tested and documented one by one."
    ],
    features: [
      "Talent and profession trees drawn on a Yggdrasil canvas, a world-tree style editor where the layout and the rules live in data.",
      "Real-time combat: class resources and abilities (warrior rage, mage, rogue combo points), directional weapon motions, status effects and hit feedback.",
      "Sides and races (Empire and Horde), reputation, a character creation screen and class gear rules.",
      "Professions and crafting (alchemy, mining), shops and dialogue market windows.",
      "Poisons, throwable flasks and dynamite, traps.",
      "Enemy AI with a threat system; bosses with telegraphed attacks (charge, ground slam, grab-and-throw) and group boss encounters.",
      "Procedurally generated dungeon floors built from room sockets, plus a death and resurrection flow.",
      "A streamed open-world prototype with a world map and an endless forest as the world border.",
      "Server-authoritative co-op and MMO foundations: accounts backend, dedicated zone server, server browser, trading, mounts, chat.",
      "Quests and dialogues, interactive mechanisms (levers, code doors, pressure plates) and environment zones (water, sand, wind, vortex)."
    ],
    groups: [
      {
        title: "Mechanics",
        intro: "Screens of the systems that describe the game.",
        layout: "shots",
        items: [
          { img: "assets/fi4/ygg-talents.webp", cap: "Talent tree on a Yggdrasil canvas: branches, ranks and prerequisites", alt: "A warrior talent tree drawn as a branching world tree" },
          { img: "assets/fi4/ygg-alchemy.webp", cap: "Profession tree: alchemy recipes unlocked as nodes", alt: "The alchemy profession tree drawn as a branching tree" },
          { img: "assets/fi4/sys-creation.webp", cap: "Character creation: sides, races and classes", alt: "Character creation screen with races, classes and a demon mage preview" },
          { img: "assets/fi4/sys-shop.webp", cap: "Market window: buying and selling", alt: "A shop window with goods to buy and items to sell" },
          { img: "assets/fi4/sys-throw.webp", cap: "Throwable flasks and area effects (dev room)", alt: "Colored area effects of throwable flasks in the dev room" },
          { img: "assets/fi4/server-browser.webp", cap: "Server browser for co-op and online play", alt: "Server browser window with a list of servers" }
        ]
      },
      {
        title: "Worlds",
        intro: "The prologue level, a village and the open-world prototype.",
        layout: "shots",
        items: [
          { img: "assets/fi4/castle-throne.webp", cap: "Winter Castle: the throne hall", alt: "The throne hall of the Winter Castle with banners and torches" },
          { img: "assets/fi4/castle-moon.webp", cap: "Winter Castle: the carpet to the throne under the moon", alt: "Red carpet between torches in the snowy castle courtyard under the moon" },
          { img: "assets/fi4/castle-edge.webp", cap: "Winter Castle: the ruined edge, seen from above", alt: "The broken edge of the castle floor seen from above" },
          { img: "assets/fi4/castle-tower.webp", cap: "Winter Castle: the tower seen from outside in the fog", alt: "The castle tower seen from outside in the fog" },
          { img: "assets/fi4/village.webp", cap: "A village in a low-poly style, with the hero in armor", alt: "A hero in white and orange armor standing in a low-poly village" },
          { img: "assets/fi4/world-peaks.webp", cap: "Open-world prototype: snowy peaks", alt: "Snowy peaks in the open-world prototype" },
          { img: "assets/fi4/forest-edge.webp", cap: "The endless forest at the edge of the island", alt: "A hero with a sword in a dark forest next to a fire" },
          { img: "assets/fi4/island-map.webp", cap: "Island map ringed by the endless forest", alt: "Top-down map of the island with mountains and the forest ring" }
        ]
      },
      {
        title: "Characters and bosses",
        intro: "Rotating models: rogue, Empire knight and crusader, demon warrior, new warrior, succubus and the lich boss, plus two boss animations.",
        layout: "models",
        items: [
          { video: "assets/models/rogue.mp4", poster: "assets/models/rogue-poster.jpg", cap: "Rogue" },
          { video: "assets/models/knightf.mp4", poster: "assets/models/knightf-poster.jpg", cap: "Knight: warrior of the Empire" },
          { video: "assets/models/crusader.mp4", poster: "assets/models/crusader-poster.jpg", cap: "Crusader (Empire)" },
          { video: "assets/models/demon-warrior.mp4", poster: "assets/models/demon-warrior-poster.jpg", cap: "Demon warrior" },
          { video: "assets/models/warrior.mp4", poster: "assets/models/warrior-poster.jpg", cap: "Warrior (new)" },
          { video: "assets/models/succubus.mp4", poster: "assets/models/succubus-poster.jpg", cap: "Succubus" },
          { video: "assets/models/lich-boss.mp4", poster: "assets/models/lich-boss-poster.jpg", cap: "Lich boss" },
          { video: "assets/fi4/lich-slam.mp4", poster: "assets/fi4/lich-slam-poster.jpg", cap: "Lich boss: ground slam" },
          { video: "assets/fi4/lich-walk.mp4", poster: "assets/fi4/lich-walk-poster.jpg", cap: "Lich boss: walk" }
        ]
      }
    ]
  },
  {
    id: "dtb",
    title: "Darker than Black: Hei's Shard",
    kicker: "Third-person action game, fan project",
    status: "In development",
    tags: ["Godot 4.7", "GDScript", "Third-person action", "Blender"],
    icon: "assets/dtb/icon.webp",
    cover: "assets/dtb/discharge.webp",
    coverAlt: "Hei discharging electricity between enemies",
    intro: [
      "A single-player third-person action game inspired by the anime Darker than Black. You play Hei, the Black Reaper: electricity, a wire knife, acrobatics, close combat in the spirit of the Arkham games and weapons picked up on the street. The setting is an open night Tokyo with quests and several endings.",
      "The game is built stage by stage: every stage is designed on paper first, implemented in Godot and committed on its own. Stages 1-6 are done (character, movement, combat, hook, powers, weapons and inventory); stealth is next."
    ],
    features: [
      "Hei's model built in Blender from separate body, coat and mask parts on one skeleton, with a coat that sways on spring bones.",
      "A smooth animation system with three blending slots and an upper-body layer; clips are mapped through data, with no clip names in gameplay code.",
      "Third-person movement and camera: run, sprint, jump, wall climb, roll.",
      "Melee combat: jabs, heavy attacks and counters.",
      "Wire hook: hold-to-aim grapple, swinging between rooftops, pulling enemies in, electricity running down the wire.",
      "A contractor power: an electric discharge that arcs between enemies.",
      "Weapons and inventory: pick up and fire pistols and submachine guns, money and shops.",
      "Data-driven design: weapons, abilities, quests, dialogues and enemies live in data files."
    ],
    groups: [
      {
        title: "Gameplay",
        intro: "Frames from the test sandbox level (placeholder geometry).",
        layout: "shots",
        items: [
          { img: "assets/dtb/discharge.webp", cap: "Electric discharge arcing between enemies", alt: "Hei and enemies with a bolt of electricity between them" },
          { img: "assets/dtb/hook-swing.webp", cap: "Swinging on the wire hook", alt: "Hei swinging on a wire above the rooftops" },
          { img: "assets/dtb/hook-charged.webp", cap: "A charged hook with electricity along the wire", alt: "A glowing wire between Hei and a rooftop" },
          { img: "assets/dtb/pistol-aim.webp", cap: "Aiming a pistol with a crosshair", alt: "Hei aiming a pistol at distant enemies" },
          { img: "assets/dtb/sprint.webp", cap: "Sprinting: the coat follows the movement", alt: "Hei sprinting with his coat flowing behind" },
          { img: "assets/dtb/climb.webp", cap: "Wall climb", alt: "Hei climbing a block" },
          { img: "assets/dtb/fight.webp", cap: "Melee fight against several enemies", alt: "Hei fighting a group of enemies" }
        ]
      },
      {
        title: "Characters",
        intro: "Rotating models: Hei (body, coat and mask) and a bandit, one of the ordinary enemies.",
        layout: "models",
        items: [
          { video: "assets/models/hei.mp4", poster: "assets/models/hei-poster.jpg", cap: "Hei" },
          { video: "assets/models/bandit.mp4", poster: "assets/models/bandit-poster.jpg", cap: "Bandit (enemy)" }
        ]
      }
    ]
  }
];
