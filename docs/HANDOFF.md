# Agent handoff: standalone Milana personal website

## Status on 2026-11-03

- **Published.** Repository `rommm13/shelekhova-milana`, GitHub Pages: `main` / `(root)`, HTTPS enforced. Site live at `https://rommm13.github.io/shelekhova-milana/`.
- The website is **not affiliated with any named programme or application**. Do not add application-related banners, slogans, branding or eligibility text.
- Design concept: a personal editorial-style website: ambitious student, real projects and olympiad results, with travel, people and sports receiving equal attention.
- The site has no backend or framework. Everything needed is in the archive.
- **Last verified deployed commit:** `fef5acdb43422977c4eac35537b27e9a24ebeb41`
- **Verification:** homepage, CSS, JavaScript and all five photos return HTTP 200 over HTTPS; EN/RU toggle, language persistence, navigation anchors and contact link work; checked at 320, 375, 390, 768, 1280 and 1440 px with no horizontal overflow.

## Deployment checklist (completed 2026-11-03)

1. Unpacked the approved ZIP into an empty working folder and read `README.md`, `AGENTS.md`, `docs/CONTENT.md`, `docs/DESIGN.md`, `docs/DEPLOY.md`.
2. Ran a local HTTP preview and inspected mobile and desktop widths; confirmed EN/RU toggle and relative image paths.
3. Confirmed the package contains five compressed WebP assets with no EXIF/GPS; original images and original CV are intentionally **not** included.
4. Created the separate public repository `rommm13/shelekhova-milana` with `main` as default. `rommm13/cv-milana` and all other repositories were left untouched.
5. Committed the site at repository root, keeping `index.html` and `.nojekyll` at root. Configured GitHub Pages: `Deploy from a branch`, `main`, `/(root)`, HTTPS enforced, no custom domain.
6. Verified the live URL, CSS, JS, five images, desktop/mobile and EN/RU. Fixed Russian headings that overflowed at 320 px in commit `fef5acd`.
7. Future content and media changes go into the same repository using small traceable commits; no custom CI or paid services.

## Key rationale

- Static HTML/CSS/JS is easy for a future autonomous agent to maintain. Fewer dependencies, no recurring costs, no backend to break.
- A bilingual site is useful to different readers; English is the default, Russian is one click away.
- A first-person story and selected pictures reveal interests outside university without the exhausting look of a second CV.
- Optimized local WebP files keep load time reasonable and avoid linking private photo libraries.
- No analytics, trackers, contact forms, or original documents: minimal privacy exposure. The public contact email is an intentional opt-in from the source CV.
- The owner can later change the repository, hosting domain, language balance or text without redesigning the entire site.

## Content revision checkpoints

- University programme name and studies stay accurate.
- Spanish Olympiad awards, language certification and conference volunteering should never be inflated.
- Travel is a personal interest, not a list of invented destinations.
- New group photos require confirmation of publication rights; remove them if permission is unclear.
- When an award or educational status changes, update both English (`index.html`) and Russian (`script.js`).
