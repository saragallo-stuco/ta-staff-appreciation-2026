# Thornton Academy — Staff Appreciation Week Trivia Hub

A single-page web hub for the Staff Appreciation Week trivia game. Hosts the daily clue, yesterday's winners, the teacher raffle, and prize information. Built to be updated once per morning by editing one block in `index.html`.

---

## What's in this repo

```
ta-staff-appreciation/
├── index.html              ← The trivia hub page (this is what gets published)
├── README.md               ← You're reading it
├── .gitignore              ← Keeps system junk out of the repo
├── vouchers/               ← Printable gift voucher PDFs
│   ├── Voucher_HancockLumber_100.pdf
│   ├── Voucher_BarnesNoble_100.pdf
│   ├── Voucher_Darden_50.pdf
│   ├── Voucher_BatsonRiver_50.pdf
│   └── Voucher_SweetsCo_20.pdf
└── tickets/                ← Drop daily ticket photos here
    └── .gitkeep
```

The vouchers and tickets folders aren't required for the page to work — they're just bundled with the repo for convenience so everything lives in one place.

---

## One-time setup (~10 minutes)

### 1. Create the GitHub repo
1. Sign in at **github.com**
2. Click **New repository** (green button, top-left)
3. Name it: `ta-staff-appreciation-2026` (or anything — but the URL will use this name)
4. Set to **Public** (required for free GitHub Pages)
5. Skip "Add a README" — this folder already has one
6. Click **Create repository**
7. Leave the page open. You'll need the URL it shows you.

### 2. Connect this folder with GitHub Desktop
1. Open **GitHub Desktop**
2. **File → Add Local Repository**
3. Browse to this folder (the one containing `index.html`) → choose it
4. GitHub Desktop will say "this directory does not appear to be a Git repository." Click **create a repository**
5. Click **Publish repository** (top-right) — match the name you used on GitHub.com
6. Uncheck "Keep this code private"
7. Click **Publish repository**

Your code is now on GitHub.

### 3. Turn on GitHub Pages
1. On github.com, go to your repo → **Settings** (top tab)
2. **Pages** in the left sidebar
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
4. Click **Save**
5. Wait ~1 minute, then refresh. A green box appears with your URL:
   `https://YOUR-USERNAME.github.io/ta-staff-appreciation-2026/`

**That URL is what goes in the daily email.** It stays the same all week.

### 4. Verify
Open the URL in a browser. You should see the trivia hub page. Bookmark it.

---

## Daily update workflow (~3 minutes)

Each morning before sending the email:

### 1. Edit `index.html` in VS Code
Open `index.html` and find the `CONFIG` block near the top (it's right after the first `<script>` tag, around line 12).

```js
const CONFIG = {
  dayNumber: 2,
  date: "Tuesday, May 5",

  todayBlurb: `Today's mystery staffer punched their first time card at...`,

  submitLink: "https://forms.google.com/REPLACE-WITH-YOUR-FORM-LINK",
  deadline: "by 2:00 PM today",

  yesterdayTrivia: {
    revealedTeacher: "Mr. Rodriguez",
    winnerName: "Jane Doe",
    winnerGrade: "Grade 11",
    ticketImage: ""
  },

  yesterdayRaffle: {
    teacherWinner: "Ms. Lambert",
    prizeWon: "$50 Batson River Voucher",
    ticketImage: ""
  }
};
```

Update each field for today:

| Field | What goes here |
|---|---|
| `dayNumber` | Today's day number — bump it (2 → 3 → 4 → 5) |
| `date` | Today's date, e.g. `"Wednesday, May 6"` |
| `todayBlurb` | Today's clue. Keep the backticks. Use `<strong>...</strong>` for **bold**, `<em>...</em>` for *italic*, `<br>` for line breaks |
| `submitLink` | The Google Form URL for today's submissions |
| `deadline` | When guesses are due, e.g. `"by 2:00 PM today"` |
| `yesterdayTrivia.revealedTeacher` | Yesterday's mystery teacher (now revealed) |
| `yesterdayTrivia.winnerName` | The student who guessed correctly first |
| `yesterdayTrivia.winnerGrade` | Their grade |
| `yesterdayTrivia.ticketImage` | URL or filename of the winning trivia ticket photo (or leave `""`) |
| `yesterdayRaffle.teacherWinner` | The teacher whose name was drawn from the raffle |
| `yesterdayRaffle.prizeWon` | What they won, e.g. `"$100 Hancock Lumber Voucher"` |
| `yesterdayRaffle.ticketImage` | URL or filename of the winning raffle ticket photo |

Save the file (Cmd/Ctrl + S).

### 2. Commit and push with GitHub Desktop
1. Open **GitHub Desktop** — it'll show your changes in the left panel automatically
2. At the bottom of the window, in the **Summary** field, type something like `Day 3 update`
3. Click **Commit to main**
4. Click **Push origin** at the top (or use Cmd/Ctrl + P)

### 3. Wait 30–60 seconds, then refresh the live URL
GitHub Pages takes a moment to rebuild. After a refresh, your changes are live for everyone with the link.

---

## Adding ticket photos

When you have a photo of a winning ticket, you have two options:

### Option A: Drop it in this repo
1. Save the photo to the `tickets/` folder
2. Name it descriptively, e.g. `day2-trivia.jpg`
3. In the CONFIG block, set:
   ```js
   ticketImage: "tickets/day2-trivia.jpg"
   ```
4. Commit and push the same way (you'll see the new image in GitHub Desktop's changes panel too)

### Option B: Use Imgur (no commit needed for the image)
1. Go to **imgur.com** → drag the photo in (no account required)
2. Right-click the uploaded image → **Copy image address**
3. Paste that URL into `ticketImage`:
   ```js
   ticketImage: "https://i.imgur.com/abc123.jpg"
   ```
4. Commit and push the HTML change only

Option A keeps everything in one place. Option B is faster if you're in a hurry.

---

## Sending the daily email

Your email template:

> **Subject:** Staff Trivia, Who Am I? (Day [#])
>
> Hey everyone,
>
> It's time for today's Staff Trivia. Visit the trivia hub for today's clue and yesterday's reveals:
>
> **https://YOUR-USERNAME.github.io/ta-staff-appreciation-2026/**
>
> Submit your guess from there. Guesses are due by [TIME]. The answer and the winners will be revealed [WHEN / WHERE].
>
> Good luck,
> Mr. Gallo

Same URL all week. Students click it, land on the hub, see the clue, click the **Submit Your Guess** button, and the form opens in a new tab.

---

## Pre-flight checklist (before you commit each morning)

A 30-second check:

- [ ] `dayNumber` and `date` reflect today
- [ ] `todayBlurb` has today's clue (not yesterday's)
- [ ] `submitLink` points to today's Google Form (or a fresh form if you reset)
- [ ] `yesterdayTrivia` and `yesterdayRaffle` are filled in with the previous day's results
- [ ] No stray quotes or unmatched backticks broke the file (open the local file in a browser to verify it still renders)

If something looks off after pushing, GitHub Desktop's **History** tab lets you revert any commit cleanly.

---

## Hosting the page later in the week

The page is fully static — it'll keep serving from GitHub Pages indefinitely at no cost. After Staff Appreciation Week wraps:
- Set the repo to **Archived** in repo Settings to mark it as historical, OR
- Delete the repo, OR
- Just leave it. Anyone with the link will see the final state.

---

## Hosted on

GitHub Pages — `https://YOUR-USERNAME.github.io/ta-staff-appreciation-2026/`

Built with ❤️ by Mr. Gallo for Staff Appreciation Week 2026.
