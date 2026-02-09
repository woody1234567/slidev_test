---
theme: default
title: Differentiation Rules
subtitle: Section 3.10 - Linear Approximations and Differentials
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Differentiation Rules

## Section 3.10: Linear Approximations and Differentials

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Linearization and Approximation

It might be easy to calculate a value $f(a)$ of a function, but difficult (or even impossible) to compute nearby values of $f$. So we settle for the easily computed values of the linear function $L$ whose graph is the tangent line of $f$ at $(a, f(a))$.

In other words, we use the tangent line at $(a, f(a))$ as an approximation to the curve $y = f(x)$ when $x$ is near $a$. An equation of this tangent line is:

$$y = f(a) + f'(a)(x - a)$$

The linear function whose graph is this tangent line is:

<MathBox title="Linearization of $f$ at $a$">

$$L(x) = f(a) + f'(a)(x - a)$$

</MathBox>

---
layout: default
---

# Linearization and Approximation (cont.)

The approximation $f(x) \approx L(x)$, called the linear (or tangent line) approximation, is:

<MathBox title="Linear Approximation">

$$f(x) \approx f(a) + f'(a)(x - a)$$

</MathBox>

<figure class="flex flex-col items-center mt-4">
  <img src="./section3.10/CalculusT1.png" class="w-2/5" alt="Linearization and Approximation" />
  <figcaption class="text-sm text-gray-500 mt-2">Linearization and Approximation</figcaption>
</figure>

---
layout: default
---

# Differentials

The ideas behind linear approximations are sometimes formulated in the terminology and notation of **differentials**. If $y = f(x)$, where $f$ is a differentiable function, then the **differential** $dx$ is an independent variable; that is, $dx$ can be given the value of any real number.

The **differential** $dy$ is then defined in terms of $dx$ by the equation:

<MathBox title="Definition of Differential">

$$dy = f'(x)\, dx$$

</MathBox>

So $dy$ is a dependent variable; it depends on the values of $x$ and $dx$. If $dx$ is given a specific value and $x$ is taken to be some specific number in the domain of $f$, then the numerical value of $dy$ is determined.

---
layout: default
---

# Geometric Meaning of Differentials

The geometric meaning of differentials is illustrated using two points: $P(x, f(x))$ and $Q(x + \Delta x, f(x + \Delta x))$ on the curve $y = f(x)$, and let $dx = \Delta x$. The corresponding change in $y$ is:

$$\Delta y = f(x + \Delta x) - f(x)$$

The slope of the tangent line $PR$ is the derivative $f'(x)$. Thus, the directed vertical distance from $S$ to $R$ is:

$$f'(x) \cdot dx = dy$$

- $dy$ represents the change in the **tangent line (linearization)**.
- $\Delta y$ represents the actual change in $f(x)$ along the curve.

---
layout: default
---

# Geometric Meaning of Differentials (cont.)

<figure class="flex flex-col items-center">
  <img src="./section3.10/CalculusT2.png" class="w-4/5" alt="Geometric Meaning of Differentials" />
  <figcaption class="text-sm text-gray-500 mt-2">Geometric Meaning of Differentials</figcaption>
</figure>

---
layout: default
---

# Example: Comparing $\Delta y$ and $dy$

<Keynote title="EXAMPLE">

Compare the values of $\Delta y$ and $dy$ if $f(x) = x^3 + x^2 - 2x + 1$ and $x$ changes from 2 to 2.05 and from 2 to 2.01.

</Keynote>

<Keynote title="SOLUTION (a)">

When $x$ changes from 2 to 2.05:

$$f(2) = 2^3 + 2^2 - 2(2) + 1 = 9$$

$$f(2.05) = (2.05)^3 + (2.05)^2 - 2(2.05) + 1 = 9.717625$$

$$\Delta y = f(2.05) - f(2) = 0.717625$$

General form: $dy = f'(x)\, dx = (3x^2 + 2x - 2) dx$

At $x = 2$, $dx = 0.05$:

$$dy = [3(2)^2 + 2(2) - 2] \cdot 0.05 = 0.7$$

</Keynote>

---
layout: default
---

# Example: Comparing $\Delta y$ and $dy$ (cont.)

<Keynote title="SOLUTION (b)">

When $x$ changes from 2 to 2.01:

$$f(2.01) = (2.01)^3 + (2.01)^2 - 2(2.01) + 1 = 9.140701$$

$$\Delta y = f(2.01) - f(2) = 0.140701$$

At $dx = 0.01$:

$$dy = [3(2)^2 + 2(2) - 2] \cdot 0.01 = 0.14$$

</Keynote>

<Keynote title="Observation">

As $\Delta x$ becomes smaller, the approximation $\Delta y \approx dy$ improves. Also, $dy$ is easier to compute than $\Delta y$.

</Keynote>

---
layout: default
---

# Comparing $\Delta y$ and $dy$

<figure class="flex flex-col items-center">
  <img src="./section3.10/CalculusT3.png" class="w-4/5" alt="Comparing Δy and dy" />
  <figcaption class="text-sm text-gray-500 mt-2">Comparing $\Delta y$ and $dy$</figcaption>
</figure>

---
layout: end
---

# Thank You

Questions?
