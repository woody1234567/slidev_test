---
theme: default
title: Differentiation Rules
subtitle: Section 3.1 - Derivatives of Polynomials and Exponential Functions
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Differentiation Rules

## Section 3.1: Derivatives of Polynomials and Exponential Functions

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Derivative of a Constant Function

<MathBox title="Derivative of a Constant Function">

$$\frac{d}{dx}(c) = 0$$

</MathBox>

**Proof:**

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = \lim_{h \to 0} \frac{c - c}{h} = \lim_{h \to 0} 0 = 0$$

---
layout: default
---

# The Power Rule

<MathBox title="The Power Rule">

If $n$ is a positive integer, then

$$\frac{d}{dx}(x^n) = nx^{n-1}$$

</MathBox>

---
layout: default
---

# Proof of the Power Rule

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = \lim_{h \to 0} \frac{(x+h)^n - x^n}{h}$$

Here we need to expand $(x+h)^n$ and we use the Binomial Theorem to do so:

$$f'(x) = \lim_{h \to 0} \frac{\left[ x^n + nx^{n-1}h + \frac{n(n-1)}{2}x^{n-2}h^2 + \cdots + nxh^{n-1} + h^n \right] - x^n}{h}$$

$$= \lim_{h \to 0} \frac{nx^{n-1}h + \frac{n(n-1)}{2}x^{n-2}h^2 + \cdots + nxh^{n-1} + h^n}{h}$$

$$= \lim_{h \to 0} \left[ nx^{n-1} + \frac{n(n-1)}{2}x^{n-2}h + \cdots + nxh^{n-2} + h^{n-1} \right]$$

$$= nx^{n-1}$$

---
layout: default
---

# The Constant Multiple Rule

<MathBox title="The Constant Multiple Rule">

If $c$ is a constant and $f$ is a differentiable function, then

$$\frac{d}{dx}[cf(x)] = c \frac{d}{dx} f(x)$$

</MathBox>

<span class="text-red-600 font-bold">PROOF</span> Let $g(x) = cf(x)$. Then

$$g'(x) = \lim_{h \to 0} \frac{g(x+h) - g(x)}{h} = \lim_{h \to 0} \frac{cf(x+h) - cf(x)}{h}$$

$$= \lim_{h \to 0} c \left[ \frac{f(x+h) - f(x)}{h} \right] = c \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = c f'(x)$$

---
layout: default
---

# The Sum and Difference Rules

<MathBox title="The Sum and Difference Rules">

If $f$ and $g$ are both differentiable, then

$$\frac{d}{dx}[f(x) + g(x)] = \frac{d}{dx}f(x) + \frac{d}{dx}g(x)$$

$$\frac{d}{dx}[f(x) - g(x)] = \frac{d}{dx}f(x) - \frac{d}{dx}g(x)$$

</MathBox>

<span class="text-red-600 font-bold">PROOF</span> To prove the Sum Rule, we let $F(x) = f(x) + g(x)$. Then

$$F'(x) = \lim_{h \to 0} \frac{F(x+h) - F(x)}{h} = \lim_{h \to 0} \frac{[f(x+h) + g(x+h)] - [f(x) + g(x)]}{h}$$

$$= \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} + \lim_{h \to 0} \frac{g(x+h) - g(x)}{h} = f'(x) + g'(x)$$

---
layout: default
---

# Exponential Functions

Let's try to compute the derivative of the exponential function $f(x) = b^x$ using the definition of a derivative:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = \lim_{h \to 0} \frac{b^{x+h} - b^x}{h}$$

$$= \lim_{h \to 0} \frac{b^x b^h - b^x}{h} = \lim_{h \to 0} \frac{b^x (b^h - 1)}{h}$$

The factor $b^x$ doesn't depend on $h$, so we can take it in front of the limit:

$$f'(x) = b^x \lim_{h \to 0} \frac{b^h - 1}{h}$$

---
layout: default
---

# Exponential Functions (cont.)

Notice that the limit is the value of the derivative of $f$ at 0, that is,

$$\lim_{h \to 0} \frac{b^h - 1}{h} = f'(0)$$

Therefore we have shown that if the exponential function $f(x) = b^x$ is differentiable at 0, then it is differentiable everywhere and

$$f'(x) = f'(0) b^x$$

This equation says that **the rate of change of any exponential function is proportional to the function itself**.

---
layout: default
---

# Definition of the Number $e$

<MathBox title="Definition of the Number $e$">

$e$ is the number such that

$$\lim_{h \to 0} \frac{e^h - 1}{h} = 1$$

</MathBox>

Geometrically, this means that of all possible exponential functions $y = b^x$, the function $f(x) = e^x$ is the one whose tangent line at $(0,1)$ has a slope $f'(0)$ that is exactly 1.

---
layout: two-cols
---

# Definition of the Number $e$ (cont.)

::left::

<figure class="flex flex-col items-center">
  <img src="./section3.1/CalculusT1.png" class="w-4/5" alt="Graph of b^x where 2 < b < 3" />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">The graph of $b^x$ where $2 < b < 3$</figcaption>
</figure>

::right::

<figure class="flex flex-col items-center">
  <img src="./section3.1/CalculusT2.png" class="w-4/5" alt="e^x with slope 1 at (0,1)" />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">$e^x$ with slope 1 at $(0,1)$</figcaption>
</figure>

---
layout: default
---

# Derivative of the Natural Exponential Function

If we put $b = e$ and therefore $f'(0) = 1$, it becomes the following important differentiation formula:

$$f'(x) = f'(0) \cdot b^x = 1 \cdot e^x = e^x$$

<MathBox title="Derivative of the Natural Exponential Function">

$$\frac{d}{dx}(e^x) = e^x$$

</MathBox>

---
layout: default
---

# Derivatives of General Exponential Functions

We can use the Chain Rule to differentiate an exponential function with any base $b > 0$. Recall that we can write

$$b^x = e^{(\ln b)x}$$

and then the Chain Rule gives

$$\frac{d}{dx} (b^x) = \frac{d}{dx} \left( e^{(\ln b)x} \right) = e^{(\ln b)x} \cdot \frac{d}{dx}[(\ln b)x]$$

$$= e^{(\ln b)x} \cdot (\ln b) = b^x \ln b$$

because $\ln b$ is a constant. So we have the formula:

<MathBox title="Derivative of General Exponential Function">

$$\frac{d}{dx} (b^x) = b^x \ln b$$

</MathBox>

---
layout: end
---

# Thank You

Questions?
