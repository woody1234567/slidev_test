---
theme: default
title: Differentiation Rules
subtitle: Section 3.6 - Derivatives of Logarithmic and Inverse Trigonometric Functions
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Differentiation Rules

## Section 3.6: Derivatives of Logarithmic and Inverse Trigonometric Functions

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Derivative of $\log_b x$

<MathBox title="Logarithmic Derivative Formula">

$$\frac{d}{dx} (\log_b x) = \frac{1}{x \ln b}$$

</MathBox>

<span class="text-red-600 font-bold">PROOF</span> Let $y = \log_b x$. Then

$$b^y = x$$

Differentiating this equation implicitly with respect to $x$, we get:

$$(b^y \ln b) \frac{dy}{dx} = 1$$

and so

$$\frac{dy}{dx} = \frac{1}{b^y \ln b} = \frac{1}{x \ln b}$$

---
layout: default
---

# Derivative of the Natural Logarithmic Function

If we put $b = e$ in the previous equation, then the factor $\ln b$ on the right becomes $\ln e = 1$, and we get the formula for the derivative of the natural logarithmic function $\log_e x = \ln x$:

<MathBox title="The Derivative of the Natural Logarithmic Function">

$$\frac{d}{dx} (\ln x) = \frac{1}{x}$$

</MathBox>

---
layout: default
---

# Example: Derivative of $\ln|x|$

<Keynote title="EXAMPLE">

Find $f'(x)$ if $f(x) = \ln |x|$.

</Keynote>

<Keynote title="SOLUTION">

Since

$$f(x) = \begin{cases} \ln x & \text{if } x > 0 \\ \ln(-x) & \text{if } x < 0 \end{cases}$$

it follows that

$$f'(x) = \begin{cases} \frac{1}{x} & \text{if } x > 0 \\ \frac{1}{-x}(-1) = \frac{1}{x} & \text{if } x < 0 \end{cases}$$

</Keynote>

<MathBox title="Derivative of $\ln|x|$">

$$\frac{d}{dx} \ln |x| = \frac{1}{x}$$

</MathBox>

---
layout: default
---

# Logarithmic Differentiation

The calculation of derivatives of complicated functions involving products, quotients, or powers can often be simplified by taking logarithms. The method used is called **logarithmic differentiation**.

<MathBox title="Steps in Logarithmic Differentiation">

1. Take natural logarithms of both sides of an equation $y = f(x)$ and use the Laws of Logarithms to expand the expression.
2. Differentiate implicitly with respect to $x$.
3. Solve the resulting equation for $y'$ and replace $y$ by $f(x)$.

</MathBox>

---
layout: default
---

# Logarithmic Differentiation Example

<Keynote title="EXAMPLE">

Differentiate $\displaystyle y = \frac{x^{3/4} \sqrt{x^2 + 1}}{(3x + 2)^5}$

</Keynote>

<Keynote title="SOLUTION">

We take logarithms of both sides and use the Laws of Logarithms to simplify:

$$\ln y = \frac{3}{4} \ln x + \frac{1}{2} \ln(x^2 + 1) - 5 \ln(3x + 2)$$

Differentiating implicitly with respect to $x$:

$$\frac{1}{y} \frac{dy}{dx} = \frac{3}{4} \cdot \frac{1}{x} + \frac{1}{2} \cdot \frac{2x}{x^2 + 1} - 5 \cdot \frac{3}{3x + 2}$$

Solving for $\frac{dy}{dx}$:

$$\frac{dy}{dx} = \frac{x^{3/4} \sqrt{x^2 + 1}}{(3x + 2)^5} \left( \frac{3}{4x} + \frac{x}{x^2 + 1} - \frac{15}{3x + 2} \right)$$

</Keynote>

---
layout: default
---

# The Number $e$ as a Limit

We have shown that if $f(x) = \ln x$, then $f'(x) = \frac{1}{x}$. Thus $f'(1) = 1$. We now use this fact to express the number $e$ as a limit.

