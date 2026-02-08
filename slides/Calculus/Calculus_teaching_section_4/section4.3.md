---
theme: default
title: Applications of Differentiation
subtitle: Section 4.3 - What Derivatives Tell Us about the Shape of a Graph
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Applications of Differentiation

## Section 4.3: What Derivatives Tell Us about the Shape of a Graph

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Increasing/Decreasing Test

<MathBox title="Increasing/Decreasing Test">

**(a)** If $f'(x) > 0$ on an interval, then $f$ is increasing on that interval.

**(b)** If $f'(x) < 0$ on an interval, then $f$ is decreasing on that interval.

</MathBox>

<span class="text-red-600 font-bold">PROOF</span>

**(a)** Let $x_1$ and $x_2$ be any two numbers in the interval with $x_1 < x_2$. We have to show that $f(x_1) < f(x_2)$.

Because we are given that $f'(x) > 0$, we know that $f$ is differentiable on $[x_1, x_2]$. So, by the Mean Value Theorem, there is a number $c$ between $x_1$ and $x_2$ such that

$$f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$$

Thus, the right side is positive, and so

$$f(x_2) - f(x_1) > 0 \quad \text{or} \quad f(x_1) < f(x_2)$$

This shows that $f$ is increasing. Part (b) is proved similarly.

---
layout: default
---

# The First Derivative Test

<MathBox title="The First Derivative Test">

Suppose that $c$ is a critical number of a continuous function $f$.

**(a)** If $f'$ changes from positive to negative at $c$, then $f$ has a local maximum at $c$.

**(b)** If $f'$ changes from negative to positive at $c$, then $f$ has a local minimum at $c$.

**(c)** If $f'$ is positive to the left and right of $c$, or negative to the left and right of $c$, then $f$ has no local maximum or minimum at $c$.

</MathBox>

<div class="flex justify-center mt-4">
  <img src="./section4.3/CalculusT1.png" class="w-full" alt="First Derivative Test illustration" />
</div>

---
layout: default
---

# Concavity Test

<MathBox title="Definition">

If the graph of $f$ lies above all of its tangents on an interval $I$, then $f$ is called **concave upward** on $I$. If the graph of $f$ lies below all of its tangents on $I$, then $f$ is called **concave downward** on $I$.

</MathBox>

<div class="flex justify-center mt-4">
  <img src="./section4.3/CalculusT2.png" class="w-4/5" alt="Concavity illustration" />
</div>

---
layout: default
---

# Concavity Test

<MathBox title="Concavity Test">

**(a)** If $f''(x) > 0$ on an interval $I$, then the graph of $f$ is concave upward on $I$.

**(b)** If $f''(x) < 0$ on an interval $I$, then the graph of $f$ is concave downward on $I$.

</MathBox>

---
layout: default
---

# Definition: Inflection Point

<MathBox title="Definition">

A point $P$ on a curve $y = f(x)$ is called an **inflection point** if $f$ is continuous there and the curve changes from concave upward to concave downward or from concave downward to concave upward at $P$.

</MathBox>

---
layout: default
---

# Example: Sketching a Function

<Keynote title="EXAMPLE">

Sketch a possible graph of a function $f$ that satisfies the following conditions:

- **(i)** $f'(x) > 0$ on $(-\infty, 1)$, $\quad f'(x) < 0$ on $(1, \infty)$
- **(ii)** $f''(x) > 0$ on $(-\infty, -2)$ and $(2, \infty)$, $\quad f''(x) < 0$ on $(-2, 2)$
- **(iii)** $\displaystyle \lim_{x \to -\infty} f(x) = -2$, $\quad \displaystyle \lim_{x \to \infty} f(x) = 0$

</Keynote>

---
layout: default
---

# Example: Sketching a Function


<div class="flex justify-center mt-4">
  <img src="./section4.3/CalculusT3.png" class="w-1/2" alt="Example graph" />
</div>

<Keynote title="SOLUTION">

- Condition (i) tells us that $f$ is increasing on $(-\infty, 1)$ and decreasing on $(1, \infty)$.
- Condition (ii) says that $f$ is concave upward on $(-\infty, -2)$ and $(2, \infty)$, and concave downward on $(-2, 2)$.
- Condition (iii) tells us that the graph of $f$ has two horizontal asymptotes: $y = -2$ (to the left) and $y = 0$ (to the right).
</Keynote>

---
layout: default
---

# The Second Derivative Test

<MathBox title="The Second Derivative Test">

Suppose $f''$ is continuous near $c$.

**(a)** If $f'(c) = 0$ and $f''(c) > 0$, then $f$ has a local minimum at $c$.

**(b)** If $f'(c) = 0$ and $f''(c) < 0$, then $f$ has a local maximum at $c$.

</MathBox>

---
layout: default
---

# Example: Sketching a Function

<Keynote title="EXAMPLE">

Sketch the graph of the function $f(x) = x^{2/3}(6 - x)^{1/3}$.

</Keynote>

<Keynote title="SOLUTION">

First note that the domain of $f$ is $\mathbb{R}$. Calculation of the first two derivatives gives:

$$f'(x) = \frac{4 - x}{x^{1/3}(6 - x)^{2/3}}, \qquad f''(x) = \frac{-8}{x^{4/3}(6 - x)^{5/3}}$$

Since $f'(x) = 0$ when $x = 4$ and $f'(x)$ does not exist when $x = 0$ or $x = 6$, the critical numbers are 0, 4, and 6.

</Keynote>

---
layout: default
---

# Example: Sketching a Function

| Interval | $4 - x$ | $x^{1/3}$ | $(6 - x)^{2/3}$ | $f'(x)$ | $f$ |
|----------|---------|-----------|-----------------|---------|-----|
| $x < 0$ | $+$ | $-$ | $+$ | $-$ | decreasing on $(-\infty, 0)$ |
| $0 < x < 4$ | $+$ | $+$ | $+$ | $+$ | increasing on $(0, 4)$ |
| $4 < x < 6$ | $-$ | $+$ | $+$ | $-$ | decreasing on $(4, 6)$ |
| $x > 6$ | $-$ | $+$ | $-$ | $-$ | decreasing on $(6, \infty)$ |

---
layout: default
---

# Example: Sketching a Function

<div class="flex justify-center">
  <img src="./section4.3/CalculusT4.png" class="w-4/5" alt="Graph of f(x)" />
</div>

---
layout: end
---

# Thank You

Questions?
