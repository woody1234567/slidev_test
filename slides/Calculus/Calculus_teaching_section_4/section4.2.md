---
theme: default
title: Applications of Differentiation
subtitle: Section 4.2 - The Mean Value Theorem
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Applications of Differentiation

## Section 4.2: The Mean Value Theorem

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Rolle's Theorem

<MathBox title="Rolle's Theorem">

Let $f$ be a function that satisfies the following three hypotheses:

1. $f$ is continuous on the closed interval $[a, b]$.
2. $f$ is differentiable on the open interval $(a, b)$.
3. $f(a) = f(b)$

Then there is a number $c$ in $(a, b)$ such that $f'(c) = 0$.

</MathBox>

<div class="flex justify-center mt-4">
  <img src="./section4.2/CalculusT1.png" class="w-full" alt="Rolle's Theorem illustration" />
</div>

---
layout: default
---

# Mean Value Theorem

<MathBox title="The Mean Value Theorem">

Let $f$ be a function that satisfies the following hypotheses:

1. $f$ is continuous on the closed interval $[a, b]$.
2. $f$ is differentiable on the open interval $(a, b)$.

Then there is a number $c$ in $(a, b)$ such that

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

</MathBox>

<div class="flex justify-center mt-4">
  <img src="./section4.2/CalculusT2.png" class="w-3/4" alt="Mean Value Theorem illustration" />
</div>

---
layout: two-cols
---

# Proof of the Mean Value Theorem

::left::
<span class="text-red-600 font-bold">PROOF</span>

We apply Rolle's Theorem to a new function $h$ defined as the difference between $f$ and the function whose graph is the secant line $AB$. Using the point-slope equation of a line, we see that the equation of the line $AB$ can be written as

$$y - f(a) = \frac{f(b) - f(a)}{b - a}(x - a)$$


::right::

<div class="flex justify-center mt-4">
  <img src="./section4.2/CalculusT3.png" class="w-2/3" alt="MVT proof diagram" />
</div>



So, as shown in the Figure,

$$h(x) = f(x) - f(a) - \frac{f(b) - f(a)}{b - a}(x - a)$$

---
layout: default
---

# Proof of the Mean Value Theorem (cont.)

First, we must verify that $h$ satisfies the three hypotheses of Rolle's Theorem.

1. The function $h$ is continuous on $[a, b]$ because it is the sum of $f$ and a first-degree polynomial, both of which are continuous.

2. The function $h$ is differentiable on $(a, b)$ because both $f$ and the first-degree polynomial are differentiable. In fact, we can compute $h'$ directly:

$$h'(x) = f'(x) - \frac{f(b) - f(a)}{b - a}$$

(Note that $f(a)$ and $[f(b) - f(a)] / (b - a)$ are constants.)

---
layout: default
---

# Proof of the Mean Value Theorem (cont.)

3. We verify that $h(a) = h(b)$:

$$h(a) = f(a) - f(a) - \frac{f(b) - f(a)}{b - a}(a - a) = 0$$

$$h(b) = f(b) - f(a) - \frac{f(b) - f(a)}{b - a}(b - a)$$

$$\phantom{h(b)} = f(b) - f(a) - [f(b) - f(a)] = 0$$

Therefore $h(a) = h(b)$.

Since $h$ satisfies all the hypotheses of Rolle's Theorem, that theorem says there is a number $c$ in $(a, b)$ such that $h'(c) = 0$. Therefore

$$0 = h'(c) = f'(c) - \frac{f(b) - f(a)}{b - a}$$

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

---
layout: default
---

# Theorem: Zero Derivative Implies Constant Function

<MathBox title="Theorem">

If $f'(x) = 0$ for all $x$ in an interval $(a, b)$, then $f$ is constant on $(a, b)$.

</MathBox>

<span class="text-red-600 font-bold">PROOF</span>

Let $x_1$ and $x_2$ be any two numbers in $(a, b)$ with $x_1 < x_2$. Since $f$ is differentiable on $(a, b)$, it must be differentiable on $(x_1, x_2)$ and continuous on $[x_1, x_2]$. By applying the Mean Value Theorem to $f$ on the interval $[x_1, x_2]$, we get a number $c$ such that $x_1 < c < x_2$ and

$$f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$$

Since $f'(x) = 0$ for all $x$, we have $f'(c) = 0$, and so

$$f(x_2) - f(x_1) = 0 \quad \text{or} \quad f(x_2) = f(x_1)$$

Therefore $f$ has the same value at _any_ two numbers $x_1$ and $x_2$ in $(a, b)$. This means that $f$ is constant on $(a, b)$.

---
layout: default
---

# Corollary: Equal Derivatives Implies Constant Difference

<MathBox title="Corollary">

If $f'(x) = g'(x)$ for all $x$ in an interval $(a, b)$, then $f - g$ is constant on $(a, b)$; that is, $f(x) = g(x) + c$ where $c$ is a constant.

</MathBox>

<span class="text-red-600 font-bold">PROOF</span>

Let $F(x) = f(x) - g(x)$. Then

$$F'(x) = f'(x) - g'(x) = 0$$

for all $x$ in $(a, b)$. Thus, by the theorem above, $F$ is constant; that is, $f - g$ is constant.

---
layout: end
---

# Thank You

Questions?
