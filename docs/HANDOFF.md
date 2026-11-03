# Agent handoff: standalone Milana personal website

## Status on 2026-11-03

- **Published.** Repository `rommm13/shelekhova-milana`, GitHub Pages: `main` / `(root)`, HTTPS enforced. Site live at `https://rommm13.github.io/shelekhova-milana/`.
- The website is **not affiliated with any named programme or application**. Do not add application-related banners, slogans, branding or eligibility text.
- Design concept: a personal editorial-style website: ambitious student, real projects and olympiad results, with travel, people and sports receiving equal attention.
- The site has no backend or framework. Everything needed is in the archive.
- **Latest commit SHA:** da799e5c3e0e6ece1bf86897e06f00a21d5685f8

## Exact first-deploy task

1. Unpack ZIP into an empty working folder. Read `README.md`, `AGENTS.md`, `docs/CONTENT.md`, `docs/DESIGN.md`, `docs/DEPLOY.md`.
2. Run a local HTTP preview; inspect on iPhone-sized viewport, at 320 and 390 pixels, and a desktop viewport. Confirm EN/RU toggle and relative image paths.
3. Confirm permission to publicly publish any photos containing other people. Five compressed WebP assets are included; original images and original CV are intentionally **not** included.
4. On the authorized GitHub account, **create a separate, public repository** `rommm13/milana-shelekhova`, with `main` as default. Do not edit `rommm13/cv-milana` or any other existing repository.
5. Commit the archive content at repository root, keeping `index.html` and `.nojekyll` at root. Configure GitHub Pages: `Deploy from a branch`, `main`, `/(root)`.
6. Verify actual URL, CSS, JS, five images, desktop/mobile and EN/RU. Report real repo and Pages links and any outstanding permission issues.
7. Later update content and media in the same repo using small traceable commits; avoid gratuitous rewrites or paid CI.

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
