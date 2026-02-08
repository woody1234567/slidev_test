---
theme: default
title: Applications of Differentiation
subtitle: Section 4.4 - Indeterminate Forms and l'Hospital's Rule
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Applications of Differentiation

## Section 4.4: Indeterminate Forms and l'Hospital's Rule

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Indeterminate Forms

- **Indeterminate form of type $\frac{0}{0}$**

$$\lim_{x \rightarrow a} \frac{f(x)}{g(x)}$$

both $f(x) \rightarrow 0$ and $g(x) \rightarrow 0$ as $x \rightarrow a$

- **Indeterminate form of type $\frac{\infty}{\infty}$**

$$\lim_{x \rightarrow a} \frac{f(x)}{g(x)}$$

both $f(x) \rightarrow \pm \infty$ and $g(x) \rightarrow \pm \infty$ as $x \rightarrow a$

---
layout: default
---

# L'Hospital's Rule

Suppose $f$ and $g$ are differentiable and $g'(x) \ne 0$ on an open interval $I$ that contains $a$ (except possibly at $a$). Suppose that

$$\lim_{x \to a} f(x) = 0 \quad \text{and} \quad \lim_{x \to a} g(x) = 0$$

or that

$$\lim_{x \to a} f(x) = \pm \infty \quad \text{and} \quad \lim_{x \to a} g(x) = \pm \infty$$

(In other words, we have an indeterminate form of type $\frac{0}{0}$ or $\frac{\infty}{\infty}$.) Then

<MathBox title="L'Hospital's Rule">

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

</MathBox>

if the limit on the right side exists (or is $\infty$ or $-\infty$).

---
layout: two-cols
---

# Intuition Behind L'Hospital's Rule

The first graph shows two differentiable functions $f$ and $g$, each of which approaches 0 as $x \to a$. If we zoom in toward the point $(a, 0)$, the graphs start to look almost linear.

If the functions _were_ linear, as in the second graph, then their ratio would be:

$$\frac{m_1(x - a)}{m_2(x - a)} = \frac{m_1}{m_2}$$

which is the ratio of their derivatives.

<MathBox title="This suggests:">

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

</MathBox>

::right::

<figure class="flex flex-col items-center mt-8">
  <img src="./section4.4/CalculusT1.png" class="w-4/5" alt="Intuition behind L'Hospital's Rule" />
  <figcaption class="text-sm text-gray-500 mt-2">$e^x$ with slope 1 at $(0,1)$</figcaption>
</figure>

---
layout: default
---

# Note on L'Hospital's Rule

<div class="border-l-4 border-green-600 bg-green-50 p-4 dark:bg-green-900/20 my-4">
  <div class="text-green-800 dark:text-green-200 font-bold mb-2 text-lg">Note: One-Sided and Infinite Limits</div>
  <div>

L'Hospital's Rule is also valid for one-sided limits and for limits at infinity or negative infinity; that is, "$x \to a$" can be replaced by any of the symbols:

$$x \to a^+, \quad x \to a^-, \quad x \to \infty, \quad \text{or} \quad x \to -\infty$$

  </div>
</div>

---
layout: default
---

# Example: L'Hospital's Rule

<Keynote title="Example">

Calculate $\displaystyle \lim_{x \to \infty} \frac{e^x}{x^2}$.

</Keynote>

<Keynote title="Solution">

We have $\displaystyle \lim_{x \to \infty} e^x = \infty$ and $\displaystyle \lim_{x \to \infty} x^2 = \infty$, so the limit is an indeterminate form of type $\frac{\infty}{\infty}$, and L'Hospital's Rule gives:

$$\lim_{x \to \infty} \frac{e^x}{x^2} = \lim_{x \to \infty} \frac{ \frac{d}{dx}(e^x) }{ \frac{d}{dx}(x^2) } = \lim_{x \to \infty} \frac{e^x}{2x}$$

Since $e^x \to \infty$ and $2x \to \infty$ as $x \to \infty$, the limit on the right side is also indeterminate.

A second application of L'Hospital's Rule gives:

$$\lim_{x \to \infty} \frac{e^x}{x^2} = \lim_{x \to \infty} \frac{e^x}{2x} = \lim_{x \to \infty} \frac{e^x}{2} = \infty$$

</Keynote>

---
layout: default
---

# Example 2: L'Hospital's Rule

<Keynote title="Example">

Find $\displaystyle \lim_{x \to 0} \frac{\tan x - x}{x^3}$.

</Keynote>

---
layout: default
---

