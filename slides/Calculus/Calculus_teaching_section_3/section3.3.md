---
theme: default
title: Differentiation Rules
subtitle: Section 3.3 - Derivatives of Trigonometric Functions
author: Hsu Chun-Wei
date: June 2025
layout: cover
---

# Differentiation Rules

## Section 3.3: Derivatives of Trigonometric Functions

<div class="pt-12">
  <span class="text-gray-400">Hsu Chun-Wei · June 2025</span>
</div>

---
layout: default
---

# Derivative of $\sin x$

Let's try to confirm our guess that if $f(x) = \sin x$, then $f'(x) = \cos x$. From the definition of a derivative, we have

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = \lim_{h \to 0} \frac{\sin(x+h) - \sin x}{h}$$

$$= \lim_{h \to 0} \frac{\sin x \cos h + \cos x \sin h - \sin x}{h}$$

$$= \lim_{h \to 0} \left[ \frac{\sin x \cos h - \sin x}{h} + \frac{\cos x \sin h}{h} \right]$$

$$= \lim_{h \to 0} \left[ \sin x \left( \frac{\cos h - 1}{h} \right) + \cos x \left( \frac{\sin h}{h} \right) \right]$$

$$= \lim_{h \to 0}\sin x \cdot \lim_{h \to 0} \frac{\cos h - 1}{h} + \lim_{h \to 0}\cos x \cdot \lim_{h \to 0} \frac{\sin h}{h}$$

---
layout: default
---

# Derivative of $\sin x$ (cont.)

Two of these four limits are easy to evaluate. Because we regard $x$ as a constant when computing a limit as $h \to 0$, we have

$$\lim_{h \to 0} \sin x = \sin x \qquad \text{and} \qquad \lim_{h \to 0} \cos x = \cos x$$

Later in this section we will prove that

$$\lim_{h \to 0} \frac{\sin h}{h} = 1 \qquad \text{and} \qquad \lim_{h \to 0} \frac{\cos h - 1}{h} = 0$$

So we have proved the formula for the derivative of the sine function:

<MathBox title="Derivative of the Sine Function">

$$\frac{d}{dx} (\sin x) = \cos x$$

</MathBox>

---
layout: default
---

# Derivative of $\sin x$ (cont.)

<figure class="flex flex-col items-center">
  <img src="./section3.3/CalculusT1.png" class="w-4/5" alt="Relationship between derivative of sin x and cos x" />
  <figcaption class="text-sm text-gray-500 mt-2">The relationship between the derivative of $\sin x$ and $\cos x$</figcaption>
</figure>

---
layout: default
---

# Derivative of $\cos x$

**Problem 26.** Prove, using the definition of a derivative, that if $f(x) = \cos x$, then $f'(x) = -\sin x$.

By the definition of the derivative:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = \lim_{h \to 0} \frac{\cos(x+h) - \cos x}{h}$$

$$= \lim_{h \to 0} \frac{\cos x \cos h - \sin x \sin h - \cos x}{h}$$

$$= \lim_{h \to 0} \left[ \frac{\cos x (\cos h - 1)}{h} - \frac{\sin x \sin h}{h} \right]$$

$$= \cos x \cdot \lim_{h \to 0} \frac{\cos h - 1}{h} - \sin x \cdot \lim_{h \to 0} \frac{\sin h}{h}$$

$$= \cos x \cdot 0 - \sin x \cdot 1 = -\sin x$$

---
layout: two-cols
---

# Limit Proof: $\displaystyle \lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$

<MathBox title="Limit Identity">

$$\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$$

</MathBox>

<span class="text-red-600 font-bold">PROOF</span> Assume first that $\theta$ lies between $0$ and $\pi/2$. The figure shows a sector of a circle with center $O$, central angle $\theta$, and radius 1. $BC$ is drawn perpendicular to $OA$. By the definition of radian measure, we have arc $AB = \theta$. Also $|BC| = |OB| \sin \theta = \sin \theta$.

::right::

<figure class="flex flex-col items-center mt-8">
  <img src="./section3.3/CalculusT2.png" class="w-1/2" alt="Proof diagram" />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">Proof for $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$</figcaption>
</figure>

---
layout: default
---

# Limit Proof: $\displaystyle \lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$ (cont.)

From the diagram we see that

$$|BC| < |AB| < \text{arc } AB$$

Therefore, $\sin \theta < \theta$, so

$$\frac{\sin \theta}{\theta} < 1$$

Let the tangent lines at $A$ and $B$ intersect at $E$.

$$\theta = \text{arc } AB < |AE| + |EB| < |AE| + |ED| = |AD| = |OA| \tan \theta = \tan \theta$$

---
layout: default
---

# Limit Proof: $\displaystyle \lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$ (cont.)

Therefore, we have

$$\theta < \frac{\sin \theta}{\cos \theta} \quad \text{so} \quad \cos \theta < \frac{\sin \theta}{\theta} < 1$$

We know that $\lim_{\theta \to 0} 1 = 1$ and $\lim_{\theta \to 0} \cos \theta = 1$, so by the Squeeze Theorem, we have

$$\lim_{\theta \to 0^+} \frac{\sin \theta}{\theta} = 1 \quad \text{(for } 0 < \theta < \frac{\pi}{2} \text{)}$$

But the function $\frac{\sin \theta}{\theta}$ is an even function, so its right and left limits must be equal. Hence, we have

$$\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$$

---
layout: default
---

# Limit Proof: $\displaystyle \lim_{\theta \to 0} \frac{\cos \theta - 1}{\theta} = 0$

<MathBox title="Limit Identity">

$$\lim_{\theta \to 0} \frac{\cos \theta - 1}{\theta} = 0$$

</MathBox>

<span class="text-red-600 font-bold">PROOF</span> We multiply numerator and denominator by $\cos \theta + 1$ in order to put the function in a form in which we can use limits that we know.

$$\lim_{\theta \to 0} \frac{\cos \theta - 1}{\theta} = \lim_{\theta \to 0} \left( \frac{\cos \theta - 1}{\theta} \cdot \frac{\cos \theta + 1}{\cos \theta + 1} \right) = \lim_{\theta \to 0} \frac{\cos^2 \theta - 1}{\theta(\cos \theta + 1)}$$

$$= \lim_{\theta \to 0} \frac{-\sin^2 \theta}{\theta(\cos \theta + 1)} = -\lim_{\theta \to 0} \left( \frac{\sin \theta}{\theta} \cdot \frac{\sin \theta}{\cos \theta + 1} \right)$$

$$= -\lim_{\theta \to 0} \frac{\sin \theta}{\theta} \cdot \lim_{\theta \to 0} \frac{\sin \theta}{\cos \theta + 1} = -1 \cdot \left( \frac{0}{1 + 1} \right) = 0$$

---
layout: default
---

# Derivatives of Trigonometric Functions

<MathBox title="Derivatives of Trigonometric Functions">

$$\frac{d}{dx} (\sin x) = \cos x \qquad \frac{d}{dx} (\csc x) = -\csc x \cot x$$

$$\frac{d}{dx} (\cos x) = -\sin x \qquad \frac{d}{dx} (\sec x) = \sec x \tan x$$

$$\frac{d}{dx} (\tan x) = \sec^2 x \qquad \frac{d}{dx} (\cot x) = -\csc^2 x$$

</MathBox>

Try to prove all of the equations from the given properties of derivatives of trigonometric function.

---
layout: end
---

# Thank You

Questions?
