# Milana Shelekhova | personal website

**Personal portfolio / editorial-style digital visiting card** of Milana Shelekhova, first-year Economics student at the Financial University in Moscow. It is a standalone personal website about her interests, values, studies and life outside the classroom. It is not tied to any competition, scholarship, employer or application.

**Website:** `https://rommm13.github.io/shelekhova-milana/` (published)  
**GitHub repository:** `https://github.com/rommm13/shelekhova-milana/`  
**Owner/editor:** Milana; repository maintenance is performed by an authorized maintainer or coding agent.
**Default language:** English (there is a RU switch).

## Why this exists

A personal page should feel more human than a list of certificates. It lets friends, classmates, project teammates and anyone interested see what she studies and what she enjoys:

- **Serious about learning:** Financial University, financial instruments, digital analysis and programming.
- **Real achievements:** prizes in national Spanish olympiads, regional first place, academic work and case competitions.
- **Involved beyond classes:** financial-conference volunteering, working with people, language learning.
- **A person outside the classroom:** travel, especially discovering new places, taekwondo and sport.

The key message is **curious, disciplined and internationally minded, without making up experience or claiming achievements not in the CV.** The site is independent, not an official university resource, and not a CV generator. It does not target any named selection programme.

## Tech and hosting

- Static, responsive **HTML + CSS + vanilla JavaScript**; no framework, bundler, database, backend, package manager or runtime dependencies.
- **GitHub Pages** serves `main` from `/` (repository root). `.nojekyll` prevents Jekyll processing.
- **Free to host** using a public repository on a GitHub Free account. No custom domain required.
- No analytics, cookies, forms, trackers, third-party libraries or API keys. JavaScript saves only the chosen language in browser localStorage.
- `assets/` contains optimized, locally hosted photos, an SVG favicon and a social preview image.
- Relative asset paths keep the site usable under the GitHub Pages project subpath.

## Repository structure

```text
.
├── index.html          # semantic page structure, original English text, image alt text, SEO
├── styles.css          # design tokens, responsive layout and motion
├── script.js           # EN/RU translation toggle and reading progress
├── .gitignore
├── .nojekyll
├── assets/
│   ├── portrait.webp   # opening portrait
│   ├── portrait.jpg    # JPEG fallback for the opening portrait
│   ├── olympiad.webp   # olympiad / group achievement
│   ├── istanbul.webp   # travel in Istanbul
│   ├── community.webp  # teamwork and student community
│   ├── sport.webp      # taekwondo
│   ├── og-cover.jpg    # social preview (Open Graph)
│   └── favicon.svg
├── docs/
│   ├── CONTENT.md      # content accuracy, language policy and image rules
│   ├── DESIGN.md       # look, accessibility and mobile rules
│   ├── DEPLOY.md       # publish, verify, debug and rollback
│   └── HANDOFF.md      # live deployment status and maintenance handoff
└── AGENTS.md           # read this first if you are a coding agent
```

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080/
```

or on Windows with Python installed:

```powershell
py -m http.server 8080
```

Do not test only using a `file://` path: use a local HTTP server to mirror hosting behaviour. For substantial edits, check **mobile widths 320 / 375 / 390 px** and desktop 1280 / 1440 px in a real browser.

## Editing workflow

1. Read `AGENTS.md` and relevant `docs/` files. Confirm current contents rather than trusting chat history.
2. Make a focused branch or commit on `main`. Never change the existing `rommm13/cv-milana` repository: that is a separate CV Studio product.
3. Text changes: edit English content in `index.html`, then adjust matching Russian `data-i18n` values in `script.js`. Update document title/meta if the headline changes.
4. Photo changes: use images approved by Milana, export optimized WebP files, retain aspect ratios and clear `alt` descriptions. Don't retouch identity or add invented environments.
5. Test console errors, translations, link targets, image load, responsive sizing, keyboard navigation and overflow; use `docs/DEPLOY.md` checklist.
6. After the owner chooses to publish, push to `main`. A branch-based GitHub Pages publication is automatically triggered; **no hosted CI workflow is needed**.
7. Verify the **actual deployed site** and document any changes in the commit message.

## Public privacy and accuracy rules

This repo is **public**: its entire history and image assets may be downloaded, copied and indexed. The owner-approved contact block publishes a Telegram icon button linking to `https://t.me/yoomilkaa` (the handle is not shown as text), the telephone number, email and general region (`Moscow region, Russia`). **Do not add** a precise home address, additional phone numbers or messenger handles, IDs, passport information, date of birth, grades or certificates containing personal data, private photos, login credentials, tokens or secrets. Do not add third-party faces or event photos without confirmation they may be published. Do not invent prizes, titles, language test results, university positions or travel destinations. Milana's approval is required before changing major biographical facts or publishing new portraits.

## Source of factual claims

The initial factual copy is based on a CV uploaded in the project conversation in November 2026 and on the selected photographs. Verify changing facts directly with Milana before future edits. This site is not intended or branded for any specific programme or application.

## Agent handoff

**Start with [`AGENTS.md`](AGENTS.md).** It specifies nonnegotiable design, quality, deployment and content constraints so a new agent can maintain the site with no previous conversation context.

## License / media rights

**All rights reserved**, unless the site owner explicitly licenses a component otherwise. Photographs are supplied for this personal website and are **not** offered as open licensed stock images. Do not reuse or publish them elsewhere without the owner's permission.
