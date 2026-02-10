好，我幫你設計一個 **適合長期使用、可擴充的 Slidev 多課程部署架構**。
這會很適合你現在在做的：

* Calculus 教學
* Physics 模擬與投影片
* Economics 課程
* StudyWithWoody 教材庫

我們目標是做到：

> 一個 repo 管理所有投影片
> 可以一次 build 多個課程
> 每個課程都有自己的網址

例如：

```
studywithwoody-slides.vercel.app/calculus/section4
studywithwoody-slides.vercel.app/physics/projectile
studywithwoody-slides.vercel.app/econ/elasticity
```

---

# 建議的專案架構

這是我推薦給你的結構：

```
slides-repo/
│
├─ slides/
│  ├─ calculus-section4/
│  │  └─ slides.md
│  │
│  ├─ calculus-section5/
│  │  └─ slides.md
│  │
│  ├─ physics-projectile/
│  │  └─ slides.md
│  │
│  └─ economics-demand/
│     └─ slides.md
│
├─ dist/
├─ scripts/
│  └─ build-all.js
│
├─ package.json
└─ vercel.json
```

這是一個「slides monorepo」。

---

# package.json 設計

```json
{
  "scripts": {
    "dev:calculus4": "slidev slides/calculus-section4/slides.md",
    "dev:physics": "slidev slides/physics-projectile/slides.md",

    "build:calculus4": "slidev build slides/calculus-section4/slides.md --out dist/calculus/section4",
    "build:physics": "slidev build slides/physics-projectile/slides.md --out dist/physics/projectile",

    "build": "node scripts/build-all.js"
  }
}
```

---

# 自動 build 所有投影片

建立：

```
scripts/build-all.js
```

```js
import { execSync } from 'child_process'

const builds = [
  {
    entry: 'slides/calculus-section4/slides.md',
    out: 'dist/calculus/section4',
  },
  {
    entry: 'slides/physics-projectile/slides.md',
    out: 'dist/physics/projectile',
  },
  {
    entry: 'slides/economics-demand/slides.md',
    out: 'dist/econ/demand',
  },
]

for (const b of builds) {
  console.log(`Building ${b.entry}`)
  execSync(`npx slidev build ${b.entry} --out ${b.out}`, {
    stdio: 'inherit',
  })
}
```

然後只要：

```bash
pnpm build
```

就會產生：

```
dist/
  calculus/section4
  physics/projectile
  econ/demand
```

---

# Vercel 部署設定（關鍵）

建立 `vercel.json`：

```json
{
  "rewrites": [
    { "source": "/calculus/section4/(.*)", "destination": "/calculus/section4/index.html" },
    { "source": "/physics/projectile/(.*)", "destination": "/physics/projectile/index.html" },
    { "source": "/econ/demand/(.*)", "destination": "/econ/demand/index.html" }
  ]
}
```

並把：

```
dist/
```

當作部署目錄。

---

# 部署流程

只要：

```
slidev build → dist
dist → Vercel
```

---

# 最終效果

你的網站會變成：

```
studywithwoody-slides.vercel.app/calculus/section4
studywithwoody-slides.vercel.app/physics/projectile
studywithwoody-slides.vercel.app/econ/demand
```

這其實就是一個：

> **教學投影片 CDN**

---
