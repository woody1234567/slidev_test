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

---
layout: default
---

# Absolute and Local Extreme Values

<MathBox title="Definition">

Let $c$ be a number in the domain $D$ of a function $f$. Then $f(c)$ is the

- **absolute maximum** value of $f$ on $D$ if $f(c) \geq f(x)$ for all $x$ in $D$.
- **absolute minimum** value of $f$ on $D$ if $f(c) \leq f(x)$ for all $x$ in $D$.

</MathBox>

An absolute maximum or minimum is sometimes referred to as a **global maximum or minimum**. The maximum and minimum values of $f$ are called the **extreme values** of $f$.

---
layout: default
---

# Absolute and Local Extreme Values

<MathBox title="Definition">

The number $f(c)$ is a

- **local maximum** value of $f$ if $f(c) \geq f(x)$ when $x$ is near $c$.
- **local minimum** value of $f$ if $f(c) \leq f(x)$ when $x$ is near $c$.

</MathBox>

<div class="flex justify-center mt-4">
  <img src="/public/slides/Calculus_teaching_section_4/section4.1/CalculusT1.png" class="w-1/2" alt="Local and absolute extreme values" />
</div>

---
layout: default
---

# The Extreme Value Theorem

<MathBox title="The Extreme Value Theorem">

If $f$ is continuous on a closed interval $[a, b]$, then $f$ attains an absolute maximum value $f(c)$ and an absolute minimum value $f(d)$ at some numbers $c$ and $d$ in $[a, b]$.

</MathBox>

<figure class="flex flex-col items-center mt-4">
  <img src="/public/slides/Calculus_teaching_section_4/section4.1/CalculusT2.png" class="w-4/5" alt="Extreme Value Theorem" />
  <figcaption class="text-sm text-gray-500 mt-2">Functions continuous on a closed interval always attain extreme values.</figcaption>
</figure>

---
layout: two-cols
---

# The Extreme Value Theorem

<Keynote title="Contradiction Cases">

Examples where the theorem conditions are not met.

</Keynote>

::left::

<figure class="flex flex-col items-center">
  <img src="/public/slides/Calculus_teaching_section_4/section4.1/CalculusT3.png" class="w-3/4" alt="No maximum" />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">This function has minimum f(2)=0, but no maximum.</figcaption>
</figure>

The function takes on values arbitrarily close to 3, but never actually attains the value 3.

::right::

<figure class="flex flex-col items-center">
  <img src="/public/slides/Calculus_teaching_section_4/section4.1/CalculusT5.png" class="w-3/4" alt="No extrema" />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">This continuous function g has no maximum or minimum.</figcaption>
</figure>

The function $g$ is continuous on the open interval $(0, 2)$ and is able to take on arbitrarily large values.

---
layout: default
---

# Fermat's Theorem

<MathBox title="Fermat's Theorem">

If $f$ has a local maximum or minimum at $c$, and if $f'(c)$ exists, then $f'(c) = 0$.

</MathBox>

<div class="mt-6">

<span class="text-red-600 font-bold">PROOF</span>

Suppose, for the sake of definiteness, that $f$ has a local maximum at $c$. Then, according to Definition 2, $f(c) \geq f(x)$ if $x$ is sufficiently close to $c$. This implies that if $h$ is sufficiently close to $0$, with $h$ being positive or negative, then

$$f(c) \geq f(c + h)$$

and therefore

$$f(c + h) - f(c) \leq 0$$

</div>

---
layout: default
---

# Fermat's Theorem (Proof cont.)

We can divide both sides of an inequality by a positive number. Thus, if $h > 0$ and $h$ is sufficiently small, we have

$$\frac{f(c + h) - f(c)}{h} \leq 0$$

Taking the right-hand limit of both sides of this inequality:

$$\lim_{h \to 0^+} \frac{f(c + h) - f(c)}{h} \leq \lim_{h \to 0^+} 0 = 0$$

But since $f'(c)$ exists, we have

$$f'(c) = \lim_{h \to 0} \frac{f(c + h) - f(c)}{h} = \lim_{h \to 0^+} \frac{f(c + h) - f(c)}{h}$$

and so we have shown that $f'(c) \leq 0$.

---
layout: default
---

# Fermat's Theorem (Proof cont.)

If $h < 0$, then the direction of the inequality is reversed when we divide by $h$:

$$\frac{f(c + h) - f(c)}{h} \geq 0$$

So, taking the left-hand limit, we have

$$f'(c) = \lim_{h \to 0} \frac{f(c + h) - f(c)}{h} = \lim_{h \to 0^-} \frac{f(c + h) - f(c)}{h} \geq 0$$

We have shown that $f'(c) \geq 0$ and also that $f'(c) \leq 0$. Since both of these inequalities must be true, the only possibility is that

$$f'(c) = 0$$

---
layout: default
---

# Example 1: $f'(c)=0$ but No Maximum or Minimum

<Keynote title="EXAMPLE 1">

If $f(x) = x^3$, then $f'(x) = 3x^2$, so $f'(0) = 0$. But $f$ has no maximum or minimum at $0$.

</Keynote>

