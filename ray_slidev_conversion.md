# Beamer LaTeX to Slidev Markdown 轉換指南

本文件記錄如何將 Beamer 結構的 `.tex` 檔案轉換為 Slidev 的 `.md` 檔案。

---

## 專案結構

```
slidev_test_ray/
├── Examples/                    # 原始 LaTeX 檔案
│   └── Calculus_teaching_section_4/
│       ├── section4.1.tex
│       └── figures/section4.1/  # 圖片資源
├── slides/                      # 轉換後的 Slidev 檔案
│   └── Calculus/
│       └── Calculus_teaching_section_4/
│           ├── section4.1.md
│           └── section4.1/      # 圖片資源（複製過來）
└── components/                  # 自訂 Vue 元件
    ├── MathBox.vue              # 紅色邊框定義/定理框
    └── Keynote.vue              # 藍色邊框範例/重點框
```

---

## 轉換對照表

### 1. 文件結構

| Beamer (LaTeX) | Slidev (Markdown) |
|----------------|-------------------|
| `\documentclass{beamer}` | 刪除，不需要 |
| `\usepackage{...}` | 刪除，Slidev 內建支援 |
| `\usetheme{Madrid}` | frontmatter: `theme: default` |
| `\title{...}` | frontmatter: `title: ...` |
| `\subtitle{...}` | frontmatter: `subtitle: ...` |
| `\author{...}` | frontmatter: `author: ...` |
| `\date{...}` | frontmatter: `date: ...` |
| `\maketitle` | 第一張投影片使用 `layout: cover` |
| `\begin{document}...\end{document}` | 刪除，直接寫內容 |

### 2. 投影片分隔

| Beamer | Slidev |
|--------|--------|
| `\begin{frame}{標題}...\end{frame}` | `---` 分隔線 + `# 標題` |
| `%===...` 註解分隔線 | 不需要，`---` 就是分隔 |

**範例：**
```latex
% Beamer
\begin{frame}{Absolute and Local Extreme Values}
內容...
\end{frame}
```

```markdown
<!-- Slidev -->
---
layout: default
---

# Absolute and Local Extreme Values

內容...
```

### 3. 數學公式

| Beamer | Slidev |
|--------|--------|
| `$...$` (行內) | `$...$` (相同) |
| `\[...\]` (區塊) | `$$...$$` |
| `\begin{equation}...\end{equation}` | `$$...$$` |
| `\frac{a}{b}` | `\frac{a}{b}` (相同) |
| `\leq`, `\geq` | `\leq`, `\geq` (相同) |
| `\lim_{x \to 0}` | `\lim_{x \to 0}` (相同) |

**注意：** Slidev 使用 KaTeX 渲染數學公式，大部分 LaTeX 數學指令都支援。

### 4. 定義/定理框 (tcolorbox)

| Beamer | Slidev |
|--------|--------|
| `\begin{tcolorbox}[title=\textbf{Definition}]...\end{tcolorbox}` | `<MathBox title="Definition">...</MathBox>` |
| `\begin{tcolorbox}[title=\textbf{Theorem}]...\end{tcolorbox}` | `<MathBox title="Theorem">...</MathBox>` |
| `\begin{tcolorbox}[title=\textbf{WARNING}]...\end{tcolorbox}` | `<MathBox title="⚠️ WARNING">...</MathBox>` |

**MathBox 特性：**
- 紅色左邊框
- 紅色背景（淺色/深色模式自動適應）
- 用於：定義、定理、警告、重要概念

**範例：**
```latex
% Beamer
\begin{tcolorbox}[colframe=red!80!black, colback=white, title=\textbf{Definition}]
A \textbf{critical number} of a function $f$ is...
\end{tcolorbox}
```

```markdown
<!-- Slidev -->
<MathBox title="Definition">

A **critical number** of a function $f$ is...

</MathBox>
```

### 5. 範例/重點框

| Beamer | Slidev |
|--------|--------|
| `\textbf{\textcolor{blue}{EXAMPLE}}` | `<Keynote title="EXAMPLE">...</Keynote>` |
| `\textbf{\textcolor{blue}{SOLUTION}}` | `<Keynote title="SOLUTION">...</Keynote>` |
| 藍色標題文字 | `<Keynote title="...">` |

**Keynote 特性：**
- 藍色左邊框
- 藍色背景（淺色/深色模式自動適應）
- 用於：範例、解答、重點說明

**範例：**
```latex
% Beamer
\textbf{\textcolor{blue}{EXAMPLE 1}} \quad If $f(x) = x^3$...
```

```markdown
<!-- Slidev -->
<Keynote title="EXAMPLE 1">

If $f(x) = x^3$...

</Keynote>
```

### 6. 列表

| Beamer | Slidev |
|--------|--------|
| `\begin{itemize}...\end{itemize}` | `- 項目` |
| `\item` | `- ` |
| `\begin{enumerate}...\end{enumerate}` | `1. 項目` |
| `\begin{enumerate}[(a)]...\end{enumerate}` | `**(a)** 內容` (使用粗體模擬) |

**範例：**
```latex
% Beamer
\begin{itemize}
  \item \textbf{absolute maximum} value...
  \item \textbf{absolute minimum} value...
\end{itemize}
```

```markdown
<!-- Slidev -->
- **absolute maximum** value...
- **absolute minimum** value...
```

### 7. 圖片

| Beamer | Slidev |
|--------|--------|
| `\includegraphics[width=0.5\textwidth]{path/image.png}` | `<img src="./section4.1/image.png" class="w-1/2" />` |
| `\begin{figure}...\caption{...}\end{figure}` | `<figure>...<figcaption>...</figcaption></figure>` |

