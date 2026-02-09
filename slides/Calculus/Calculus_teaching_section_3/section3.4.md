---
theme: default
title: Differentiation Rules
subtitle: Section 3.4 - The Chain Rule
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Differentiation Rules

## Section 3.4: The Chain Rule

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# The Chain Rule

<MathBox title="The Chain Rule">

<span class="text-red-600 font-bold">The Chain Rule</span> If $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then the composite function $F = f \circ g$ defined by $F(x) = f(g(x))$ is differentiable at $x$ and $F'$ is given by the product

<span class="text-red-600 font-bold border border-red-600 px-2 py-1">1</span> $\quad F'(x) = f'(g(x)) \cdot g'(x)$

In Leibniz notation, if $y = f(u)$ and $u = g(x)$ are both differentiable functions, then

<span class="text-red-600 font-bold border border-red-600 px-2 py-1">2</span> $\quad \displaystyle \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$

</MathBox>

---
layout: default
---

# Key Background to Prove the Chain Rule

Recall that if $y = f(x)$ and $x$ changes from $a$ to $a + \Delta x$, we define the increment of $y$ as

$$\Delta y = f(a + \Delta x) - f(a)$$

According to the definition of a derivative, we have

$$\lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = f'(a)$$

So if we denote by $\varepsilon$ the difference between $\frac{\Delta y}{\Delta x}$ and $f'(a)$, we obtain

$$\lim_{\Delta x \to 0} \varepsilon = \lim_{\Delta x \to 0} \left( \frac{\Delta y}{\Delta x} - f'(a) \right) = f'(a) - f'(a) = 0$$

$$\varepsilon = \frac{\Delta y}{\Delta x} - f'(a) \quad \Rightarrow \quad \Delta y = f'(a) \Delta x + \varepsilon \Delta x$$

If we define $\varepsilon$ to be $0$ when $\Delta x = 0$, then $\varepsilon$ becomes a continuous function of $\Delta x$. Thus, for a differentiable function $f$, we can write

$$\Delta y = f'(a)\, \Delta x + \varepsilon\, \Delta x \quad \text{where} \quad \varepsilon \to 0 \text{ as } \Delta x \to 0$$

---
layout: default
---

# Proof of the Chain Rule

Suppose $u = g(x)$ is differentiable at $a$ and $y = f(u)$ is differentiable at $b = g(a)$. If $\Delta x$ is an increment in $x$ and $\Delta u$, $\Delta y$ are the corresponding increments in $u$ and $y$, then:

$$\Delta u = g'(a)\, \Delta x + \varepsilon_1\, \Delta x = \left[ g'(a) + \varepsilon_1 \right] \Delta x \quad \text{...(1)}$$

where $\varepsilon_1 \to 0$ as $\Delta x \to 0$.

Similarly,

$$\Delta y = f'(b)\, \Delta u + \varepsilon_2\, \Delta u = \left[ f'(b) + \varepsilon_2 \right] \Delta u \quad \text{...(2)}$$

where $\varepsilon_2 \to 0$ as $\Delta u \to 0$.

If we substitute the expression for $\Delta u$ from Equation (1) into Equation (2), we get

$$\Delta y = \left[ f'(b) + \varepsilon_2 \right] \left[ g'(a) + \varepsilon_1 \right] \Delta x$$

---
layout: default
---

# Proof of the Chain Rule (cont.)

So

$$\frac{\Delta y}{\Delta x} = \left[ f'(b) + \varepsilon_2 \right] \left[ g'(a) + \varepsilon_1 \right]$$

As $\Delta x \to 0$, Equation (1) shows that $\Delta u \to 0$. Taking the limit:

$$\frac{dy}{dx} = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0} \left[ f'(b) + \varepsilon_2 \right] \left[ g'(a) + \varepsilon_1 \right]$$

$$= f'(b)\, g'(a) = f'(g(a))\, g'(a)$$

<MathBox title="Conclusion">

This proves the Chain Rule:

$$\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$$

</MathBox>

---
layout: end
---

# Thank You

Questions?
