# Visual / UX specification

## Direction

Contemporary editorial personal portfolio with a warm paper-like background, charcoal typography, restrained coral/orange details, expressive serif italics and genuine, strong photographs. The result should feel like a curated mini-magazine, not a recruiter database or AI-template cover letter.

## Structure

- Full-width navigation, left editorial hero copy + right portrait on desktop.
- About: oversized headline, narrative description and three achievement facts.
- Dark contrast section for academic milestones and achievements.
- Asymmetrical travel/community/sport cards, each with clear visual hierarchy.
- Language skills in a tight, accessible grid and an understated closing contact panel.

## Editing rules

- Keep CSS tokens at the top of `styles.css`. Match spacing and typography before introducing new styles.
- Photos in `assets/` optimized for delivery; image crop must keep faces, trophies and background landmarks legible.
- No low-contrast light grey microtext, no autoplay videos, no sudden scroll jumps, no horizontal carousels on 320px.
- Layout widths: 320 / 360 / 375 / 390 / 430 (mobile), 768 (tablet), 1024 / 1280 / 1440+ (desktop).
- Critical cross-check: top nav must never collide with toggle at 320; hero text must not break beyond viewport; cards must stack elegantly; footer links remain tappable.
- Keep accessible names, alt text, visible focus ring and `prefers-reduced-motion` support.
- Avoid adding heavyweight UI libraries or large animations for decoration alone.

## Photo usage / social preview

- `portrait.webp` is the main image; recheck facial crop on mobile and desktop.
- `istanbul.webp` documents travel and should show Galata Tower if the card uses that location.
- `olympiad.webp`, `community.webp` and `sport.webp` support specific real experiences.
- `og-cover.jpg` is the sharing preview. When changing the domain, update `og:url` and absolute `og:image` in `index.html` to avoid social-card failures.

## Smoke tests

1. First visit in incognito defaults to English.
2. Toggle RU / EN; refresh and check that choice is preserved.
3. Check title/description and all CTA labels.
4. Click main navigation and `mailto:`.
5. Load all images, check for layout shifts or clipping.
6. Test 320px and desktop; no element extends past document body width.
7. Browser console clean; JS does not throw on blocked `localStorage`.
8. Keyboard navigation and reduced-motion mode remain usable.
