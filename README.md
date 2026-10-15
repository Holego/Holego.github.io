# Rouger Bin: portfolio site

Live: https://holego.github.io/

A plain static site (no build step): GitHub Pages publishes whatever is in the `main` branch, about a minute after each commit.

## Files

| File | What it is |
|---|---|
| `index.html` | the whole page: texts, projects, stack, contacts, the game section |
| `assets/games.js` | **the games showcase data**: add, change or remove a game here (see below) |
| `privacy-policy.html` | privacy policy used by the Google Play listings |
| `app-ads.txt` | AdMob verification file: keep the name and the place (the site root) |
| `assets/games/<id>/` | icon and screenshots of each game |
| `assets/icons/`, `assets/fi4/` | mod icons; screenshots and clips of Forgotten Island 4 |
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
