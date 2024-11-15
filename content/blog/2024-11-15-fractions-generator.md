+++
template = "blog/page.html"
title = "Visualizing fractions with vanilla JavaScript"
+++

Two years ago a friend of mine that worked as a math teacher reached out and asked how she could create visualizations of fractions similar to this example which is often found in school books:

![](/img/fractions-example.gif)

For the average person, this would not be easily doable.
Clearly, using a vector drawing program such as Inkscape or Adobe Illustrator would work, but would take significant manual labor for making variations.
Since I didn't know what tool to recommend to her, I simply wrote a small website that could generate the desired visualizations.
I used vanilla JavaScript and `canvas`, which despite being "boring" technology was super easy to work with, despite not knowing the API beforehand.
Today, I thought that it would be cool to integrate this tool in my main website, which I now did! 
You can find the tool [here](/fractions), along with [the (unobfuscated, lightly commented) source code](/fractions/fractions.js).
If you know someone that would find this useful, feel free to share it with them.

Here's a screenshot if you're too lazy to click the link:

![](/img/fractions-my-tool.png)