# Example 2: L'Hospital's Rule (cont.)

<Keynote title="Solution">

Noting that both $\tan x - x \to 0$ and $x^3 \to 0$ as $x \to 0$, we use L'Hospital's Rule:

$$\lim_{x \to 0} \frac{\tan x - x}{x^3} = \lim_{x \to 0} \frac{\sec^2 x - 1}{3x^2}$$

Since the limit on the right side is still of indeterminate form $\frac{0}{0}$, we apply L'Hospital's Rule again:

$$\lim_{x \to 0} \frac{\sec^2 x - 1}{3x^2} = \lim_{x \to 0} \frac{2\sec^2 x \tan x}{6x}$$

</Keynote>

Because $\displaystyle \lim_{x \to 0} \sec^2 x = 1$, we simplify the calculation:

$$\lim_{x \to 0} \frac{2\sec^2 x \tan x}{6x} = \frac{1}{3} \lim_{x \to 0} \sec^2 x \cdot \lim_{x \to 0} \frac{\tan x}{x} = \frac{1}{3} \cdot \lim_{x \to 0} \frac{\tan x}{x}$$

---
layout: default
---

# Example 2: L'Hospital's Rule (cont.)

We can evaluate this last limit either by using L'Hospital's Rule a third time. Putting together all the steps, we get:

$$\lim_{x \to 0} \frac{\tan x - x}{x^3} = \lim_{x \to 0} \frac{\sec^2 x - 1}{3x^2} = \lim_{x \to 0} \frac{2 \sec^2 x \tan x}{6x}$$

$$= \frac{1}{3} \lim_{x \to 0} \sec^2 x \cdot \lim_{x \to 0} \frac{\tan x}{x} = \frac{1}{3} \cdot \lim_{x \to 0} \frac{\tan x}{x} = \frac{1}{3} \cdot 1 = \frac{1}{3}$$

---
layout: default
---

# Indeterminate Form of Type $0 \cdot \infty$

This kind of limit is called an **indeterminate form of type $0 \cdot \infty$**. We can deal with it by writing the product $fg$ as a quotient:

$$fg = \frac{f}{1/g} \quad \text{or} \quad fg = \frac{g}{1/f}$$

<MathBox title="Strategy for Applying L'Hospital's Rule">

This converts the given limit into an indeterminate form of type $\frac{0}{0}$ or $\frac{\infty}{\infty}$ so that we can use L'Hospital's Rule.

</MathBox>

---
layout: default
---

# Example: Indeterminate Form $0 \cdot \infty$

<Keynote title="Example">

Evaluate $\displaystyle \lim_{x \to 0^+} x \ln x$.

</Keynote>

<Keynote title="Solution">

The given limit is indeterminate because, as $x \to 0^+$, the first factor ($x$) approaches 0 while the second factor ($\ln x$) approaches $-\infty$.

We rewrite the product as a quotient:

$$x \ln x = \frac{\ln x}{1/x}$$

Then apply L'Hospital's Rule:

$$\lim_{x \to 0^+} \frac{\ln x}{1/x} = \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0$$

</Keynote>

---
layout: default
---

# Indeterminate Differences (Type $\infty - \infty$)

<div class="border-l-4 border-blue-600 bg-blue-50 p-4 dark:bg-blue-900/20 my-4">

If $\displaystyle \lim_{x \to a} f(x) = \infty$ and $\displaystyle \lim_{x \to a} g(x) = \infty$, then the limit

$$\lim_{x \to a} \left[ f(x) - g(x) \right]$$

is called an **indeterminate form of type $\infty - \infty$**.

</div>

There is a contest between $f$ and $g$: will the result be $\infty$ (if $f$ wins), $-\infty$ (if $g$ wins), or a finite number? To resolve this form, we often try to convert the difference into a quotient — for example, by:

- using a common denominator,
- rationalization, or
- factoring out a common factor

This way, we obtain an indeterminate form of type $\dfrac{0}{0}$ or $\dfrac{\infty}{\infty}$ to which L'Hospital's Rule can be applied.

---
layout: default
---

# Example: Using a Common Denominator

<Keynote title="Example">

Compute $\displaystyle \lim_{x \to 1^+} \left( \frac{1}{\ln x} - \frac{1}{x - 1} \right)$

</Keynote>

<Keynote title="Solution">

As $x \to 1^+$, both $\frac{1}{\ln x} \to \infty$ and $\frac{1}{x - 1} \to \infty$, so the limit is indeterminate of type $\infty - \infty$.

