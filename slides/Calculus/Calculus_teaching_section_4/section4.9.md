---
theme: default
title: Applications of Differentiation
subtitle: Section 4.9 - Antiderivatives
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Applications of Differentiation

## Section 4.9: Antiderivatives

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Antiderivative

<MathBox title="Definition">

A function $F$ is called an **antiderivative** of $f$ on an interval $I$ if

$$F'(x) = f(x) \quad \text{for all } x \text{ in } I.$$

</MathBox>

If two functions have identical derivatives on an interval, then they must differ by a constant. Therefore, if $F$ and $G$ are both antiderivatives of $f$ on $I$, then they must differ by a constant:

$$G(x) = F(x) + C$$

where $C$ is a constant.

---
layout: two-cols
---

# Antiderivative (cont.)

This leads to the following result:

<MathBox title="Theorem">

If $F$ is an antiderivative of $f$ on an interval $I$, then the most general antiderivative of $f$ on $I$ is

$$F(x) + C$$

where $C$ is an arbitrary constant.

</MathBox>

::right::

<figure class="flex flex-col items-center mt-8">
  <img src="./section4.9/CalculusT1.png" class="w-4/5" alt="Family of antiderivatives" />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">Members of the family of antiderivatives of $f(x) = x^2$</figcaption>
</figure>

---
layout: default
---

# Antidifferentiation Formulas

| Function | Particular Antiderivative | Function | Particular Antiderivative |
|----------|---------------------------|----------|---------------------------|
| $cf(x)$ | $cF(x)$ | $\sin x$ | $-\cos x$ |
| $f(x) + g(x)$ | $F(x) + G(x)$ | $\sec^2 x$ | $\tan x$ |
| $x^n \ (n \ne -1)$ | $\dfrac{x^{n+1}}{n+1}$ | $\sec x \tan x$ | $\sec x$ |



---
layout: default
---

# Antidifferentiation Formulas

| Function | Particular Antiderivative | Function | Particular Antiderivative |
|----------|---------------------------|----------|---------------------------|
| $\dfrac{1}{x}$ | $\ln \| x \|$ | $\dfrac{1}{ \sqrt{1 - x^2} }$ | $\sin^{-1}x$ |
| $e^x$ | $e^x$ | $\dfrac{1}{1 + x^2}$ | $\tan^{-1}x$ |
| $b^x$ | $\dfrac{b^x}{\ln b}$ | $\cosh x$ | $\sinh x$ |
| $\cos x$ | $\sin x$ | $\sinh x$ | $\cosh x$ |

Try to check for these popular antidifferentiation formulas!

---
layout: default
---

# Example: Initial Value Problem

<Keynote title="Example">

Solve $f'(x) = e^x + \frac{20}{1 + x^2}$ with $f(0) = -2$

</Keynote>

<Keynote title="Solution">

$$f(x) = \int f'(x)\,dx = \int e^x\,dx + \int \frac{20}{1 + x^2}\,dx = e^x + 20\tan^{-1}x + C$$

Using Initial Condition $f(0) = -2$ to solve for $C$:

$$f(0) = e^0 + 20\tan^{-1}0 + C = 1 + 0 + C = -2 \Rightarrow C = -3$$

</Keynote>

<MathBox title="Final Answer">

$$f(x) = e^x + 20\tan^{-1}x - 3$$

</MathBox>

---
layout: end
---

# Thank You

Questions?
