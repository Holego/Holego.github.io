/*
  GAMES SHOWCASE: edit this file to add, change, reorder or remove games. You do not need to touch index.html.

  Each game is one block between { ... }, blocks are separated by commas.
  To add a game: copy a whole block, paste it where you want it in the list, then change the fields.

    id           short name without spaces, also the folder for the pictures: assets/games/<id>/
    title        the name shown to visitors
    tagline      one short line under the title
    description  a list of paragraphs (each one in quotes, separated by commas)
    tags         small labels
    icon         path to the icon (square picture, 128x128 is enough)
    screenshots  list of picture paths, in the order they should appear (portrait and landscape both work)
    play         link to the Google Play page ("" if there is none)
    live         true  = the Google Play button is shown and clickable
                 false = "Coming soon" is shown instead (use this until the Google Play page opens)
    github       link to the source code ("" if there is none)

  Rules: keep every text in "double quotes", keep the commas between items, no comma after the last item of a list.
  After saving (Commit changes on GitHub) the site updates in about a minute.
*/
window.GAMES = [
  {
    id: "knight-cells",
    title: "Knight Cells",
    tagline: "A fantasy roguelite with sword combat, stacking relics and challenging bosses.",
    description: [
      "A 2D fantasy roguelite for mobile. Lead a knight through dangerous regions, fight with your sword and collect relics that change each run.",
      "Collect 12 relics across three rarities and stack their effects: strengthen your sword, attack faster, add poison or lightning, gain extra jumps. A boss seals the exit on every floor, and the Nightmare Knight returns every fifth floor.",
      "Touch controls, English and Russian, progress kept locally on the device."
    ],
    tags: ["Roguelite", "Godot", "Android"],
    icon: "assets/games/knight-cells/icon.webp",
    screenshots: [
      "assets/games/knight-cells/1.webp",
      "assets/games/knight-cells/2.webp",
      "assets/games/knight-cells/3.webp",
      "assets/games/knight-cells/4.webp"
    ],
    play: "https://play.google.com/store/apps/details?id=com.rough_hold.knight_cells",
    live: false,
    github: ""
  },
  {
    id: "bcam",
    title: "Background Camera",
    tagline: "Record video in the background from a home-screen widget.",
    description: [
      "After a one-time setup, recording starts and stops from a home-screen widget or from the notification, without opening the app, and continues while the screen is off.",
      "Pick the camera, resolution, file size, frame rate and whether to record audio. Videos are written straight into a folder you choose. English and Russian."
    ],
    tags: ["Kotlin", "CameraX", "Android", "Open source"],
    icon: "assets/games/bcam/icon.webp",
    screenshots: [
      "assets/games/bcam/1.webp"
    ],
    play: "https://play.google.com/store/apps/details?id=io.github.holego.bcam",
    live: false,
    github: "https://github.com/Holego/BCam"
  },
  {
    id: "nova-reaper",
    title: "Nova Reaper",
    tagline: "Endless space shooter: weapons, bosses, upgrades.",
    description: [
      "An arcade space shooter built around endless survival.",
      "Six weapon types (blaster, shotgun, laser, wave cannon, plasma cannon, flamethrower) that you pick up and combine mid-fight, a growing roster of enemies, and bosses with real mechanics: summoning reinforcements, bouncing lasers, screen-wide attacks."
    ],
    tags: ["Arcade", "Shooter", "Android"],
    icon: "assets/games/nova-reaper/icon.webp",
    screenshots: [
      "assets/games/nova-reaper/1.webp",
      "assets/games/nova-reaper/2.webp",
      "assets/games/nova-reaper/3.webp"
    ],
    play: "https://play.google.com/store/apps/details?id=com.rough_hold.spacehulk2d",
    live: true,
    github: ""
  },
  {
    id: "sonic",
    title: "Fnaf X Sonic.exe X Herobrine",
    tagline: "Survival horror: watch the cameras, close the doors, survive until 6 am.",
    description: [
      "A single-player survival horror game for phones. You are a night guard in a closed building and must hold out from midnight until 6 am while three creatures roam the building. If one of them reaches your room, the level is lost.",
      "Open the surveillance tablet, watch the cameras, close the doors and manage your power."
    ],
    tags: ["Horror", "Survival", "Android"],
    icon: "assets/games/sonic/icon.webp",
    screenshots: [
      "assets/games/sonic/1.webp",
      "assets/games/sonic/2.webp",
      "assets/games/sonic/3.webp",
      "assets/games/sonic/4.webp",
      "assets/games/sonic/5.webp",
      "assets/games/sonic/6.webp"
    ],
    play: "https://play.google.com/store/apps/details?id=com.rough_hold.fnafsonicepshtinherobrin",
    live: true,
    github: ""
  },
  {
    id: "minesandbox",
    title: "Minesandbox",
    tagline: "Voxel survival sandbox: mine, craft, build and survive an endless world.",
    description: [
      "A voxel survival sandbox built for your phone. An endless procedurally generated world where every block can be broken and rebuilt.",
      "Mine, craft tools, fight off the night and build anything you can imagine, from a simple hut to a stone fortress."
    ],
    tags: ["Sandbox", "Survival", "Android"],
    icon: "assets/games/minesandbox/icon.webp",
    screenshots: [
      "assets/games/minesandbox/1.webp",
      "assets/games/minesandbox/2.webp",
      "assets/games/minesandbox/3.webp",
      "assets/games/minesandbox/4.webp"
    ],
    play: "https://play.google.com/store/apps/details?id=com.rough_hold.minesandbox",
    live: true,
    github: ""
  }

  /* Hidden for now: these Google Play pages are not available (404). To show one again, add a block like the ones above.
       Bitcoin Miner              com.rough_hold.btcminer
       Doors Kicker               com.rough_hold.doorkickerrun
       Mr President vs Terrorist  com.rough_hold.eagleone
       Sky Hopper                 com.rough_hold.skyhopper
       2042                       com.rough_hold.treeinrlinetwentittwo
  */
];
