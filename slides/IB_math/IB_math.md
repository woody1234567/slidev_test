---
theme: default
background: https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## AP Precalculus
  Chapter 1.2: EXPONENTS AND RADICALS
drawings:
  persist: false
transition: slide-left
title: AP Precalculus
mdc: true
---

# AP Precalculus

## Chapter 1.2: EXPONENTS AND RADICALS

<div class="pt-12">
  <span @click="$nav.next" class="px-2 py-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10 text-gray-400">
    Hsu Chun-Wei <kbd class="ml-2 font-sans text-xs">July 2025</kbd>
  </span>
</div>

---

# Table of Contents

- EXPONENTS AND RADICALS
  - Integer Exponents
  - Rules for Working with Exponents
  - Zero and Negative Exponents
  - Laws of Exponents
  - Scientific Notation
  - Radicals: $n$th Roots
  - Rational Exponents
  - Rationalizing the Denominator

---

# EXPONENTS AND RADICALS

# Exponents and Radicals

In this section, we give meaning to expressions such as $a^{m/n}$, where the exponent $m/n$ is a rational number.  
To prepare for this, we first recall key ideas about integer exponents, radicals, and $n$th roots.

---

# Integer Exponents

**Integer Exponents**

A product of identical numbers is usually written using exponential notation.  
For example,

$$
5 \cdot 5 \cdot 5 = 5^{3}.
$$

In general, we have the following definition.

<MathBox title="Exponential Notation">

If $a$ is any real number and $n$ is a positive integer, then the $n$th power of $a$ is defined as

$$ a^{n} = \underbrace{a \cdot a \cdot \ldots \cdot a}\_{n \text{ factors}}. $$

The number $a$ is called the **base**, and $n$ is called the **exponent**.

</MathBox>

---

# Example: Exponential Notation

<MathBox title="Example 1">

- a: $\left(\frac{1}{2}\right)^{5} = \left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right) = \frac{1}{32}$
- b: $(-3)^{4} = (-3)(-3)(-3)(-3) = 81$
- c: $-3^{4} = -(3 \cdot 3 \cdot 3 \cdot 3) = -81$

</MathBox>

<Keynote title="Important Note">

$$ (-3)^4 \neq -3^4 $$
The exponent applies only to the base inside the parentheses.

</Keynote>

---

# Rules for Working with Exponents

To discover the rule for multiplication, consider the following example:

$$
5^{4} \cdot 5^{2} = (5 \cdot 5 \cdot 5 \cdot 5)(5 \cdot 5) = 5^{6} = 5^{4+2}.
$$

<MathBox title="Product Rule for Exponents" class="mt-4">

For any real number $a$ and positive integers $m$ and $n$,

$$ a^{m} \cdot a^{n} = a^{m+n}. $$

</MathBox>

<div class="mt-4">That is, <strong>to multiply two powers with the same base, add their exponents</strong>.</div>

---

# Zero and Negative Exponents

We would like the product rule $a^{m} \cdot a^{n} = a^{m+n}$ to remain valid even when exponents are zero or negative.

For example, $2^{0} \cdot 2^{3} = 2^{0+3} = 2^{3}$, which is possible only if $2^{0} = 1$.

Similarly, $5^{4} \cdot 5^{-4} = 5^{4+(-4)} = 5^{0} = 1$, which implies $5^{-4} = \dfrac{1}{5^{4}}$.

<MathBox title="Zero and Negative Exponents" class="mt-4">

If $a \neq 0$ is any real number and $n$ is a positive integer, then

$$ a^{0} = 1 \qquad \text{and} \qquad a^{-n} = \frac{1}{a^{n}}. $$

</MathBox>

---

# Example: Zero and Negative Exponents

<MathBox title="Example 2">

- a: $\left(\frac{4}{7}\right)^{0} = 1$
- b: $x^{-1} = \frac{1}{x^{1}} = \frac{1}{x}$
- c: $(-2)^{-3} = \frac{1}{(-2)^{3}} = \frac{1}{-8} = -\frac{1}{8}$

</MathBox>

<Keynote title="Key Idea">

