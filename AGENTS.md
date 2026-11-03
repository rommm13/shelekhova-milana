# AGENTS.md — operating instructions for coding agents

> **Read completely before any edits.** This is an independent personal portfolio project, NOT a subproject of CV Studio, PlushBeard, Job Monitor, or any other app owned by the GitHub account.

## 1. Project identity and outcome

- **Repository:** `rommm13/shelekhova-milana`; **URL:** `https://rommm13.github.io/shelekhova-milana/`. This is an independent personal portfolio project.
- The page introduces **Milana Shelekhova**, an Economics student at the Financial University (Moscow). It is a polished, independent digital visiting card showing both her academic interests and everyday life; it has **no formal connection to any specific programme, competition or application**.
- Core editorial tension: **works and studies hard, values education and languages, yet actively explores the world, loves travel, people and sport**. Both sides must feel real. Avoid exaggerated ambitions, forced slogans and AI-sounding promotional copy.
- Current factual achievements: first-year Economics (from 2026); digital/financial analysis and programming; twice a prize winner of the final round of the All-Russian Spanish Olympiad (2025, 2026); first overall in the Moscow Region stage in 2026; volunteering at the university's financial-markets conference; participation in Changellenge Cup Moscow 2026; taekwondo prize-winning experience; travel photo in Istanbul.
- These are historical facts. Do not invent additional awards, a scholarship, a role, or an admission.

## 2. Source of truth

| Subject | Canonical source | Rule |
|---|---|---|
| Visible English page | `index.html` | Default language / editorial source |
| Russian copy | `script.js` → `t.ru` | Every `data-i18n` key must have RU value |
| Layout | `styles.css` | Reuse existing CSS tokens and responsive rules |
| Photo assets | `assets/` | Approved originals, locally served, compressed |
| Agent instructions | This file | Keep relevant and concise, update for structural changes |
| Public factual claims | CV and verified owner updates | Re-verify before changing achievements or qualifications |

There is no CMS, no back end, no build pipeline and no database. Do **not** introduce a React rewrite, tailwind, Node dependency tree, external fonts or paid platforms to make routine copy changes. Propose major architectural changes first, with explicit reasons, not vague claims that a framework is more modern.

## 3. Visual DNA — don't casually break it

- A **modern editorial portfolio**, not a corporate landing page, a university template or a résumé pasted into HTML.
- Warm off-white / cream background, very dark charcoal text, thoughtful orange-red/coral highlights; big typographic hierarchy; restrained serif italics; generous breathing room, confident photo composition and subtle motion.
- Photo-first hero, clear person-focused narrative, travel as a meaningful part of life.
- Responsive layout must work at 320px minimum without horizontal scrolling, overlapping buttons or cropped important faces.
- Accessibility basics: keyboard-focus indicators; sensible heading order; meaningful image alt text; adequate contrast; reduced-motion handling; semantic landmarks.
- Strong English must sound **natural and personal**, not full of vague buzzwords like "dynamic", "passionate", "innovative leader", "impact-driven", "unlock my potential".
- Do not alter facial identity, substitute AI-generated portraits, or depict accomplishments that didn't happen.

## 4. Copy and localization

- Default English (`<html lang="en">`), voluntary toggle EN/RU. Language choice persists locally. On first visit English opens regardless of browser locale, supporting international readers.
- Keep translations aligned. English `data-i18n` text lives in HTML; Russian counterparts live in `script.js`.
- When adding a translatable section, add stable `data-i18n="someKey"` in HTML and a unique `someKey` in `t.ru`; verify both modes visually after changing.
- Translate action labels, image captions, aria labels and page title as appropriate. Avoid leaving random English CTA buttons in the Russian interface.
- Claims about certifications must not overstate level: **Spanish DELE B1 is certified**, Spanish proficiency listed as C1 in CV, but there is **no confirmed DELE C1 certification**. Never label C1 as formally certified.
- This is a personal page: do not introduce promotional messages or eligibility/deadline content for any named programme without an explicit request.
- It's fine to mention cities plainly if shown in selected photographs, but do not add other countries or travel achievements by inference.

