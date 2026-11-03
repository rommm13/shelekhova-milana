# GitHub Pages deployment & maintenance

**Repository:** `https://github.com/rommm13/shelekhova-milana`  
**Public URL:** `https://rommm13.github.io/shelekhova-milana/`  
**Publishing source:** branch `main`, folder `/ (root)`
**DNS/custom domain:** none. **Build:** none.

## Initial setup / reconfiguration

1. Ensure the **public** repository `rommm13/shelekhova-milana` exists and contains all sources at root (`index.html`, `.nojekyll`).
2. If not already configured, set GitHub Pages to **Deploy from a branch**, Branch **main**, Folder **/(root)**.
3. With an authenticated GitHub CLI: `gh api -X POST repos/rommm13/shelekhova-milana/pages -f build_type=legacy -f 'source[branch]=main' -f 'source[path]=/'` (if reconfiguring).
4. Confirm Pages metadata: `gh api repos/rommm13/shelekhova-milana/pages`.

GitHub Pages may run its own managed deployment job internally. That is expected and **not** a requirement to create custom `.github/workflows` or run paid CI.

## Routine update

```bash
git pull --ff-only origin main
# make and preview changes
python3 -m http.server 8080
git diff --check
git status --short
git add index.html styles.css script.js assets README.md AGENTS.md docs
git commit -m "content: refine portfolio story"
git push origin main
```

After push:

- Check `https://rommm13.github.io/shelekhova-milana/` returns HTML and correct `title`.
- Check `.../styles.css`, `.../script.js`, `.../assets/portrait.webp` all respond successfully.
- Check Pages status via CLI or GitHub UI (`Settings → Pages`).
- Confirm on phone and desktop that no overflow, broken images or missing translations exist.

## Problems and quick diagnosis

- **404 at entire site:** confirm repository public, Pages configured to `main/(root)`, deployment completed, URL path spelling.
- **HTML loads, image/styles fail:** asset URLs may have become root-absolute (`/assets/...`); preserve relative `assets/...` for a project page.
- **Page out of date:** inspect latest Git commit, Pages deployment state, and browser cache.
- **Pages disabled / policy:** inspect repo Settings and plan limits. Do not migrate to paid hosting without permission.
- **Unexpected permissions/auth problems:** check the connected GitHub account/repo and read errors. Never echo tokens in a terminal transcript.
- **RU toggle broken:** confirm every `data-i18n` value exists in `script.js`, JS syntax and DOM IDs haven't drifted.

## Rollback

Find the last healthy commit and **revert** the bad commit, then push (preserves public history):

```bash
git log --oneline -10
git revert <bad-commit-sha>
git push origin main
```

Avoid `git reset --hard`, force pushes or deleting/rewriting public history without explicit permission.

## Security and operational limits

No secrets, no databases, no webhooks, no forms, no external JS dependencies and no tracking. Add a minimal `.gitignore` for local editor/temp files. GitHub Pages always serves public content; do not commit private documents or full-resolution private photos even to an unpublished branch of a public repo.