A zero exponent gives $1$, and a negative exponent represents a reciprocal.

</Keynote>

---

# Rules for Working with Exponents

Familiarity with the following rules is essential for working with exponents and bases.

In the rules below:

- $a$ and $b$ are real numbers,
- $m$ and $n$ are integers,
- $a \neq 0$, $b \neq 0$ when division is involved.

These laws allow us to simplify expressions involving exponents efficiently.

---

# Laws of Exponents

<MathBox title="Laws of Exponents">

| Law                                                       | Example                                              | Description                       |
| :-------------------------------------------------------- | :--------------------------------------------------- | :-------------------------------- |
| 1. $a^{m}a^{n} = a^{m+n}$                                 | $3^{2}\cdot3^{5}=3^{7}$                              | Add exponents when multiplying.   |
| 2. $\dfrac{a^{m}}{a^{n}} = a^{m-n}$                       | $\dfrac{3^{5}}{3^{2}}=3^{3}$                         | Subtract exponents when dividing. |
| 3. $(a^{m})^{n} = a^{mn}$                                 | $(3^{2})^{5}=3^{10}$                                 | Multiply exponents.               |
| 4. $(ab)^{n} = a^{n}b^{n}$                                | $(3\cdot4)^{2}=3^{2}\cdot4^{2}$                      | Raise each factor to the power.   |
| 5. $\left(\dfrac{a}{b}\right)^{n} = \dfrac{a^{n}}{b^{n}}$ | $\left(\dfrac{3}{4}\right)^{2}=\dfrac{3^{2}}{4^{2}}$ | Raise numerator and denominator.  |

</MathBox>

---

# Proof of Law 3: $(a^{m})^{n} = a^{mn}$

If $m$ and $n$ are positive integers, we have
$$ (a^{m})^{n} = (a \cdot a \cdot \ldots \cdot a)^{n}, $$
where there are $m$ factors of $a$.

Raising this expression to the power $n$ gives
$$ (a \cdot a \cdot \ldots \cdot a)(a \cdot a \cdot \ldots \cdot a)\cdots(a \cdot a \cdot \ldots \cdot a), $$
which consists of $n$ groups, each with $m$ factors.

<MathBox title="Conclusion" class="mt-4">

Altogether, there are $mn$ factors of $a$, so

$$ (a^{m})^{n} = a^{mn}. $$

</MathBox>

---

# Proof of Law 4: $(ab)^{n} = a^{n}b^{n}$

If $n$ is a positive integer, then
$$ (ab)^{n} = (ab)(ab)\cdots(ab), $$
which contains $n$ identical factors.

Using the Commutative and Associative Properties, we regroup the factors:
$$ (ab)(ab)\cdots(ab) = (a \cdot a \cdot \ldots \cdot a)(b \cdot b \cdot \ldots \cdot b). $$

<MathBox title="Conclusion" class="mt-4">

There are $n$ factors of $a$ and $n$ factors of $b$, so

$$ (ab)^{n} = a^{n}b^{n}. $$

</MathBox>

---

# Example: Using Laws of Exponents

- (a) $x^{4}x^{7} = x^{4+7} = x^{11}$ (Law 1)
- (b) $y^{4}y^{-7} = y^{4-7} = y^{-3} = \frac{1}{y^{3}}$ (Law 1)
- (c) $\frac{c^{9}}{c^{5}} = c^{9-5} = c^{4}$ (Law 2)
- (d) $(b^{4})^{5} = b^{4\cdot 5} = b^{20}$ (Law 3)
- (e) $(3x)^{3} = 3^{3}x^{3} = 27x^{3}$ (Law 4)
- (f) $\left(\frac{x}{2}\right)^{5} = \frac{x^{5}}{2^{5}} = \frac{x^{5}}{32}$ (Law 5)

---

# Example: Simplifying Expressions with Exponents

**Simplify:**

- $(2a^{3}b^{2})(3ab^{4})^{3}$
- $\left(\frac{x}{y}\right)^{3} \left(\frac{y^{2}x}{z}\right)^{4}$

---

# Example: Simplifying Expressions with Exponents

**Simplify:**

<MathBox title="Example 4(a)">

