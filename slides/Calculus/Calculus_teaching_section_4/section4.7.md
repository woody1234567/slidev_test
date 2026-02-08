---
theme: default
title: Applications of Differentiation
subtitle: Section 4.7 - Optimization Problems
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Applications of Differentiation

## Section 4.7: Optimization Problems

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Steps in Solving Optimization Problems

<div class="border-l-4 border-purple-600 bg-purple-50 p-4 dark:bg-purple-900/20 my-4">
  <div class="text-purple-800 dark:text-purple-200 font-bold mb-2 text-lg">Optimization Problem Strategy</div>
  <div>

1. **Understand the Problem**
   
   Read carefully until the problem is clear. Ask:
   - What is the unknown?
   - What are the given quantities and conditions?

2. **Draw a Diagram**
   
   Visualize the problem by drawing and labeling given and required quantities.
  </div>
</div>

---
layout: default
---

# Steps in Solving Optimization Problems(cont.)

<div class="border-l-4 border-purple-600 bg-purple-50 p-4 dark:bg-purple-900/20 my-4">
  <div class="text-purple-800 dark:text-purple-200 font-bold mb-2 text-lg">Optimization Problem Strategy</div>
  <div>

3. **Introduce Notation**
   
   Assign symbols to the quantity to be optimized (e.g., $Q$), and to other unknowns (e.g., $a$, $b$, $x$, $y$). Use suggestive symbols when possible (e.g., $A$ for area, $h$ for height).

4. **Express $Q$ in Terms of Other Variables**
   
   Write $Q$ as a function of the other variables introduced.

  </div>
</div>

---
layout: default
---

# Steps in Solving Optimization Problems (cont.)

<div class="border-l-4 border-purple-600 bg-purple-50 p-4 dark:bg-purple-900/20 my-4">
  <div class="text-purple-800 dark:text-purple-200 font-bold mb-2 text-lg">Optimization Problem Strategy</div>
  <div>

5. **Reduce to One Variable**
   
   Use constraints to eliminate extra variables and express $Q$ as $Q = f(x)$.
   - Determine the domain of $f$ in the context of the problem.

6. **Optimize the Function**
   
   Use calculus methods (from Sections 4.1 and 4.3) to find the absolute maximum or minimum of $f$.
   - If $f$ is on a closed interval, use the Closed Interval Method (Section 4.1).

  </div>
</div>

---
layout: default
---

# Example 1: Optimization Problem

<Keynote title="Example 1">

Find the point on the parabola $y^2 = 2x$ that is closest to the point $(1, 4)$.

</Keynote>

<div class="flex justify-center mt-4">
  <img src="./section4.7/CalculusT1.png" class="w-1/2" alt="Parabola problem diagram" />
</div>

---
layout: default
---

# Example 1: Optimization Problem (cont.)

<Keynote title="Solution">

We previously obtained:

$$d^2 = f(y) = \left( \frac{1}{2} y^2 - 1 \right)^2 + (y - 4)^2$$

To minimize the distance, we minimize $d^2$. Differentiate:

$$f'(y) = 2\left( \frac{1}{2} y^2 - 1 \right)\cdot y + 2(y - 4) = y^3 - 8$$

Solve $f'(y) = 0$:  $\quad y^3 - 8 = 0 \quad \Rightarrow \quad y = 2$

</Keynote>

**Check for minimum:**

Since $f'(y) < 0$ for $y < 2$ and $f'(y) > 0$ for $y > 2$, $y = 2$ gives a local (and absolute) minimum.

**Find corresponding $x$:**

$$x = \frac{1}{2} y^2 = \frac{1}{2} (2)^2 = 2$$

---
layout: default
---

# Example 2: Largest Rectangle Inscribed in a Semicircle

<Keynote title="Example 2">

Find the area of the largest rectangle that can be inscribed in a semicircle of radius $r$.

</Keynote>

<div class="flex justify-center mt-4">
  <img src="./section4.7/CalculusT2.png" class="w-1/2" alt="Semicircle rectangle diagram" />
</div>

---
layout: default
---

# Example 2: Solution

**Step 1: Understand the Problem**

The rectangle is inscribed in the upper half of the circle $x^2 + y^2 = r^2$ with center at the origin. The rectangle has two vertices on the semicircle and two on the $x$-axis.

**Step 2: Draw a Diagram**

Let $(x, y)$ be the vertex in the first quadrant. Then the rectangle has width $2x$ and height $y$.

**Step 3: Introduce Notation**

Area of the rectangle:

$$A = 2x \cdot y$$

---
layout: default
---

# Example 2: Solution (cont.)

**Step 4–5: Express $A$ as a Function of One Variable**

From the circle equation, $x^2 + y^2 = r^2 \Rightarrow y = \sqrt{r^2 - x^2}$. So:

$$A(x) = 2x \sqrt{r^2 - x^2}$$

Domain: $0 \le x \le r$

---
layout: default
---

# Example 2: Solution (cont.)

**Step 6: Maximize $A$**

Differentiate:

$$A'(x) = 2\sqrt{r^2 - x^2} + 2x \cdot \frac{-x}{\sqrt{r^2 - x^2}} = \frac{2(r^2 - 2x^2)}{\sqrt{r^2 - x^2}}$$

Set $A'(x) = 0$:

$$r^2 - 2x^2 = 0 \Rightarrow x = \frac{r}{\sqrt{2}}$$

Substitute back:

$$A = 2x \cdot \sqrt{r^2 - x^2} = 2 \cdot \frac{r}{\sqrt{2}} \cdot \sqrt{r^2 - \frac{r^2}{2}} = \frac{2r}{\sqrt{2}} \cdot \sqrt{\frac{r^2}{2}} = r^2$$

---
layout: end
---

# Thank You

Questions?