The fact that $f'(0) = 0$ simply means that the curve $y = x^3$ has a horizontal tangent at $(0, 0)$. Instead of having a maximum or minimum at $(0, 0)$, the curve crosses its horizontal tangent there.

<figure class="flex flex-col items-center mt-4">
  <img src="/public/slides/Calculus_teaching_section_4/section4.1/CalculusT6.png" class="w-48" alt="x cubed graph" />
  <figcaption class="text-sm text-gray-500 mt-2">If f(x) = x³, then f'(0)=0, but f has no maximum or minimum.</figcaption>
</figure>

---
layout: default
---

# Example 2: Non-differentiable Minimum

<Keynote title="EXAMPLE 2">

The function $f(x) = |x|$ has its (local and absolute) minimum value at $0$, but that value can't be found by setting $f'(x) = 0$ because $f'(0)$ does not exist.

</Keynote>

<figure class="flex flex-col items-center mt-4">
  <img src="/public/slides/Calculus_teaching_section_4/section4.1/CalculusT7.png" class="w-48" alt="absolute value graph" />
  <figcaption class="text-sm text-gray-500 mt-2">If f(x)=|x|, then f(0)=0 is a minimum value, but f'(0) does not exist.</figcaption>
</figure>

---
layout: default
---

# Caution When Using Fermat's Theorem

<MathBox title="⚠️ WARNING">

Examples 1 and 2 show that we must be careful when using Fermat's Theorem.

- **Example 1** demonstrates that even when $f'(c) = 0$ there need not be a maximum or minimum at $c$.
  - ⟹ In other words, **the converse of Fermat's Theorem** is false, in general.

- **Example 2** shows that there is an extreme value even when $f'(c)$ does not exist.

</MathBox>

---
layout: default
---

# Definition: Critical Number

<MathBox title="Definition">

A **critical number** of a function $f$ is a number $c$ in the domain of $f$ such that either $f'(c) = 0$ or $f'(c)$ does not exist.

</MathBox>

In terms of critical numbers, Fermat's Theorem can be rephrased as follows:

<MathBox title="Rephrased Fermat's Theorem">

If $f$ has a local maximum or minimum at $c$, then $c$ is a critical number of $f$.

</MathBox>

---
layout: default
---

# The Closed Interval Method

<MathBox title="The Closed Interval Method">

To find the *absolute* maximum and minimum values of a continuous function $f$ on a closed interval $[a, b]$:

1. Find the values of $f$ at the critical numbers of $f$ in $(a, b)$.
2. Find the values of $f$ at the endpoints of the interval.
3. The largest of the values from Steps 1 and 2 is the absolute maximum value; the smallest of these values is the absolute minimum value.

</MathBox>

---
layout: default
---

# Example: Finding Absolute Extrema

<Keynote title="EXAMPLE">

**(a)** Use a calculator or computer to estimate the absolute minimum and maximum values of the function 

$$f(x) = x - 2 \sin x, \quad 0 \leq x \leq 2\pi$$

**(b)** Use calculus to find the exact minimum and maximum values.

</Keynote>

---
layout: default
---

# Solution (Part a)

<Keynote title="SOLUTION">

**(a)** The graph shows $f$ in the viewing rectangle $[0, 2\pi]$ by $[-1, 8]$. 

- The absolute maximum value is about **6.97**, occurring when $x \approx 5.24$. 
- The absolute minimum value is about **-0.68**, occurring when $x \approx 1.05$.

</Keynote>

<div class="flex justify-center mt-4">
  <img src="/public/slides/Calculus_teaching_section_4/section4.1/CalculusT8.png" class="w-1/2" alt="Graph of f(x)" />
</div>

It is possible to get more accurate numerical estimates, but for exact values, we must use calculus.

---
layout: default
---

# Solution (Part b)

**(b)** The function $f(x) = x - 2 \sin x$ is continuous on $[0, 2\pi]$. Since

$$f'(x) = 1 - 2 \cos x$$

we have $f'(x) = 0$ when $\cos x = \frac{1}{2}$, which occurs when $x = \frac{\pi}{3}$ or $x = \frac{5\pi}{3}$.

The values of $f$ at these critical numbers are:

$$f\left( \frac{\pi}{3} \right) = \frac{\pi}{3} - 2 \sin \frac{\pi}{3} = \frac{\pi}{3} - \sqrt{3} \approx -0.684853$$

$$f\left( \frac{5\pi}{3} \right) = \frac{5\pi}{3} - 2 \sin \frac{5\pi}{3} = \frac{5\pi}{3} + \sqrt{3} \approx 6.968039$$

---
layout: default
---

# Solution (Conclusion)

The values of $f$ at the endpoints are:

$$f(0) = 0 \qquad \text{and} \qquad f(2\pi) = 2\pi \approx 6.28$$

Comparing these four numbers and using the Closed Interval Method:

<MathBox title="Results">

**Absolute Minimum:**
$$f\left( \frac{\pi}{3} \right) = \frac{\pi}{3} - \sqrt{3}$$

**Absolute Maximum:**
$$f\left( \frac{5\pi}{3} \right) = \frac{5\pi}{3} + \sqrt{3}$$

</MathBox>

---
layout: end
---

# Thank You

Questions?