$$ (2a^{3}b^{2})(3ab^{4})^{3} $$
$$ = (2a^{3}b^{2})\bigl[3^{3}a^{3}(b^{4})^{3}\bigr] \qquad \text{(Law 4 and Law 3)} $$
$$ = (2a^{3}b^{2})(27a^{3}b^{12}) $$
$$ = (2)(27)a^{3}a^{3}b^{2}b^{12} \qquad \text{(Group like bases)} $$
$$ = 54a^{6}b^{14} \qquad \text{(Law 1)} $$

</MathBox>

---

# Example: Simplifying Expressions with Exponents

**Simplify:**

<MathBox title="Example 4(b)">

$$ \left(\frac{x}{y}\right)^{3} \left(\frac{y^{2}x}{z}\right)^{4} $$
$$ = \frac{x^{3}}{y^{3}} \cdot \frac{(y^{2})^{4}x^{4}}{z^{4}} \qquad \text{(Laws 5 and 4)} $$
$$ = \frac{x^{3}y^{8}x^{4}}{y^{3}z^{4}} \qquad \text{(Law 3)} $$
$$ = \frac{x^{7}y^{5}}{z^{4}} \qquad \text{(Laws 1 and 2)} $$

</MathBox>

---

# Laws of Exponents: Negative Exponents

<MathBox title="Laws of Exponents">

| Law                                                                 | Example                                                          | Description                                              |
| :------------------------------------------------------------------ | :--------------------------------------------------------------- | :------------------------------------------------------- |
| 6. $\left(\dfrac{a}{b}\right)^{-n} = \left(\dfrac{b}{a}\right)^{n}$ | $\left(\dfrac{3}{4}\right)^{-2} = \left(\dfrac{4}{3}\right)^{2}$ | Invert the fraction and change the sign of the exponent. |
| 7. $\dfrac{a^{-n}}{b^{-m}} = \dfrac{b^{m}}{a^{n}}$                  | $\dfrac{3^{-2}}{4^{-5}} = \dfrac{4^{5}}{3^{2}}$                  | Move factors between numerator and denominator.          |

</MathBox>

---

# Proof of Law 7

Using the definition of negative exponents, we have
$$ \dfrac{a^{-n}}{b^{-m}} = \dfrac{\dfrac{1}{a^{n}}}{\dfrac{1}{b^{m}}}. $$

Dividing by a fraction is equivalent to multiplying by its reciprocal:
$$ \dfrac{\dfrac{1}{a^{n}}}{\dfrac{1}{b^{m}}} = \dfrac{1}{a^{n}} \cdot \dfrac{b^{m}}{1}. $$

<MathBox title="Conclusion" class="mt-4">

$$ \dfrac{a^{-n}}{b^{-m}} = \dfrac{b^{m}}{a^{n}}. $$

</MathBox>

---

# Example 5: Simplifying with Negative Exponents

**Eliminate negative exponents and simplify each expression.**

1. $\frac{6s t^{-4}}{2s^{-2} t^{2}}$
2. $\left(\frac{y}{3z^{3}}\right)^{-2}$

---

# Example 5: Simplifying with Negative Exponents

**Eliminate negative exponents and simplify each expression.**

<MathBox title="Example (1)">

$$ \frac{6s t^{-4}}{2s^{-2} t^{2}} $$

Using **Law 7**, move factors with negative exponents across the fraction:

$$ = \frac{6s s^{2}}{2 t^{2} t^{4}} $$

Group like bases and simplify:

$$ = \frac{6s^{3}}{2t^{6}} = \frac{3s^{3}}{t^{6}} \qquad \text{(Law 1)} $$

</MathBox>

---

# Example: Simplifying with Negative Exponents

**Eliminate negative exponents and simplify each expression.**

<MathBox title="Example (2)">

$$ \left(\frac{y}{3z^{3}}\right)^{-2} $$

Using **Law 6**, invert the fraction and change the sign of the exponent:

$$ = \left(\frac{3z^{3}}{y}\right)^{2} $$

Apply the power to numerator and denominator:

$$ = \frac{9z^{6}}{y^{2}} \qquad \text{(Laws 4 and 5)} $$

