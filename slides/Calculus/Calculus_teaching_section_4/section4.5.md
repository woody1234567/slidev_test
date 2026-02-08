---
theme: default
title: Applications of Differentiation
subtitle: Section 4.5 - Summary of Curve Sketching
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Applications of Differentiation

## Section 4.5: Summary of Curve Sketching

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Guidelines for Sketching a Curve

**A. Domain**

Determine the domain $D$ of $f$. (i.e., the set of $x$-values for which $f(x)$ is defined.)

**B. Intercepts**

- The $y$-intercept is $f(0)$: where the curve crosses the $y$-axis.
- To find $x$-intercepts, set $y = 0$ and solve for $x$. (Can skip if difficult.)

**C. Symmetry**

- **(i)** If $f(-x) = f(x)$ for all $x$ in $D$, then $f$ is an **even function**, symmetric about the $y$-axis. (e.g., $y = x^2,\ x^4,\ |x|,\ \cos x$)

- **(ii)** If $f(-x) = -f(x)$ for all $x$ in $D$, then $f$ is an **odd function**, symmetric about the origin. (e.g., $y = x,\ x^3,\ \frac{1}{x},\ \sin x$)

- **(iii)** If $f(x + p) = f(x)$ for all $x$ in $D$, where $p$ is a positive constant, then $f$ is a **periodic function**, and the smallest such $p$ is called the **period**.

---
layout: default
---

# Guidelines for Sketching a Curve (cont.)

**D. Asymptotes**

- **(i) Horizontal Asymptotes:** If $\displaystyle \lim_{x \to \infty} f(x) = L$ or $\displaystyle \lim_{x \to -\infty} f(x) = L$, then $y = L$ is a horizontal asymptote.

- **(ii) Vertical Asymptotes:** If any of the following are true, then $x = a$ is a vertical asymptote:

$$\lim_{x \to a^-} f(x) = \pm \infty, \quad \lim_{x \to a^+} f(x) = \pm \infty$$

- **(iii) Slant Asymptotes:** Discussed later (if applicable).

**E. Intervals of Increase or Decrease**

Use the I/D Test: Find where $f'(x) > 0$ (increasing) and $f'(x) < 0$ (decreasing).

---
layout: default
---

# Guidelines for Sketching a Curve (cont.)

**F. Local Maximum or Minimum Values**

