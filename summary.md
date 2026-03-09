# Codebase Summary: `slidev_test_may`

## 1) Project Purpose
This repository is a **Slidev-based multi-deck presentation workspace** focused on teaching materials (Calculus, Economics, IB Math) plus personal/professional decks (resume/thesis/FunNow).

It also contains a secondary **Nuxt site (`slide_view`)** that acts as a web hub for browsing/opening generated slide decks.

---

## 2) High-Level Architecture

### A. Source content
- `Examples/` → original source materials (mostly `.tex` LaTeX/Beamer files).
- `slides/` → converted/maintained Slidev Markdown decks (`.md`) and related media.

### B. Slidev presentation layer
- Root `package.json` uses `@slidev/cli` with scripts:
  - `pnpm dev` (local presentation dev)
  - `pnpm export`
  - `pnpm build` → custom multi-deck build script
- `components/` defines shared custom Vue components used inside slides:
  - `MathBox.vue` (red theorem/definition box)
  - `Keynote.vue` (blue emphasis/example box)
  - `SlideImage.vue` (image wrapper + caption/size props)

### C. Build pipeline
- `scripts/build-all.js` recursively finds all `.md` under `slides/` and runs:
  - `slidev build <input.md> --out <slide_view/public/...> --base </route/>`
- Output target is `slide_view/public/...`, so built static decks are directly served by the Nuxt app.

### D. Web hub frontend
- `slide_view/` is a Nuxt 4 app with `@nuxt/ui`, `@nuxt/image`, Tailwind 4.
- `AppHeader.vue` provides hardcoded menu links to deck routes (resume, calculus, economics, IB math).
- `pages/index.vue` is a polished landing page (“Slide Hub”).

---

## 3) Current Content Footprint
- `Examples/*.tex`: **33 files** (source teaching docs)
- `slides/*.md`: **22 files** (active Slidev decks)
- Vue components/layout files: root + Nuxt app (custom UI and reusable slide blocks)

Representative deck style patterns:
- Headmatter with title/author/date/theme
- `MathBox` / `Keynote` for pedagogy-friendly callouts
- heavy math via KaTeX (`$...$`, `$$...$$`)
- layout usage: `default`, `cover`, `two-cols`, `end`

---

## 4) Important Conventions Observed

1. **LaTeX→Slidev conversion workflow** is documented in `ray_slidev_conversion.md`.
   - Includes one-to-one mappings for frame structure, formulas, lists, image paths, two-column layouts, and custom box components.

2. **Route convention**:
   - Slide path `slides/A/B.md` becomes published at `/A/B/`.
   - Nuxt header links are manually aligned to these paths.

3. **Deployment config**:
   - `netlify.toml` configured as SPA fallback (`/* -> /index.html`).
   - Note: root build script currently outputs into `slide_view/public`, so deployment strategy depends on whether Nuxt app is separately built/deployed or static artifacts are copied elsewhere.

---

## 5) Gaps / Risks / Technical Debt

1. **README is outdated**
   - Mentions editing `slides.md`, but repo uses multi-file `slides/**.md`.

2. **Potential stale artifact committed**
   - `slides/Calculus/Calculus_teaching_section_3/index.html` contains local Windows dev path in script src (`C:/Users/...`), which looks like accidental dev output rather than portable source.

3. **Manual link maintenance in `AppHeader.vue`**
   - New deck files require manual updates in dropdown link arrays.
   - Could drift from actual filesystem/build outputs.

4. **Build/deploy coupling is implicit**
   - Root script writes into Nuxt `public/`, but root `netlify.toml` points to `dist` from `npm run build`.
   - Worth clarifying expected deploy target (pure Slidev static bundle vs Nuxt app vs combined output).

---

## 6) Suggested Next Improvements (Practical)

1. Refresh `README.md` with actual workflow:
   - how to add a new deck,
   - how to run multi-deck build,
   - how `slide_view` serves outputs.

2. Add automatic deck discovery in Nuxt header:
   - generate links from `slide_view/public` tree or a generated manifest JSON.

3. Decide and document one deployment path:
   - Nuxt-hosted static assets vs direct Slidev-hosted bundles.

4. Remove accidental generated source files (like local-path `index.html`) or move generated artifacts to ignored directories.

---

## 7) One-Sentence Understanding
This codebase is a **teaching-oriented Slidev content repository with a custom Nuxt “Slide Hub” frontend**, where markdown decks are batch-built into web-routable static slide bundles and presented through a curated navigation UI.