**圖片路徑轉換：**
- Beamer: `figures/section4.1/CalculusT1.png`
- Slidev: `./section4.1/CalculusT1.png` (相對於 .md 檔案)

**寬度對照：**
| Beamer | Slidev (UnoCSS) |
|--------|-----------------|
| `width=0.3\textwidth` | `class="w-1/3"` 或 `class="w-[30%]"` |
| `width=0.5\textwidth` | `class="w-1/2"` |
| `width=0.7\textwidth` | `class="w-3/4"` |
| `width=0.9\textwidth` | `class="w-4/5"` |

**完整範例：**
```latex
% Beamer
\begin{figure}[ht]
    \centering
    \includegraphics[width=0.9\linewidth]{figures/section4.1/CalculusT2.png}
    \caption{Functions continuous on a closed interval always attain extreme values.}
\end{figure}
```

```markdown
<!-- Slidev -->
<figure class="flex flex-col items-center mt-4">
  <img src="./section4.1/CalculusT2.png" class="w-4/5" alt="Extreme Value Theorem" />
  <figcaption class="text-sm text-gray-500 mt-2">Functions continuous on a closed interval always attain extreme values.</figcaption>
</figure>
```

### 8. 雙欄排版

| Beamer | Slidev |
|--------|--------|
| `\begin{columns}[c]...\end{columns}` | frontmatter: `layout: two-cols` |
| `\begin{column}{.5\textwidth}...\end{column}` | `::left::` 和 `::right::` |

**範例：**
```latex
% Beamer
\begin{columns}[c]
    \begin{column}{.5\textwidth}
        左邊內容...
    \end{column}
    \begin{column}{.5\textwidth}
        右邊內容...
    \end{column}
\end{columns}
```

```markdown
<!-- Slidev -->
---
layout: two-cols
---

# 標題

::left::

左邊內容...

::right::

右邊內容...
```

### 9. 文字格式

| Beamer | Slidev |
|--------|--------|
| `\textbf{粗體}` | `**粗體**` |
| `\textit{斜體}` | `*斜體*` 或 `_斜體_` |
| `\textcolor{red}{紅色}` | `<span class="text-red-600">紅色</span>` |
| `\textcolor{blue}{藍色}` | `<span class="text-blue-600">藍色</span>` |
| `\\` (換行) | 空行或 `<br>` |
| `\quad` (空格) | 不需要，或用空格 |

### 10. 特殊符號

| Beamer | Slidev |
|--------|--------|
| `\Longrightarrow` | `⟹` 或 `$\Longrightarrow$` |
| `$\ldots$` | `...` 或 `$\ldots$` |

---

## 版面配置 (Layouts)

### 常用 Layouts

| Layout | 用途 |
|--------|------|
| `cover` | 封面頁（標題頁） |
| `default` | 一般內容頁 |
| `two-cols` | 雙欄排版 |
| `center` | 置中內容 |
| `end` | 結束頁 |

### Frontmatter 範例

```markdown
---
layout: default
---

# 投影片標題

內容...
```

---

## Headmatter（第一張投影片的設定）

```markdown
---
theme: default
title: Applications of Differentiation
subtitle: Section 4.1 - Maximum and Minimum Values
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Applications of Differentiation

## Section 4.1: Maximum and Minimum Values

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>
```

---

## 轉換步驟

1. **建立檔案結構**
   - 在 `slides/` 下建立對應的資料夾
   - 複製圖片到對應位置

2. **處理 Headmatter**
   - 將 `\title`, `\subtitle`, `\author`, `\date` 轉為 frontmatter
   - 設定 `layout: cover`

3. **逐一轉換 Frame**
   - 每個 `\begin{frame}` 轉為一張投影片
   - 使用 `---` 分隔
   - 將 `{標題}` 轉為 `# 標題`

4. **轉換內容元素**
   - tcolorbox → MathBox 或 Keynote
   - 數學公式保持原樣（`$...$` 和 `$$...$$`）
   - 列表轉為 Markdown 格式
   - 圖片更新路徑和語法

5. **加入結束頁**
   ```markdown
   ---
   layout: end
   ---

   # Thank You

   Questions?
   ```

---

## 注意事項

1. **圖片路徑**：確保圖片複製到正確位置，路徑相對於 .md 檔案

2. **數學公式間距**：區塊數學公式 `$$...$$` 前後需要空行

3. **元件內容**：`<MathBox>` 和 `<Keynote>` 內的 Markdown 內容前後需要空行才能正確渲染

4. **多張連續投影片**：同一主題分多張投影片時，標題可加上 (cont.) 或 (Proof cont.)

5. **深色模式**：使用 `dark:` 前綴的 CSS class 確保深色模式相容性

---

## 自訂元件說明

### MathBox.vue
用途：定義、定理、警告框
樣式：紅色左邊框 + 紅色淺背景
```vue
<MathBox title="Definition">
  內容...
</MathBox>
```

### Keynote.vue
用途：範例、解答、重點框
樣式：藍色左邊框 + 藍色淺背景
```vue
<Keynote title="EXAMPLE">
  內容...
</Keynote>
```

---

## 快速參考

```
\begin{frame}{Title}     →  ---\nlayout: default\n---\n\n# Title
\begin{tcolorbox}[title] →  <MathBox title="...">
\textcolor{blue}{EXAMPLE} →  <Keynote title="EXAMPLE">
\includegraphics         →  <img src="..." class="w-..." />
\begin{columns}          →  layout: two-cols + ::left:: + ::right::
$...$                    →  $...$ (unchanged)
\[...\]                  →  $$...$$
\item                    →  -
\textbf{}                →  **...**
```