Find critical points ($f'(c) = 0$ or undefined). Then:

- Use First Derivative Test: sign change in $f'$ indicates local extrema.
- Or use Second Derivative Test: if $f''(c) > 0$, minimum; if $f''(c) < 0$, maximum.

**G. Concavity and Points of Inflection**

Use the Concavity Test: compute $f''(x)$.

- $f''(x) > 0$: curve is concave up
- $f''(x) < 0$: curve is concave down

Points where concavity changes are inflection points.

---
layout: default
---

# Guidelines for Sketching a Curve (cont.)

**H. Sketch the Curve**

Use information from A–G:

- Plot intercepts, extrema, and inflection points
- Draw asymptotes as dashed lines
- Use concavity and monotonicity to complete the shape

---
layout: default
---

# Example: Sketching the Curve $y = \frac{2x^2}{x^2 - 1}$

<Keynote title="Example">

Sketch the Curve $y = \frac{2x^2}{x^2 - 1}$

</Keynote>

<Keynote title="Solution">

**A. Domain**

The domain is

$$\{x \mid x^2 - 1 \ne 0\} = \{x \mid x \ne \pm 1\} = (-\infty, -1) \cup (-1, 1) \cup (1, \infty)$$

**B. Intercepts**

The $x$- and $y$-intercepts are both 0.

**C. Symmetry**

Since $f(-x) = f(x)$, the function is even. The curve is symmetric about the $y$-axis.

</Keynote>

---
layout: default
---

# Example: Sketching the Curve (cont.)

**D. Asymptotes**

- **Horizontal asymptote:**

$$\lim_{x \to \pm \infty} \frac{2x^2}{x^2 - 1} = \lim_{x \to \pm \infty} \frac{2}{1 - \frac{1}{x^2}} = 2$$

So $y = 2$ is a horizontal asymptote.

- **Vertical asymptotes at $x = \pm 1$:**

$$\lim_{x \to 1^+} \frac{2x^2}{x^2 - 1} = \infty, \quad \lim_{x \to 1^-} \frac{2x^2}{x^2 - 1} = -\infty$$

$$\lim_{x \to -1^+} \frac{2x^2}{x^2 - 1} = -\infty, \quad \lim_{x \to -1^-} \frac{2x^2}{x^2 - 1} = \infty$$

Therefore, $x = 1$ and $x = -1$ are vertical asymptotes.

---
layout: default
---

# Example: Sketching the Curve (cont.)

**E. Intervals of Increase or Decrease**

We compute the derivative:

$$f'(x) = \frac{(x^2 - 1)(4x) - 2x^2 \cdot 2x}{(x^2 - 1)^2} = \frac{-4x}{(x^2 - 1)^2}$$

- $f'(x) > 0$ when $x < 0$ and $x \ne -1$ ⟹ $f$ is increasing on $(-\infty, -1)$ and $(-1, 0)$
- $f'(x) < 0$ when $x > 0$ and $x \ne 1$ ⟹ $f$ is decreasing on $(0, 1)$ and $(1, \infty)$

**F. Local Maximum or Minimum Values**

The only critical point is $x = 0$. Since $f'$ changes from positive to negative at $x = 0$, by the First Derivative Test, we conclude:

$$f(0) = 0 \text{ is a local maximum.}$$

---
layout: default
---

# Example: Sketching the Curve (cont.)

**G. Concavity and Points of Inflection**

We compute the second derivative:

$$f''(x) = \frac{(x^2 - 1)^2(-4) + 4x \cdot 2(x^2 - 1)2x}{(x^2 - 1)^4} = \frac{12x^2 + 4}{(x^2 - 1)^3}$$

Since $12x^2 + 4 > 0$ for all $x$, the sign of $f''(x)$ depends on the denominator:

$$f''(x) > 0 \quad \Leftrightarrow \quad |x| > 1 \quad \Rightarrow \text{concave up on } (-\infty, -1) \text{ and } (1, \infty)$$

$$f''(x) < 0 \quad \Leftrightarrow \quad |x| < 1 \quad \Rightarrow \text{concave down on } (-1, 1)$$

No inflection point exists because $x = \pm 1$ are not in the domain.

---
layout: two-cols
---

# Example: Sketching the Curve (cont.)

::left::

**H. Sketch the Curve**

Using the results from parts A ~ G, we complete the graph:

- Horizontal asymptote at $y = 2$, vertical asymptotes at $x = \pm 1$
- Local maximum at $(0, 0)$
- Increasing/decreasing and concavity behavior shown as described

::right::

<figure class="flex flex-col items-center">
  <img src="./section4.5/CalculusT2.png" class="w-3/5" alt="Preliminary sketch" />
  <figcaption class="text-sm text-gray-500 mt-2">Preliminary sketch</figcaption>
</figure>

<figure class="flex flex-col items-center">
  <img src="./section4.5/CalculusT1.png" class="w-3/5" alt="Finished sketch" />
  <figcaption class="text-sm text-gray-500 mt-2">Finished sketch</figcaption>
</figure>

---
layout: default
---

# Slant Asymptotes

<div class="border-l-4 border-blue-600 bg-blue-50 p-4 dark:bg-blue-900/20 my-4">
  <div class="text-blue-800 dark:text-blue-200 font-bold mb-2 text-lg">Slant Asymptotes</div>
  <div>

Some curves have asymptotes that are _oblique_, meaning neither horizontal nor vertical. If

$$\lim_{x \to \infty} \left[ f(x) - (mx + b) \right] = 0$$

where $m \ne 0$, then the line $y = mx + b$ is called a **slant asymptote**.

  </div>
</div>

This means the vertical distance between the curve $y = f(x)$ and the line $y = mx + b$ approaches 0 as $x \to \infty$ (or $x \to -\infty$).

In rational functions, slant asymptotes occur when the degree of the numerator is one more than the degree of the denominator. In such cases, the slant asymptote can be found using polynomial long division.

---
layout: default
---

# Example: Slant Asymptote of $f(x) = \frac{x^3}{x^2 + 1}$

**Asymptotes**

- The denominator $x^2 + 1$ is never 0, so there is **no vertical asymptote**.
- As $x \to \pm \infty$, $f(x) \to \pm \infty$, so there is **no horizontal asymptote**.

But using long division:

$$f(x) = \frac{x^3}{x^2 + 1} = x - \frac{x}{x^2 + 1}$$

This suggests that $y = x$ is a candidate for a slant asymptote.

To confirm:

$$f(x) - x = -\frac{x}{x^2 + 1} = -\frac{1}{x} \cdot \frac{1}{1 + \frac{1}{x^2}} \to 0 \quad \text{as } x \to \pm \infty$$

<MathBox title="Conclusion">

The line $y = x$ is a slant asymptote of the curve.

</MathBox>

---
layout: end
---

# Thank You

Questions?