</MathBox>

---

# Scientific Notation

Scientists use exponential notation as a compact way to write very large and very small numbers, which are otherwise difficult to read and write.

<MathBox title="Scientific Notation" class="mt-4">

A positive number $x$ is written in **scientific notation** if it has the form

$$ x = a \times 10^{n}, $$

where $1 \le a < 10$ and $n$ is an integer.

</MathBox>

<div class="mt-4">The number $a$ is called the <strong>coefficient</strong>, and $n$ is the <strong>power of ten</strong>.</div>

---

# Scientific Notation: Interpreting the Exponent

**Positive Exponent (Large Numbers)**

$$ 4 \times 10^{13} = 40,000,000,000 $$
A positive exponent indicates that the decimal point is moved **13 places to the right**.

**Negative Exponent (Small Numbers)**

$$ 1.66 \times 10^{-24} = 0.00000000000000000000000166 $$
A negative exponent indicates that the decimal point is moved **24 places to the left**.

<MathBox title="Key Idea" class="mt-4">

- Positive exponent $\rightarrow$ move the decimal point to the right.
- Negative exponent $\rightarrow$ move the decimal point to the left.

</MathBox>

---

# Example: Changing from Decimal to Scientific Notation

**Write each number in scientific notation.**

<MathBox title="Example">

- (a) $56,920 = 5.692 \times 10^{4}$ (Decimal point moved **4 places to the left**)
- (b) $0.000093 = 9.3 \times 10^{-5}$ (Decimal point moved **5 places to the right**)

</MathBox>

<Keynote title="Reminder">

- Moving the decimal point to the left gives a **positive** exponent.
- Moving the decimal point to the right gives a **negative** exponent.

</Keynote>

---

# Example: Calculating with Scientific Notation

If $a \approx 0.00046$, $b \approx 1.697 \times 10^{22}$, and $c \approx 2.91 \times 10^{-18}$, use a calculator to approximate the quotient $\dfrac{ab}{c}$.

<MathBox title="Solution">

We rewrite all numbers in scientific notation and apply the laws of exponents:

$$ \frac{ab}{c} \approx \frac{(4.6 \times 10^{-4})(1.697 \times 10^{22})}{2.91 \times 10^{-18}}. $$

$$ = \frac{(4.6)(1.697)}{2.91} \times 10^{-4+22+18} \approx 2.7 \times 10^{36}. $$

</MathBox>

<div class="mt-4 text-sm">
  <strong>Note:</strong> The answer is rounded to <strong>two significant figures</strong>, since the least accurate given value has two significant figures.
</div>

---

# Radicals: Square Roots

To give meaning to powers with rational exponents, we first discuss radicals.

The symbol $\sqrt{\ }$ means **the positive square root of**.

<MathBox title="Square Root">

$$ \sqrt{a} = b \quad \text{means} \quad b^{2} = a \ \text{and} \ b \ge 0. $$

</MathBox>

<p class="mt-4">Since $a = b^{2} \ge 0$, the expression $\sqrt{a}$ is defined only when $a \ge 0$.</p>

$$ \sqrt{9} = 3 \quad \text{because} \quad 3^{2} = 9 \ \text{and} \ 3 \ge 0. $$

---

# Radicals: The $n$th Root

Square roots are special cases of $n$th roots.

<MathBox title="Definition of the n th Root">

If $n$ is a positive integer, the **principal $n$th root** of $a$ is defined by

$$ \sqrt[n]{a} = b \quad \text{means} \quad b^{n} = a. $$

If $n$ is even, we must have $a \ge 0$ and $b \ge 0$.

</MathBox>

<div class="mt-4">
  Examples:
  <ul>
    <li>$\sqrt[4]{81} = 3$ because $3^{4} = 81$</li>
    <li>$\sqrt[3]{-8} = -2$ because $(-2)^{3} = -8$</li>
  </ul>
</div>

---

# Radicals: Important Observations

The expressions $\sqrt{-8}$, $\sqrt[4]{-8}$, $\sqrt[6]{-8}$ are **not defined**, because even powers of real numbers are always nonnegative.

