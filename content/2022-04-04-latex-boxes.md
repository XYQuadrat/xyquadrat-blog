+++
template = "blog/page.html"
title = "Beautiful boxes in LaTeX with better tcolorbox defaults"
+++

In my opinion, the default boxes you get with `tcolorbox` aren't that good-looking:

![Screenshot of default boxes](/img/tcolorbox_default.png)

So I eventually decided to dive into the [extensive documentation](https://texdoc.org/serve/tcolorbox.pdf/0) and make use of the myriad of config options to find something that looks cleaner. Here's the result:

![Screenshot of adapted boxes](/img/tcolorbox_adapted.png)

The color on the left can be freely customized, of course. [In my (german) Analysis cheatsheets](https://github.com/XYQuadrat/eth-cheatsheets), I like to use the colorful version for important theorems, and have the grey version ready for less vital corollaries. 

![Screenshot of the Analysis cheatsheet](/img/analysis_boxes.png)

If you like the look, feel free to steal the code:

```latex
\usepackage[most]{tcolorbox}

\tcbset {
  base/.style={
    arc=0mm, 
    bottomtitle=0.5mm,
    boxrule=0mm,
    colbacktitle=black!10!white, 
    coltitle=black, 
    fonttitle=\bfseries, 
    left=2.5mm,
    leftrule=1mm,
    right=3.5mm,
    title={#1},
    toptitle=0.75mm, 
  }
}

\definecolor{brandblue}{rgb}{0.34, 0.7, 1}
\newtcolorbox{mainbox}[1]{
  colframe=brandblue, 
  base={#1}
}

\newtcolorbox{subbox}[1]{
  colframe=black!30!white,
  base={#1}
}
```

To then utilize the new style, use the following syntax:
```latex
% replace mainbox with subbox for the grey version
\begin{mainbox}{A short title} 
    Some exquisite prose you've written...
\end{mainbox}
```