## 5. Privacy, copyright and personal safety

- Public repository, public URL, searchable by default. The owner-approved contact block intentionally publishes Telegram `@yoomilkaa` (`https://t.me/yoomilkaa`), `+7 (929) 595-30-71`, `milana.shelekhova.r@gmail.com` and the general region `Moscow region, Russia`. Never add a precise home address, another phone number or messenger handle, date of birth, passport, academic student ID, hidden EXIF GPS, private documents or app credentials.
- Any new photo must be explicitly approved for a public site, especially group photos with other young people. Strip EXIF and GPS; use WebP unless strong reason otherwise.
- Public contact uses the approved `https://t.me/yoomilkaa`, `tel:+79295953071` and `mailto:milana.shelekhova.r@gmail.com` links; do not add unsolicited social accounts.
- Do not expose the original CV file in the public repo. Website is not a document archive.
- No trackers, analytics SDKs, remote photo hosts, marketing scripts, maps or embedded widgets without user's explicit request and privacy review.
- No unrequested license grant for photographs. If a new contributor adds stock/media, record usage rights first.

## 6. Deployment architecture

- **Publication is already configured**: public repository `rommm13/shelekhova-milana`, GitHub Pages **Deploy from a branch**: `main` → `/(root)`; `.nojekyll` is in root.
- `index.html` is the entry point; other files are referenced by **relative URLs**, essential for a repository page hosted below `/shelekhova-milana/`.
- GitHub's internally managed Pages job may appear in Actions; do not add custom `.github/workflows/*` build/test pipelines unless necessary. Hosted Actions costs/permissions have caused issues in other user projects; this portfolio needs zero build steps.
- If publication is missing, first inspect `Settings → Pages`, Pages API and recent deployment state. Do not 'fix' it by migrating to Vercel or changing other repositories.
- Deployments are triggered by pushing to the Pages source; cache propagation can be delayed. Verify HTTP response and loaded image/assets, not just green Git status.

## 7. Safe workflow for autonomous agents

1. The repository already exists and is published. For a fresh clone, inspect `git status`, the last commit, `README.md`, `AGENTS.md` and `docs/*` first; don't assume branch state.
2. State the intended user-visible outcome; identify exact files to change. For a trivial typo, no roadmap needed.
3. Create small, meaningful changes. Keep all original images until replacements have been visually validated and authorized.
4. Run checks: HTML loads; missing `src`/`href` references; JS parses; no duplicated translation keys; EN/RU toggle; desktop and narrow-mobile widths; console warnings; text contrast; keyboard focus.
5. Ensure no external API secrets, user private data, original DOCX or accidentally staged massive images. Check `git diff --stat` and `git diff --check`.
6. Commit with clear English message, e.g. `content: update study projects` or `fix: mobile navigation at 320px`.
7. When asked to publish, push only this repository. Check the resulting public URL and GitHub Pages status. On failure, report the exact blocker; do not touch unrelated infra.
8. Provide a short change report: pages affected, tests performed, deployment URL, and any verification or publication concerns.

**Hard safety limits:** no force pushes, history rewriting, public repo deletion, turning on paid services, domain changes, installing agents, or editing other GitHub repositories without explicit user authorization.

## 8. Quick commands

```bash
python3 -m http.server 8080
# Browse http://localhost:8080

git status --short
git diff --check
git add index.html styles.css script.js assets README.md AGENTS.md docs
git commit -m "content: update portfolio"
git push origin main

# With authenticated GitHub CLI, optional inspection:
gh api repos/rommm13/shelekhova-milana/pages
```

## 9. Definition of done

A **site build/handoff** is finished when sources, images, EN/RU copy and instructions are complete and validated. A **deployment** is finished only after a commit/push, GitHub Pages activation, and verifying the live public URL. Never claim a completed deployment based only on a ZIP or local preview.
