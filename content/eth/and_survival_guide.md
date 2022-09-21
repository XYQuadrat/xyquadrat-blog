+++
layout = "page.html"
title = "A&D Survival Guide"

[extra]
math = true
+++

Hi.
This writeup is intended to help you through the first two weeks of the course Algorithms & Datastructures (A&D) at ETH.
A&D is usually considered to be the hardest course in the beginning, mainly because the first exercises are demanding in comparison to other courses.
In the first two lectures, three topics are covered:
- What is an algorithm?
- How can we prove statements with mathematical induction?
- How can we compare the speed of algorithms? (O-Notation)

In addition, various examples of algorithms are covered (in the past: Karatsuba, Pasture Break, Star search).
Personally, I do not like the chosen examples.
They do not appear again later on and are largely irrelevant for the exam, which is why I will use different examples for algorithms.

# What is an algorithm?
## Theory
An algorithm is a recipe for solving a problem.
It provides a set of instructions that gives us the solution we want if we follow them.

There are often multiple algorithms that solve the same problem in different ways.
Some of these may be faster than others, or need less memory to do so.

### Example: Searching a word in a dictionary
Say you want your computer to search the word “trivial” in a dictionary. The dictionary is a long list of words sorted alphabetically. How could you do this?

1. **Linear Search.** You could have the computer go through the list one by one and check each word if it equals “trivial”. If the list contains 50’000 words, this will in the worst case (where the last word is “trivial” or the word is not in the list) require the computer to check all 50’000 words.
2. **Binary Search.** Have the computer pick the word in the middle of the list. There are three cases:
	1. If the word is “trivial”, we are finished.
	2. If the word comes before “trivial” alphabetically, we only look at the second half of the list.
	3. If the word comes after “trivial” alphabetically, we only look at the first half of the list.
	Then, do the same again with the remaining list until you either find the word or the list is empty.
	
	You may know this technique from “Guess the Number” games. 
	In every step, we can cut the size of the list in half. In the worst case, the computer will then have to check $\log_{2}(50000) = 15.61\dots \implies 16$ words.

As we can intuitively see, both of these algorithms return the correct result.
Yet, *Binary Search* clearly needs to check a lot fewer words.

We would call *Linear Search* a **naive** algorithm.
In A&D we’re interested in finding algorithms that can solve problems quickly - so naive algorithms are usually off the table, even if they return the correct result.

## Exercises
There are usually no exercises on this topic.

# Induction
Induction is a proof method.
That means that it is a tool that we can use to show that a mathematical statement is correct.
A typical statement that we can prove with induction is
$$\sum_{i=1}^n i = \frac{n(n+1)}{2} \quad \text{ for all } n > 0$$Let's see how.
A proof by induction has two parts: the *base case*, and the *induction step*.

> Mathematical induction proves that we can climb as high as we like on a ladder, by proving that we can climb onto the bottom rung (the **basis**) and that from each rung we can climb up to the next one (the **step**).  
> *~ Concrete Mathematics*

### Base Case
In the base case, we prove the statement for the "smallest" case.
In our example, this would be the case where $n=1$, since the statement holds for all $n > 0$.

$$\sum_{i=1}^1 i = 1 = \frac{1(1 + 1)}{2}$$
This is usually easy to do.
Often the base case is $n=0$ or $n=1$, but it can also be something else.

### Induction Step
In the induction step, we prove that if the statement holds for some value $n = m$, it also holds for $n = m + 1$.
This might seem weird at first, but combining this with the base case we can prove that the statement holds for all cases:
The statement holds for $n = 1$ (base case).
Now, we choose $m = 1$.
Because the statement holds for $n = m = 1$, it also has to hold for $n = m + 1 = 2$ (induction step).
Now, we choose $m = 2$.
Then, the statement has to hold for $n = m + 1$, so for $n = 3$ as well (induction step).
...

We call the part where we assume that the statement holds for some value $m$ the *induction hypothesis*.

Let's formulate the induction hypothesis for our example:
$$\sum_{i=1}^m i = \frac{m(m+1)}{2} \quad \text{ for some } m$$

{% callout(class="info", title="Why do we use m here?") %}
Using a different variable for the induction hypothesis helps with clarity. We can distinguish the variable used for the general statement and the one used specifically for the proof. You can re-use $n$, but you need to be careful with your wording - so better just $m$ or $k$ instead.
{% end %}

