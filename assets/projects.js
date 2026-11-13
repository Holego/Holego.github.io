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
      "A playable prototype in active development: systems are built, tested and documented one by one. Updated November 2026: the rebuilt Winter Castle, a larger island with biomes and wagon travel, the Dustvein mine with an endless dungeon, mage paths, and new bosses and enemies."
    ],
    features: [
      "Talent and profession trees drawn on a Yggdrasil canvas, a world-tree style editor where the layout and the rules live in data.",
      "Real-time combat: class resources and abilities (warrior rage, mage, rogue combo points), directional weapon motions, status effects and hit feedback. Enemies telegraph their swings (wind-up, hold, a fast pass on the damage frame), blocks are directional and hitboxes match what you see.",
      "Class paths chosen in a specialization window: the mage becomes a Sorcerer, a Warlock or a Priest, and every path talent has real mechanics (life drain, absorbing shields, elemental fusion). The rogue gets a sidestep-and-counter mini-game.",
      "Sides and races (Empire and Horde), reputation, a character creation screen and class gear rules.",
      "Professions and crafting (alchemy, mining), shops and dialogue market windows.",
      "Poisons, throwable flasks and dynamite, traps.",
      "Enemy AI with a threat system; bosses with telegraphed attacks (charge, ground slam, grab-and-throw) and group boss encounters.",
      "Procedurally generated dungeon floors built from room sockets, plus a death and resurrection flow.",
      "The Dustvein mine: a rail network described in data (20 lines, 11 switches, loops and hidden caches), mine carts, trap chains, and the Bottomless Adits, an endless dungeon whose difficulty grows floor by floor.",
      "New enemies and bosses: the Horseman with charge-through passes, overseer squads that take orders (ambush, flank, retreat), flying spearmen and bone archers, mimics.",
      "Wagon travel between stations on a parchment island map, herbalism as a profession, and English localization groundwork.",
      "A streamed open-world prototype with a world map and an endless forest as the world border.",
      "Server-authoritative co-op and MMO foundations: accounts backend, dedicated zone server, server browser, trading, mounts, chat.",
      "Quests and dialogues, interactive mechanisms (levers, code doors, pressure plates) and environment zones (water, sand, wind, vortex)."
    ],
    groups: [
      {
        title: "Worlds",
        intro: "Fresh frames from November 2026: the rebuilt Winter Castle, the open island and its biomes, the Dustvein mine, wagon travel and the Ashen Isle.",
        layout: "shots",
        items: [
          { img: "assets/fi4/throne-hall.webp", cap: "Winter Castle rebuilt: the throne hall", alt: "A long stone hall with red banners, fire bowls and a red carpet to the throne" },
          { img: "assets/fi4/throne-king.webp", cap: "The king on the throne between kneeling crusaders", alt: "A king on a throne, fire bowls and a crusader in white armor in the foreground" },
          { img: "assets/fi4/capital-meadows.webp", cap: "Throne Meadows: the capital on the horizon", alt: "Grassland with trees and a walled city on the horizon" },
          { img: "assets/fi4/town-plaza.webp", cap: "Bright Ford: the town square", alt: "A cobbled square with a fountain, houses and a tower" },
          { img: "assets/fi4/march-peaks.webp", cap: "Snowy peaks of the March", alt: "Snow-covered mountains with rocky slopes" },
          { img: "assets/fi4/pinewood.webp", cap: "Pinewood plains under the mountain", alt: "Plains with pine trees and a mountain in the distance" },
          { img: "assets/fi4/mine-adit.webp", cap: "The Dustvein mine: the adit and the rails", alt: "A timbered mine entrance with rails going into the dark" },
          { img: "assets/fi4/mine-gallery.webp", cap: "The deep gallery of the mine", alt: "Rails running through wooden frames deep in a dark mine" },
          { img: "assets/fi4/wagon-night.webp", cap: "Wagon travel: boarding on the outskirts of Bright Ford", alt: "A hero next to a horse-drawn wagon on a snowy night" },
          { img: "assets/fi4/waypoint-fire.webp", cap: "A campfire waypoint at the camp", alt: "A hero standing at a campfire between tents at dusk" },
          { img: "assets/fi4/ashen-isle.webp", cap: "Ashen Isle: red rain under a cratered moon", alt: "A huge moon in a dark sky over a red landscape with falling red rain" },
          { img: "assets/fi4/ashen-moon.webp", cap: "The moon over the Ashen Isle", alt: "A cratered moon among purple storm clouds" }
        ]
      },
      {
        title: "Mechanics",
        intro: "Screens of the systems that describe the game. The interface is in Russian for now; the English translation is in progress.",
        layout: "shots",
        items: [
          { img: "assets/fi4/sys-abilities.webp", cap: "Ability book: abilities, passives and controls", alt: "A book window listing abilities with icons and descriptions" },
          { img: "assets/fi4/sys-specs.webp", cap: "Specialization window: pick a path, then its talent branch", alt: "A specialization window with a talent branch and descriptions" },
          { img: "assets/fi4/sys-mage-paths.webp", cap: "Mage paths: Sorcerer, Warlock and Priest", alt: "Three talent trees drawn side by side" },
          { img: "assets/fi4/sys-market.webp", cap: "A merchant: your bag on the left, his goods on the right", alt: "A trade window with the player's items and the merchant's goods" },
          { img: "assets/fi4/sys-travel-map.webp", cap: "Coachman's map: stations, route and price", alt: "A parchment map of the island with wagon stations and a highlighted route" },
          { img: "assets/fi4/map-island.webp", cap: "Island map with regions", alt: "A parchment map of the island divided into regions" },
          { img: "assets/fi4/map-world.webp", cap: "World map: the islands around the sun", alt: "A round world map with islands around a sun" },
          { img: "assets/fi4/menu-en.webp", cap: "Main menu in English: story mode (levels 1-60) or the shared world", alt: "The main menu with Single/Co-op and MMO modes" },
          { img: "assets/fi4/ygg-talents.webp", cap: "Talent tree on a Yggdrasil canvas: branches, ranks and prerequisites", alt: "A warrior talent tree drawn as a branching world tree" },
          { img: "assets/fi4/ygg-alchemy.webp", cap: "Profession tree: alchemy recipes unlocked as nodes", alt: "The alchemy profession tree drawn as a branching tree" },
          { img: "assets/fi4/sys-creation.webp", cap: "Character creation: sides, races and classes", alt: "Character creation screen with races, classes and a demon mage preview" },
          { img: "assets/fi4/sys-shop.webp", cap: "Market window: buying and selling", alt: "A shop window with goods to buy and items to sell" },
          { img: "assets/fi4/sys-throw.webp", cap: "Throwable flasks and area effects (dev room)", alt: "Colored area effects of throwable flasks in the dev room" },
          { img: "assets/fi4/server-browser.webp", cap: "Server browser for co-op and online play", alt: "Server browser window with a list of servers" }
        ]
      },
      {
        title: "Bosses and enemies",
        intro: "New in November: the Horseman boss, mimics and flying enemies (prototype models in the test arena).",
        layout: "shots",
        items: [
          { img: "assets/fi4/rider-concept.webp", cap: "The Horseman: concept art and the model", alt: "Concept art of an undead rider on a horse next to front and side views of the armored model" },
          { img: "assets/fi4/horseman.webp", cap: "Horseman boss prototype: charge-through passes and circling", alt: "A rider on a black horse charging through the arena in several frames" },
          { img: "assets/fi4/mimic.webp", cap: "Treasure chests and a mimic among them", alt: "Two chests and a third chest with teeth and glowing eyes" },
          { img: "assets/fi4/flying-skull.webp", cap: "A flying skull: the bone archer's head", alt: "A large flying skull with green glowing eyes" }
        ]
      },
      {
        title: "Earlier builds",
        intro: "The prologue level, a village and the first open-world prototype (October 2026).",
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
      "The game is built stage by stage: every stage is designed on paper first, implemented in Godot and committed on its own. Stages 1-11 are done and stage 12 is under way: after the character, movement, combat, hook, powers and weapons came stealth, a night district with a game clock and resident schedules, errands and dialogues, shops, Li's apartment with inventory, map and saves, and drivable cars. Next: the first canonical story mission."
    ],
    features: [
      "Hei's model built in Blender from separate body, coat and mask parts on one skeleton, with a coat that sways on spring bones.",
      "A smooth animation system with three blending slots and an upper-body layer; clips are mapped through data, with no clip names in gameplay code.",
      "Third-person movement and camera: run, sprint, jump, wall climb, roll.",
      "Melee combat: jabs, heavy attacks and counters.",
      "Wire hook: hold-to-aim grapple, swinging between rooftops, pulling enemies in, electricity running down the wire.",
      "A contractor power: an electric discharge that arcs between enemies.",
      "Weapons and inventory: pick up and fire pistols and submachine guns, money and shops.",
      "Stealth: enemies see in a cone that walls block, hear running and shots, remember where they last saw you and search; crouching keeps you quiet.",
      "An open night district: a game clock, residents with daily schedules, a 24-hour store, cars you can get in and drive.",
      "Errands and dialogues with a staged camera, 3D portraits of the speakers and typed-out lines with voice blips.",
      "Li's apartment: sleep, a wardrobe with a 3D preview (civilian look or the Black Reaper), a stash, a district map, three save slots plus quick and auto saves.",
      "A toon look with outlines, a night sky and lit windows; the blue glow of a contractor using his power.",
      "Data-driven design: weapons, abilities, quests, dialogues and enemies live in data files."
    ],
    groups: [
      {
        title: "Night district",
        intro: "Stages 8-12 (November 2026): the open district, errands, dialogues and Li's apartment. Block-out geometry, the interface is in Russian.",
        layout: "shots",
        items: [
          { img: "assets/dtb/courier.webp", cap: "A courier asks for help on the shopping street", alt: "A night street with lit high-rises, a car and a dialogue panel with a courier" },
          { img: "assets/dtb/district.webp", cap: "The district at night: a neighbor and an errand marker", alt: "Hei in a night courtyard between lit buildings, a neighbor nearby" },
          { img: "assets/dtb/dialogue.webp", cap: "Dialogue with a 3D portrait and answer choices", alt: "A neighbor standing in the courtyard, a dialogue panel with a portrait and two answers" },
          { img: "assets/dtb/street-bandits.webp", cap: "Bandits gather on the street: a warning before a fight", alt: "Hei in front of a group of bandits on a lit street at night" },
          { img: "assets/dtb/car.webp", cap: "A car you can get in and drive", alt: "A sedan parked between high-rises at night" },
          { img: "assets/dtb/apartment.webp", cap: "Li's apartment: bed, wardrobe and stash", alt: "Hei standing in a small apartment with a bed and furniture" },
          { img: "assets/dtb/wardrobe.webp", cap: "Wardrobe with a 3D preview: civilian look or the Black Reaper", alt: "A wardrobe window with outfit options and a preview of the character" },
          { img: "assets/dtb/stash.webp", cap: "Stash: move items between the bag and the hiding place", alt: "A stash window with two columns of items" },
          { img: "assets/dtb/district-map.webp", cap: "District map: home, the current target, shops and alleys", alt: "A map window with the district layout and markers" },
          { img: "assets/dtb/shop.webp", cap: "A 24-hour store", alt: "A shop window with goods, prices and buy buttons" }
        ]
      },
      {
        title: "Gameplay",
        intro: "Frames from the test sandbox level, stages 1-6 (placeholder geometry).",
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