We begin by rewriting the expression with a common denominator:

$$\lim_{x \to 1^+} \left( \frac{1}{\ln x} - \frac{1}{x - 1} \right) = \lim_{x \to 1^+} \frac{x - 1 - \ln x}{(x - 1)\ln x}$$

Both numerator and denominator approach 0, so we apply L'Hospital's Rule:

$$\lim_{x \to 1^+} \frac{x - 1 - \ln x}{(x - 1)\ln x} = \lim_{x \to 1^+} \frac{1 - \frac{1}{x}}{(x - 1) \cdot \frac{1}{x} + \ln x} = \lim_{x \to 1^+} \frac{1}{2 + \ln x} = \frac{1}{2}$$

</Keynote>

---
layout: default
---

# Example: Factoring Out a Common Factor

<Keynote title="Example">

Calculate $\displaystyle \lim_{x \to \infty} (e^x - x)$

</Keynote>

<Keynote title="Solution">

This is an indeterminate difference because both $e^x$ and $x$ approach infinity.

We expect the limit to be $\infty$ since $e^x$ increases much faster than $x$. To confirm this, we factor out $x$:

$$e^x - x = x \left( \frac{e^x}{x} - 1 \right)$$

We observe that $\displaystyle \frac{e^x}{x} \to \infty$ as $x \to \infty$ by L'Hospital's Rule. Therefore, we now have a product of two large quantities:

$$\lim_{x \to \infty} (e^x - x) = \lim_{x \to \infty} \left[ x \left( \frac{e^x}{x} - 1 \right) \right] = \infty$$

</Keynote>

---
layout: default
---

# Indeterminate Powers (Types $0^0$, $\infty^0$, $1^\infty$)

<div class="border-l-4 border-blue-600 bg-blue-50 p-4 dark:bg-blue-900/20 my-4">
  <div class="text-blue-800 dark:text-blue-200 font-bold mb-2 text-lg">Indeterminate Powers</div>
  <div>

Several indeterminate forms arise from the limit

$$\lim_{x \to a} \left[ f(x) \right]^{g(x)}$$

1. $\displaystyle \lim_{x \to a} f(x) = 0$ and $\displaystyle \lim_{x \to a} g(x) = 0$ (type $0^0$)
2. $\displaystyle \lim_{x \to a} f(x) = \infty$ and $\displaystyle \lim_{x \to a} g(x) = 0$ (type $\infty^0$)
3. $\displaystyle \lim_{x \to a} f(x) = 1$ and $\displaystyle \lim_{x \to a} g(x) = \pm \infty$ (type $1^\infty$)

  </div>
</div>

---
layout: default
---

# Indeterminate Powers (cont.)

Each of these cases can be treated by taking the natural logarithm. Let

$$y = \left[ f(x) \right]^{g(x)} \quad \Rightarrow \quad \ln y = g(x) \ln f(x)$$

Alternatively, we can express the function as an exponential:

$$\left[ f(x) \right]^{g(x)} = e^{g(x) \ln f(x)}$$

This transforms the limit into a product $g(x) \ln f(x)$, which is of the indeterminate form $0 \cdot \infty$ and can be evaluated accordingly.

---
layout: default
---

# Example: Indeterminate Form $1^\infty$

<Keynote title="Example">

Calculate $\displaystyle \lim_{x \to 0^+} \left(1 + \sin 4x\right)^{\cot x}$

</Keynote>

<Keynote title="Solution">

As $x \to 0^+$, we have $\sin 4x \to 0$ so $1 + \sin 4x \to 1$, and $\cot x \to \infty$.

Thus, the expression is of the indeterminate form $1^\infty$.

Let

$$y = \left(1 + \sin 4x\right)^{\cot x} \quad \Rightarrow \quad \ln y = \cot x \cdot \ln(1 + \sin 4x) = \frac{\ln(1 + \sin 4x)}{\tan x}$$

Now apply L'Hospital's Rule:

$$\lim_{x \to 0^+} \ln y = \lim_{x \to 0^+} \frac{\ln(1 + \sin 4x)}{\tan x} = \lim_{x \to 0^+} \frac{4 \cos 4x}{(1 + \sin 4x)\sec^2 x} = 4$$

So we have $\displaystyle \lim_{x \to 0^+} \ln y = 4$. Thus, $\displaystyle \lim_{x \to 0^+} y = \lim_{x \to 0^+} e^{\ln y} = e^4$

</Keynote>

---
layout: end
---

# Thank You

Questions?