Now, we can assume that this hypothesis holds, and must prove that the statement holds for $m+1$ too. 
To do this, we start with the term on the left hand side and set $n = m+1$.
We then transform the term until we reach the term on the right hand side (again with $n=m+1$):

$$
\begin{align*}
\sum_{i=1}^{m+1} i &= m+1 + \sum_{i=1}^m i \newline
&\stackrel{\mathclap{\tiny{I.H.}}}{=} m + 1 + \frac{m(m+1)}{2} \newline
&= \frac{2m + 2 + m^2+m}{2} \newline
&= \frac{(m+1)(m+2)}{2}
\end{align*}
$$
Notice that we used the induction hypothesis (shortened with I.H.) in the second step. 
It is important that you write down when you use the induction hypothesis.

This already proves our original statement, so we’re finished.

## Exercises
The exercise series will ask you to prove statements like the one above with induction. 
[I’ve made a template](https://xyquadrat.ch/and/resources/template_induction.pdf) that you can follow so that you don’t get points deducted for formal mistakes.

# Comparing algorithms (O-Notation)
## Theory
We’ve seen that there can be multiple algorithms that solve the same problem.
We would now like to be able to compare algorithms in a general way.

One possible approach would be to run an implementation of an algorithm on a pre-defined data set and compare the time it took for the program to finish.
This turns out to not be very helpful.
There are many things that can influence such a result:
- The chosen programming language (an implementation in C will likely be faster than one in Python)
- How optimized the implementation is (a 10x speedup can easily be achievable even with the same programming language and same basic algorithm)
- The specifications of the computers used
- Properties of the data set
- An algorithm could be fast for small data sets, but slow for big data sets

This makes such a comparison not useful for us in A&D.
Instead, we want to ignore specifics about the implementation and the machine the algorithm runs on as much as possible.

To accomplish this, we start by **counting operations** that are done instead of counting execution time.
One operation might be an addition, a multiplication or looking at a word in the dictionary.
This already makes our results more comparable.
A newer computer might do an addition more quickly than an older one, but they both do 1 addition / operation.

The second thing that we do is that we **only care about how the algorithm behaves with a very large input** (more precisely: asymptotically with the length of the input).
This allows us to ignore small differences. 
For example: an algorithm might have to do $n$ operations to set up a data structure and then has to do $n^{2}$ operations to actually compute the answer.
If $n$ is very large, the $n$ setup operations are few in comparison to the $n^{2}$ operations, so we can just say that the algorithm needs $n^{2}$ operations.
This also works for constant factors (we can treat $2n^{2}$ as if it was $n^{2}$).

The last measure we do is to **only compare the worst cases**. 
Sorting a list that is already sorted can be very fast even with an usually slow algorithm.
Because of that we only look at the case where the algorithms have to do the most operations to solve the problem.

### O-Notation
Putting together these three ideas, we now have a general way to compare algorithms.

To write this down, we use a notation called “O-Notation”.
If we have an algorithm that needs $g(n) = 3n^{2} + 4n + 100$ operations to solve a problem with input size $n$ in the worst case, we say that 
$$
g(n) = 3n^{2}+4n+100 \le \mathcal{O} (n^{2})
$$
because for very large inputs (= $n$ goes to infinity) the $4n + 100$ and the constant factor $3$ become irrelevantly small in comparison to the total result.

{% callout(class="info", title="What does that mean formally?") %}
A function $g(n)$ is in $\mathcal{O}(f(n))$ if $$
\lim_{ n \to \infty } \frac{g(n)}{f(n)} \in \mathbb{R}
$$so if the functions $g(n), f(n)$ differ by only a constant factor for very large $n$.
{% end %}

The general idea is that we only keep the parts of the term that are largest for a very large $n$. This gives us a sort of "hierarchy" (not official):
$$
\mathcal{O}(1) \le \mathcal{O}(\log n) \le \mathcal{O}(\sqrt{n}) \newline \le \mathcal{O}(n) \le \mathcal{O}(n \log n) \le \mathcal{O}(n^2) \newline \le \mathcal{O}(2^n) \le \mathcal{O}(n!)
$$

## Exercises
In the exercise series, you will have to prove that certain functions grow faster than others (which is equivalent to showing that $g(n) \le \mathcal{O}(f(n))$).
At the exam, it’s very unlikely that you have to prove this. Instead, you will have to say if a statement like $n^{2} + 500n \le \mathcal{O}(0.001n^{2})$ is true or false.