From the definition of a derivative as a limit, we have:

$$f'(1) = \lim_{h \to 0} \frac{f(1 + h) - f(1)}{h} = \lim_{x \to 0} \frac{f(1 + x) - f(1)}{x}$$

$$= \lim_{x \to 0} \frac{\ln(1 + x) - \ln 1}{x} = \lim_{x \to 0} \frac{1}{x} \ln(1 + x) = \lim_{x \to 0} \ln(1 + x)^{1/x}$$

Because $f'(1) = 1$, we have

$$\lim_{x \to 0} \ln(1 + x)^{1/x} = 1$$

Then:

$$e = e^1 = e^{\lim_{x \to 0} \ln(1 + x)^{1/x}} = \lim_{x \to 0} e^{\ln(1 + x)^{1/x}} = \lim_{x \to 0} (1 + x)^{1/x}$$

---
layout: default
---

# Definition of $e$ as a Limit

<MathBox title="Definition of $e$">

$$e = \lim_{x \to 0} (1 + x)^{1/x}$$

</MathBox>

If we put $n = 1/x$, then $n \to \infty$ as $x \to 0^+$, and so an alternative expression for $e$ is:

<MathBox title="Classic Limit of $e$">

$$e = \lim_{n \to \infty} \left(1 + \frac{1}{n} \right)^n$$

</MathBox>

---
layout: two-cols
---

# Definition of $e$ as a Limit (cont.)

::left::

<figure class="flex flex-col items-center">
  <img src="./section3.6/CalculusT1.png" class="w-4/5" alt="Graph of y=(1+x)^(1/x)" />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">The graph of $y=(1+x)^{1/x}$</figcaption>
</figure>

::right::

<figure class="flex flex-col items-center">
  <img src="./section3.6/CalculusT2.png" class="w-4/5" alt="Numerical results" />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">Numerical results of $y=(1+x)^{1/x}$</figcaption>
</figure>

---
layout: default
---

# Derivative of the Inverse Sine Function

Recall the definition of the arcsine function:

$$y = \sin^{-1} x \quad \text{means} \quad \sin y = x \quad \text{and} \quad -\frac{\pi}{2} \le y \le \frac{\pi}{2}$$

Differentiating $\sin y = x$ implicitly with respect to $x$, we obtain:

$$\cos y \, \frac{dy}{dx} = 1 \quad \text{or} \quad \frac{dy}{dx} = \frac{1}{\cos y}$$

Now $\cos y \ge 0$ because $-\frac{\pi}{2} \le y \le \frac{\pi}{2}$, so

$$\cos y = \sqrt{1 - \sin^2 y} = \sqrt{1 - x^2} \quad \text{(since } \cos^2 y + \sin^2 y = 1\text{)}$$

<MathBox title="Derivative of $\sin^{-1}x$">

$$\frac{dy}{dx} = \frac{d}{dx} \left( \sin^{-1} x \right) = \frac{1}{\sqrt{1 - x^2}}$$

</MathBox>

---
layout: default
---

# Derivatives of Inverse Trigonometric Functions

<MathBox title="Derivatives of Inverse Trigonometric Functions">

$$\frac{d}{dx} (\sin^{-1} x) = \frac{1}{\sqrt{1 - x^2}} \qquad \frac{d}{dx} (\csc^{-1} x) = -\frac{1}{x \sqrt{x^2 - 1}}$$

$$\frac{d}{dx} (\cos^{-1} x) = -\frac{1}{\sqrt{1 - x^2}} \qquad \frac{d}{dx} (\sec^{-1} x) = \frac{1}{x \sqrt{x^2 - 1}}$$

$$\frac{d}{dx} (\tan^{-1} x) = \frac{1}{1 + x^2} \qquad \frac{d}{dx} (\cot^{-1} x) = -\frac{1}{1 + x^2}$$

</MathBox>

Try to prove all of the equations from the given properties of derivatives of inverse trigonometric functions.

---
layout: end
---

# Thank You

Questions?
