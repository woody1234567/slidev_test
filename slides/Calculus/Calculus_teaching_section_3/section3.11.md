---
theme: default
title: Differentiation Rules
subtitle: Section 3.11 - Hyperbolic Functions
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Differentiation Rules

## Section 3.11: Hyperbolic Functions

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Hyperbolic Functions and Their Definitions

Certain combinations of the exponential functions $e^x$ and $e^{-x}$ arise so frequently in mathematics and its applications that they are given special names. These are called **hyperbolic functions** and are analogous to trigonometric functions, but relate to hyperbolas instead of circles.

<MathBox title="Definition of the Hyperbolic Functions">

$$\sinh x = \frac{e^x - e^{-x}}{2} \qquad \text{csch } x = \frac{1}{\sinh x}$$

$$\cosh x = \frac{e^x + e^{-x}}{2} \qquad \text{sech } x = \frac{1}{\cosh x}$$

$$\tanh x = \frac{\sinh x}{\cosh x} \qquad \coth x = \frac{\cosh x}{\sinh x}$$

</MathBox>

---
layout: two-cols
---

# The Graphs of Hyperbolic Functions

::left::

<figure class="flex flex-col items-center">
  <img src="./section3.11/CalculusT1.png" class="w-4/5" alt="Graph of hyperbolic sine" />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">The graph of hyperbolic sine</figcaption>
</figure>

::right::

<figure class="flex flex-col items-center">
  <img src="./section3.11/CalculusT2.png" class="w-4/5" alt="Graph of hyperbolic cosine" />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">The graph of hyperbolic cosine</figcaption>
</figure>

---
layout: default
---

# Example of Hyperbolic Function in Real World

The most famous application is the use of hyperbolic cosine to describe the shape of a hanging wire. It can be proved that if a heavy flexible cable (such as an overhead power line) is suspended between two points at the same height, then it takes the shape of a curve with equation

$$y = c + a \cosh\left(\frac{x}{a}\right)$$

<figure class="flex flex-col items-center mt-4">
  <img src="./section3.11/CalculusT3.png" class="w-1/2" alt="Catenary" />
  <figcaption class="text-sm text-gray-500 mt-2">Catenary</figcaption>
</figure>

---
layout: default
---

# Hyperbolic Identities

The hyperbolic functions satisfy a number of identities that are similar to well-known trigonometric identities.

<MathBox title="Hyperbolic Identities">

$$\sinh(-x) = -\sinh x \qquad \cosh(-x) = \cosh x$$

$$\cosh^2 x - \sinh^2 x = 1 \qquad 1 - \tanh^2 x = \text{sech}^2 x$$

$$\sinh(x + y) = \sinh x \cosh y + \cosh x \sinh y$$

$$\cosh(x + y) = \cosh x \cosh y + \sinh x \sinh y$$

</MathBox>

Try to prove all of the equations from the given Identities of Hyperbolic functions.

---
layout: default
---

# Example: Proving Hyperbolic Identities

<Keynote title="EXAMPLE">

Prove (a) $\cosh^2 x - \sinh^2 x = 1$ and (b) $1 - \tanh^2 x = \text{sech}^2 x$.

</Keynote>

<Keynote title="SOLUTION">

**(a)** We compute:

$$\cosh^2 x - \sinh^2 x = \left( \frac{e^x + e^{-x}}{2} \right)^2 - \left( \frac{e^x - e^{-x}}{2} \right)^2$$

$$= \frac{e^{2x} + 2 + e^{-2x}}{4} - \frac{e^{2x} - 2 + e^{-2x}}{4} = \frac{4}{4} = 1$$

**(b)** Start with the identity from (a): $\cosh^2 x - \sinh^2 x = 1$

Divide both sides by $\cosh^2 x$:

$$1 - \frac{\sinh^2 x}{\cosh^2 x} = \text{sech}^2 x \quad \Rightarrow \quad 1 - \tanh^2 x = \text{sech}^2 x$$

</Keynote>

---
layout: default
---

# Derivatives of Hyperbolic Functions

We list the differentiation formulas for the hyperbolic functions. Note the analogy with the differentiation formulas for trigonometric functions, but note that the signs differ in some cases.

<MathBox title="Derivatives of Hyperbolic Functions">

$$\frac{d}{dx} (\sinh x) = \cosh x \qquad \frac{d}{dx} (\text{csch } x) = -\text{csch } x \, \coth x$$

$$\frac{d}{dx} (\cosh x) = \sinh x \qquad \frac{d}{dx} (\text{sech } x) = -\text{sech } x \, \tanh x$$

$$\frac{d}{dx} (\tanh x) = \text{sech}^2 x \qquad \frac{d}{dx} (\coth x) = -\text{csch}^2 x$$

</MathBox>

Try to prove all of the equations from the given properties of hyperbolic function.

---
layout: default
---

# Inverse Hyperbolic Functions and Their Definitions

$\sinh$ and $\tanh$ are one-to-one functions and so they have inverse functions denoted by $\sinh^{-1}$. Although $\cosh$ is not one-to-one, if we restrict the domain to $[0, \infty)$, then $y = \cosh x$ becomes one-to-one and attains all values in the range $[1, \infty)$. The inverse hyperbolic cosine function is defined as the inverse of this restricted function.

