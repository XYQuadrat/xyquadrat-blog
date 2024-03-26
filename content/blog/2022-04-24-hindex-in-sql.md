+++
template = "blog/page.html"
title = "Implementing h-index in SQL"
aliases = ["2022/04/24/hindex-in-sql.html"]

[extra]
math = true
+++

The [h-index](https://en.wikipedia.org/wiki/H-index) is an easy-to-calculate metric that measures the impact of the publications of an author. The easiest definition is that it is the largest number `h` such that the author has `h` published papers with at least `h` citations. It's mostly used in the scientific community, but it can also be useful in other contexts. Recently I was asked to implement a h-index calculation functionality in a project of mine (hi @niko, if you're reading this), and since I keep the relevant data in an SQLite database, I thought that it'd be convenient to use SQL to calculate the h-index.

A useful restatement of the definition of the h-index is $$h =\max\lbrace i \in \mathbb{N}: f(i) \ge i \rbrace$$
where $f(i)$ is the number of citations of the paper with index $i$, which allowed me to come up with the following solution:

```sql
SELECT MAX(Ranking)
FROM (SELECT Author, Citations, ROW_NUMBER() OVER (PARTITION BY Author ORDER BY Citations DESC) AS Ranking
    FROM CitationData)
WHERE Ranking <= Score
GROUP BY Author
ORDER BY MAX(Ranking) DESC
```

A few things are worth pointing out:
- You should use `ROW_NUMBER()` and not `RANK()`, because with `RANK()` having multiple items with the same number of citations would lead to a wrong result.
- This is SQLite-compatible, but I'm quite certain that it should be trivial to use in another SQL dialect.
- Probably this isn't the most efficient solution, but at least it's one that is easy to understand.

I hope you found this useful. Feel free to send me feedback [via mail](mailto:mail@xyquadrat.ch).