Notice the difference:
$$ \sqrt{4^{2}} = \sqrt{16} = 4, \qquad \sqrt{(-4)^{2}} = \sqrt{16} = 4 = |{-4}|. $$

<MathBox title="Key Result" class="mt-4">

$$ \sqrt{a^{2}} = |a|. $$

</MathBox>

<p class="mt-4">This result holds for square roots and, more generally, for any even root.</p>

---

# Properties of the $n$th Roots

<MathBox title="Properties of n th Roots">

| Property | Rule                                                        | Example                                                                        |
| :------- | :---------------------------------------------------------- | :----------------------------------------------------------------------------- |
| 1.       | $\sqrt[n]{ab} = \sqrt[n]{a}\sqrt[n]{b}$                     | $\sqrt[3]{-8\cdot 27} = \sqrt[3]{-8}\sqrt[3]{27} = -6$                         |
| 2.       | $\sqrt[n]{\dfrac{a}{b}} = \dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}$ | $\sqrt[4]{\dfrac{16}{81}} = \dfrac{\sqrt[4]{16}}{\sqrt[4]{81}} = \dfrac{2}{3}$ |
| 3.       | $\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}$                      | $\sqrt{\sqrt[3]{729}} = \sqrt[6]{729} = 3$                                     |
| 4.       | $\sqrt[n]{a^{n}}$ = a,  if $n$ is odd          | $\sqrt[3]{(-5)^{3}} = -5$                                                      |
| 5.       | $\sqrt[n]{a^{n}} = \|a\|$,  if $n$ is even        | $\sqrt[4]{(-3)^{4}} = \|-3\| = 3$                                              |

</MathBox>

---

# Example: Simplifying Expressions Involving $n$th Roots

**Simplifying Expressions Involving $n$th Roots**

1. $\sqrt[3]{x^{4}}$
2. $\sqrt[4]{81x^{8}y^{4}}$

---

# Example: Simplifying Expressions Involving $n$th Roots

<MathBox title="Example (1)">

$$ \sqrt[3]{x^{4}} $$

Factor out the largest perfect cube:

$$ = \sqrt[3]{x^{3}x} $$

Apply the product property of roots:

$$ = \sqrt[3]{x^{3}}\sqrt[3]{x} \qquad \text{(Property 1)} $$

Since the index is odd:

$$ = x\sqrt[3]{x} \qquad \text{(Property 4)} $$

</MathBox>

---

# Example: Simplifying Expressions Involving $n$th Roots

<MathBox title="Example (2)">

$$ \sqrt[4]{81x^{8}y^{4}} $$

Rewrite each factor under the root:

$$ = \sqrt[4]{81}\sqrt[4]{x^{8}}\sqrt[4]{y^{4}} \qquad \text{(Property 1)} $$

Simplify each term:

$$ = 3\sqrt[4]{(x^{2})^{4}}\,|y| \qquad \text{(Property 5)} $$

Since $|x^{2}| = x^{2}$:

$$ = 3x^{2}|y| $$

</MathBox>

---

# Example: Combining Radicals

- (a) $\sqrt{32} + \sqrt{200} = \sqrt{16\cdot 2} + \sqrt{100\cdot 2} = \sqrt{16}\sqrt{2} + \sqrt{100}\sqrt{2} = 4\sqrt{2} + 10\sqrt{2} = 14\sqrt{2}$
- (b) If $b>0$, then $\sqrt{25b} - \sqrt{b^{3}} = \sqrt{25}\sqrt{b} - \sqrt{b^{2}}\sqrt{b} = 5\sqrt{b} - b\sqrt{b} = (5-b)\sqrt{b}$

<Keynote title="Key Idea">

Radicals can be combined **only after** they have the same radical part.

</Keynote>

---

# Rational Exponents

To define a **rational exponent** (or fractional exponent) such as $a^{1/3}$, we use radicals.

To remain consistent with the Laws of Exponents, we require
$$ (a^{1/n})^{n} = a^{(1/n)n} = a^{1} = a. $$

By the definition of the $n$th root, this leads to

<MathBox title="Key Relationship" class="mt-4">

