+++
template = "blog/page.html"
title = "less - A random tip"
aliases = ["2022/12/08/tip-on-less"]
+++

To view files on the command line, you'll likely want to use `less`. Yesterday I had no internet on the train and didn't have anything to do; so I read through the manual of `less` (what a normal thing to do, right?). I found out a lot of interesting things `less` can do, but the most useful thing I didn't know about was the following: You can filter the lines of the output by pressing `&` and then entering a regular expression matching the lines you would like to see. This looks super handy if you're for example looking at a log file and want to see all lines containing "error" - just enter `&error`. In comparison to searching with `/`, it gives you more information at a glance. Quite wonderful.

Extra Tip: You can use `zless` to directly view compressed output without having to uncompress it first.