<MathBox title="Inverse Hyperbolic Functions">

$$y = \sinh^{-1} x \iff \sinh y = x$$

$$y = \cosh^{-1} x \iff \cosh y = x \quad \text{and} \quad y \ge 0$$

</MathBox>

---
layout: default
---

# Inverse Hyperbolic Functions as Logarithms

Since the hyperbolic functions are defined in terms of exponential functions, it's not surprising to learn that the inverse hyperbolic functions can be expressed in terms of logarithms.

<MathBox title="Inverse Hyperbolic Formulas (Logarithmic Form)">

$$\sinh^{-1}x = \ln\left(x + \sqrt{x^2 + 1}\right) \qquad x \in \mathbb{R}$$

$$\cosh^{-1}x = \ln\left(x + \sqrt{x^2 - 1}\right) \qquad x \ge 1$$

$$\tanh^{-1}x = \frac{1}{2} \ln\left( \frac{1 + x}{1 - x} \right) \qquad -1 < x < 1$$

</MathBox>

Try to prove all of the equations from the given properties of hyperbolic function.

---
layout: default
---

# Example: Inverse Hyperbolic Identity

<Keynote title="EXAMPLE">

Show that $\sinh^{-1}x = \ln\left(x + \sqrt{x^2 + 1} \right)$

</Keynote>

<Keynote title="SOLUTION">

Let $y = \sinh^{-1}x$. Then

$$x = \sinh y = \frac{e^y - e^{-y}}{2}$$

Multiply both sides by 2:

$$e^y - e^{-y} = 2x$$

Multiply both sides by $e^y$:

$$(e^y)^2 - 2x e^y - 1 = 0$$

</Keynote>

---
layout: default
---

# Example: Inverse Hyperbolic Identity (cont.)

This is a quadratic in $e^y$. Solving:

$$e^y = \frac{2x \pm \sqrt{4x^2 + 4}}{2} = x \pm \sqrt{x^2 + 1}$$

Since $e^y > 0$, we discard the minus root:

$$e^y = x + \sqrt{x^2 + 1}$$

Therefore:

$$y = \ln(e^y) = \ln\left(x + \sqrt{x^2 + 1}\right)$$

<MathBox title="Result">

$$\sinh^{-1}x = \ln\left(x + \sqrt{x^2 + 1}\right)$$

</MathBox>

---
layout: default
---

# Derivatives of Inverse Hyperbolic Functions

<MathBox title="Derivatives of Inverse Hyperbolic Functions">

$$\frac{d}{dx} (\sinh^{-1} x) = \frac{1}{\sqrt{1 + x^2}} \qquad \frac{d}{dx} (\text{csch}^{-1} x) = -\frac{1}{|x| \sqrt{1 + x^2}}$$

$$\frac{d}{dx} (\cosh^{-1} x) = \frac{1}{\sqrt{x^2 - 1}} \qquad \frac{d}{dx} (\text{sech}^{-1} x) = -\frac{1}{x \sqrt{1 - x^2}}$$

$$\frac{d}{dx} (\tanh^{-1} x) = \frac{1}{1 - x^2} \qquad \frac{d}{dx} (\coth^{-1} x) = \frac{1}{1 - x^2}$$

</MathBox>

Try to prove all of the equations from the given properties of hyperbolic function.

---
layout: default
---

# Example: Derivative of Inverse Hyperbolic Function

<Keynote title="Example">

Prove that $\displaystyle \frac{d}{dx} \left( \sinh^{-1} x \right) = \frac{1}{\sqrt{1 + x^2}}$

</Keynote>

<Keynote title="Solution 1">

Let $y = \sinh^{-1} x$. Then $\sinh y = x$.

Differentiating implicitly with respect to $x$, we get:

$$\cosh y \cdot \frac{dy}{dx} = 1 \quad \Rightarrow \quad \frac{dy}{dx} = \frac{1}{\cosh y}$$

Using the identity $\cosh^2 y - \sinh^2 y = 1$, we substitute:

$$\cosh^2 y = 1 + \sinh^2 y = 1 + x^2 \quad \Rightarrow \quad \cosh y = \sqrt{1 + x^2}$$

Thus, $\displaystyle \frac{dy}{dx} = \frac{1}{\sqrt{1 + x^2}}$

</Keynote>

---
layout: default
---

# Example: Derivative of Inverse Hyperbolic Function (cont.)

<Keynote title="Solution 2">

$$\frac{d}{dx} (\sinh^{-1} x) = \frac{d}{dx} \ln\left(x + \sqrt{x^2 + 1} \right)$$

$$= \frac{1}{x + \sqrt{x^2 + 1}} \cdot \frac{d}{dx} \left(x + \sqrt{x^2 + 1} \right)$$

$$= \frac{1}{x + \sqrt{x^2 + 1}} \left( 1 + \frac{x}{\sqrt{x^2 + 1}} \right)$$

$$= \frac{\sqrt{x^2 + 1} + x}{(x + \sqrt{x^2 + 1})\sqrt{x^2 + 1}}$$

$$= \frac{1}{\sqrt{x^2 + 1}}$$

</Keynote>

---
layout: end
---

# Thank You

Questions?