$$ a^{1/n} = \sqrt[n]{a}. $$

</MathBox>

---

# Definition of Rational Exponents

<MathBox title="Definition of Rational Exponents">

For any rational exponent $\dfrac{m}{n}$ in lowest terms, where $m$ and $n$ are integers and $n > 0$, we define

$$ a^{m/n} = \left(\sqrt[n]{a}\right)^{m} \quad \text{or equivalently} \quad a^{m/n} = \sqrt[n]{a^{m}}. $$

If $n$ is even, we require that $a \ge 0$.

</MathBox>

<p class="mt-4">With this definition, the <strong>Laws of Exponents</strong> also hold for rational exponents.</p>

---

# Example: Using the Definition of Rational Exponents

- (a) $4^{1/2} = \sqrt{4} = 2$
- (b) $8^{2/3} = \left(\sqrt[3]{8}\right)^{2} = 2^{2} = 4$ or $8^{2/3} = \sqrt[3]{8^{2}} = \sqrt[3]{64} = 4$
- (c) $125^{-1/3} = \frac{1}{125^{1/3}} = \frac{1}{\sqrt[3]{125}} = \frac{1}{5}$
- (d) $\frac{1}{\sqrt[3]{x^{4}}} = \frac{1}{x^{4/3}} = x^{-4/3}$

<Keynote title="Key Idea">

Rational exponents can be rewritten using radicals, and negative exponents represent reciprocals.

</Keynote>

---

# Example: Writing Radicals as Rational Exponents

- (a) $(2\sqrt{x})(3\sqrt[3]{x}) = (2x^{1/2})(3x^{1/3}) = 6x^{1/2+1/3} = 6x^{5/6}$
- (b) $\sqrt{x\sqrt{x}} = (x x^{1/2})^{1/2} = (x^{3/2})^{1/2} = x^{3/4}$

<Keynote title="Key Idea">

Rewrite radicals as rational exponents first, then apply the Laws of Exponents.

</Keynote>

---

# Rationalizing the Denominator

It is often useful to eliminate radicals in a denominator by multiplying both the numerator and the denominator by an appropriate expression. This process is called **rationalizing the denominator**.

If the denominator is of the form $\sqrt{a}$, we multiply by $\sqrt{a}$:
$$ \frac{1}{\sqrt{a}} = \frac{1}{\sqrt{a}} \cdot \frac{\sqrt{a}}{\sqrt{a}} = \frac{\sqrt{a}}{a}. $$

<MathBox title="General Method" class="mt-4">

If the denominator is of the form $\sqrt[n]{a^{m}}$ with $m < n$, then multiplying numerator and denominator by $\sqrt[n]{a^{\,n-m}}$ will rationalize the denominator (for $a > 0$):

$$ \sqrt[n]{a^{m}}\,\sqrt[n]{a^{\,n-m}} = \sqrt[n]{a^{\,n}} = a. $$

</MathBox>

---

# Example: Rationalizing Denominators

- (a) $\frac{2}{\sqrt{3}} = \frac{2}{\sqrt{3}} \cdot \frac{\sqrt{3}}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$
- (b) $\frac{1}{\sqrt[3]{x^{2}}} = \frac{1}{\sqrt[3]{x^{2}}} \cdot \frac{\sqrt[3]{x}}{\sqrt[3]{x}} = \frac{\sqrt[3]{x}}{\sqrt[3]{x^{3}}} = \frac{\sqrt[3]{x}}{x}$
- (c) $\sqrt[7]{\frac{1}{a^{2}}} = \frac{1}{\sqrt[7]{a^{2}}} = \frac{1}{\sqrt[7]{a^{2}}} \cdot \frac{\sqrt[7]{a^{5}}}{\sqrt[7]{a^{5}}} = \frac{\sqrt[7]{a^{5}}}{\sqrt[7]{a^{7}}} = \frac{\sqrt[7]{a^{5}}}{a}$

<Keynote title="Key Idea">

Rationalize the denominator by multiplying by a form of $1$ so that the denominator contains no radicals.

</Keynote>

---

# End of Chapter 1.2

## Thank you!
