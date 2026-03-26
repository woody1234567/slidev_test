# Slidev Presentation Archive

This repository contains multiple [Slidev](https://github.com/slidevjs/slidev) presentations organized by category.

## 🚀 Quick Start

### 1. Install Dependencies

Make sure you have [pnpm](https://pnpm.io/) installed, then run:

```bash
pnpm install
```

### 2. Run a Presentation

To open a specific slide file, use the following command:

```bash
pnpm slidev [path/to/file.md] --open
```

#### Examples:

- **Insurance RAG System Plan:**
  ```bash
  pnpm slidev slides/interview/insurance_rag_system_plan.md --open
  ```

- **RAG System Presentation (v5):**
  ```bash
  pnpm slidev slides/interview/rag_system_v5.md --open
  ```

### 3. Build & Export

To build a presentation for production:

```bash
pnpm slidev build [path/to/file.md]
```

To export as PDF:

```bash
pnpm slidev export [path/to/file.md]
```

## 📂 Project Structure

- `slides/`: Contains various markdown slide files organized by topic.
  - `Calculus/`
  - `Economics/`
  - `IB_math/`
  - `interview/`
  - `resume/`
- `public/`: Static assets (images, fonts, etc.).
- `components/`: Custom Vue components for slides.
- `styles/`: Custom CSS/SCSS styles.

## 📖 Documentation

- [Slidev Documentation](https://sli.dev/)
- [Markdown Syntax](https://sli.dev/guide/syntax.html)
- [Customization](https://sli.dev/custom/)

---

Enjoy your presentation!
