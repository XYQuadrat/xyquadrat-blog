+++
title = "Computer Science @ ETH - Erstis FAQ"
date = 2022-07-06
updated = 2022-07-06

[extra]
toc = true
+++

### Do I need to visit the exercise sessions?

In principle, no. In practice, it is highly recommended that you visit all exercise sessions for all courses. 

### Do I have to do the bonus exercises?

Again, in principle, no. You can achieve a 6.0 in every subject (apart from Digital Design and Computer Architecture, where you have labs that account for 30% of your final grade) without doing any bonus exercises. That said, there is a correlation between having many bonus points and in total doing well at the exam; so do all bonus exercises.

### Do I need a tablet to take notes?

No, but it can be helpful for organization. Some people like digital notetaking, others don't. A tablet is definitely not necessary, but get one if you like the workflow.

### What operating system is best for our studies?

All major three operating systems (Windows, macOS, Linux derivatives) work well. (If you plan on using TempleOS or Haiku, you might encounter some difficulties though.) In the second semester you will have Digital Design and Computer Architecture Labs in which you use a (horrible) software called [Vivado](https://www.xilinx.com/products/design-tools/vivado.html) to program an FPGA. Vivado does not run on macOS, but you will work together with a partner, so if your partner has either Windows or Linux, this should not be a problem. Otherwise you can use a VM.

### Do I need to stick with my exercise group / TA?

No. It is in fact recommended that you attend a different exercise session if you struggle with your TA. You generally still have to hand in bonus exercises to the TA you originally chose, but otherwise you are more or less free to switch TAs at any time. A good TA can make a big difference for your understanding of the subjects, so don't put up with a bad TA for too long.

### Do I have to pay attention in "Introduction to Programming" if I can already program?

If you already are able to program in any mainstream language, "Introduction to Programming" (eProg) will be a lot easier. Still, do not take the course too lightly. There are various topic that can present a challenge even to experienced programmers (Java polymorphism subtleties, EBNF, ...). Thus, do the bonus exercises for sure and do not underestimate that you most likely need to put at least some time into learning the more advanced theory parts.

### Should I be doing coding projects in my free time?

You don't _need_ to do coding projects in your free time, but it can be a lot of fun! It might not help you much with your studies directly, but you will profit either way.

### I heard about these GESS courses. Do I have to take them already?

For those that don't know, GESS stands for "Geistes-, Sozial-, und Staatswissenschaften", and these courses are complementary subjects covering a wide range of topics that you can freely choose from. Generally you can ignore additional courses in Basisjahr (GESS are just one type of additional courses). You will eventually need to take GESS courses worth 6 credits, but most people do this starting in the third semster. If you are repeating, you can take one if you want to.

### What are the courses I have in the first year about?

*1. Semester*

- **Introduction to Programming:** You learn how to program in Java, including how object-oriented programming works. This most likely also includes drawing a swiss flag, something called "EBNF" and a guessing game that you can spend hours on optimizing.
- **Discrete Mathematics:** You learn how to prove stuff, why it is impossible to write a program that detects all malware, what rings and fields in mathematics are and how some applications of those (RSA, Error correcting codes) work. Throughout the course you will sometimes hear about the ominous "Chapter 6" which, once you get to it, turns out to be not very ominous at all.
- **Linear Algebra:** You learn about matrices and how to use them to solve systems of linear equations. Sounds straightforward, but it turns out there are many different approaches on how to do this efficiently.
- **Algorithms & Datastructures:** You learn how to design programs and datastructures that can solve problems efficiently, ranging from sorting over searching to graph problems. Likely includes tips on [how to steal stuff as efficiently as possible](https://en.wikipedia.org/wiki/Knapsack_problem).

*2.Semester*

- **Analysis I:** What some at the start believe to be only a repetition of what they already learned at Gymnasium turns out to be a rigorous approach to Analysis. You'll learn about sequences, series, functions, derivatives and integral - whilst in principle nothing new for most students, the attention to the "why?" can still make this rather challenging.
- **Algorithms & Probability:** The continuation of Algorithms & Datastructures, but now with added randomness. Learn how to [check if a number is probably prime](https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test), how to find duplicates quickly and something called "maxflow-mincut" (trust me, you'll like these coding exercises). Potentially you'll even get to know the legendary football player "Messaldo".
- **Parallel Programming:** You learn how to use all the cores in your system and the many problems that arise when trying to do so. Interestingly enough, in FS21 this lecture was actually streamed on Twitch due to the Covid-19 situation.
- **Digital Design and Computer Architecture:** Explore how a computer works under the hood and what hardware engineers do to make it go faster. You will also program an FPGA in the labs which will be part of your final grade. The professor, Onur Mutlu, calls this a "high-bandwidth lecture", and he's certainly not wrong.

### I'm a foreign student. Do you have recommendation on must-have apps in Switzerland/Zurich?
(Most of the next two sections was contributed by Lukas, and some more apps were suggested by Fabian. Thanks!)

* SBB Mobile - The main app for public transport in Switzerland.
* Covid Certificate - You can save & show your covid certificate here.
* SwissCovid - The Swiss Covid contact tracing app.
* AlertSwiss - Can send you warnings and other civil protection-related news.
* MeteoSwiss - Generally regarded as one of the best weather apps in Switzerland.
* Swisstopo - The absolute best maps for Switzerland if you want to go hiking, fly drones or just find out where something is. 
* TooGoodToGo - Want cheap good food? This is an app where you can buy leftovers from restaurants at a very reduced price.
* PubliBike - Rent bikes temporarily for a low price. [ETH also offers a special deal](https://ethz.ch/studierende/de/campus/transport-mobilitaet/velo.html) that gives you a year-long subscription for 70CHF where you can use the bikes to ride up to 30 minutes for free.

### I saw ETH also has a few apps. What are those for?

* EduApp - Used for clicker questions during lectures and to ask questions in some courses. Also includes a campus map and a not very helpful schedule.
* ETH Zurich - Used for checking the Mensa menu, primarily. Also has a campus map and a general ETH news feed.
* ASVZ - If you want to view and enroll in sports offerings from ASVZ, this is the app to do it.

### In Algorithms & Datastructures: The tests on Code Expert pass, but when I submit I get "Wrong Answer". Why?

Passing local test cases (these get run when you click the bottle) is not the same as getting full points when submitting. When you submit, your code is tested with hidden test cases, which are much more extensive than the local test cases and potentially include edge cases the local ones don't.

### I feel really overwhelmed, I'm in a bad spot mentally or I just don't know how to handle the load. What to do?

It's super important that you get help. You don't have to and shouldn't go through a difficult time alone. ETH offers various ways to support you. One great option is the [Nightline](https://www.nightline.ch). You can call or chat with them most of the time throughout the week, and it's fully anonymous. They aren't professionals though. If you feel professional help is needed, do not hesitate to contact the [Psychologische Beratungsstelle](https://www.pbs.uzh.ch/de.html). There are also further options listed on [this page](https://ethz.ch/studierende/de/beratung/studium-und-gesundheit/kontakte-gesundheit.html). Again, please take care of yourself and do not wait for too long until you seek external help & advice.

### Should I join Polyring?

If you have a blog, definitely! Polyring is a webring / community of blogs from ETH members. It will boost the visibility of your blog posts and might also encourage you to blog more. You can find more information about it at [https://polyring.ch](https://polyring.ch). The author of this FAQ may or may not be the creator of Polyring, which could indicate some bias.



# After Basispr??fung

Congratulations on making it this far. You should be proud of what you've accomplished!

### How do I best plan my remaining bachelor?
[This spreadsheet is very useful.](https://docs.google.com/spreadsheets/d/1SvVyaDaUeci1di4C1Z98w9pTXPFLlkdwPgNryHG7Fko/)

### What course is about what?
#### Basisjahrf??cher / First Year Courses
These are the courses that are usually done in the first year. They're split into two block exams. If you're reading this, you probably passed them.
From now on, all other courses have to be passed individually.

#### Grundlagenf??cher / Basic Courses
These are the courses that are usually done in the second year. You need to take all at some at some point during your Bachelor but you only have to pass seven out of the eight. If you don't pass all, you need to take an additional core subject instead.

#### Kernf??cher / Core Subjects
These are the courses that are usually done in the third year. You need to take at least four of them. You can also take more.

#### GESS (Geistes-, Sozial- und Staatswissenschaften)
These courses are meant to give insights into other sciences or even to learn new languages.
There's a huge selection of courses with various formats (presentations, end of semester exams, session exam, papers, ...).
Some language courses count too but the number of credits from such courses is limited to 3.
They are usually done in the second and third year and tend to need less effort than other courses.

#### Seminar
Seminars are courses where you have to read papers and present one of them. These courses usually only have around 25 spots so make sure to be fast if you want a spot.

#### Erg??nzungsf??cher / Minor courses
These courses are often courses from other departments which can also be relevant for CS students. Some of them are bachelor's courses. Some of them are master's courses. You can also take other (master) courses that are not on the list but they need to be accepted by the study administration. 

#### Wahlf??cher / Electives
These courses are CS courses which are not in any of the other categories. You don't have to take any of them but you can take some of them instead of taking more Kernf??cher or if you just see something interesting of course.

#### Bachelor Thesis
You need to have passed at least 5 Grundlagenf??cher to start writing your thesis, so it's usually done in the third year. The duration for completing the thesis is usually limited by 6 months.

### Which courses should I take when?
Nothing restricts you from taking anything a specific point.
The department recommends
- Grundlagen: 4th and 5th
- Kernf??cher:  5th and 6th
- Wahlf??cher: 4th - 6th
- Erg??nzung: 3rd - 6th
- GESS: 3rd - 6th
- Seminar: 3rd - 6th

You can also complete your degree in more or less semesters. The former is quite common and gives you the opportunity to plan your semesters a bit more flexibly and might make your studies less stressful. Note that the degree certificate does not mention the duration of your studies which means that your degree looks equivalent to one done in 6 semesters (maybe just with better grades?).

Other things to mention:
- Some take "Introduction to Machine Learning" already in the 4th semester, because for your thesis it is nice to have known that already (more than 80% of thesis have ML in them) and to shovel free your last semester i.e. to do less ECTS and have more time for the thesis.
- Wahlf??cher are mostly just replacements for Kernf??cher
- Seminar spots will be gone quickly after enrollment opens - so doing it in the 6th semester can be a bit risky in the sense that it's problematic if you don't get a spot.

### How do I know what course to pick?
Search for the courses in the right category and see what you like. It's always a good idea is to find someone who took that course already or knows more about it. There's also [a database with reviews from courses](https://n.ethz.ch/~lteufelbe/coursereview/) built by a few fellow students which you can consult.

### How do courses get graded?
The most basic way should be written on VVZ.
It should usually say something like "Sessionspr??fung", "Semesterendpr??fung" or "benotete Semesterleistung" - the latter can mean anything from Midterms to writing essays a few times and doing other stuff. Sometimes they write it more explicitly but otherwise it's best to ask someone that took the course, check the course website if available or ask the professor directly. In addition, the professors usually will explain how grading is done in the first two weeks of the semester where you are still able to remove your course enrollment.

### Where can I see what course is part of what Category?
If you are unsure which category a course belongs to, check under "Angeboten in". If you theoretically can't take a course but really want to, asking Denise Spicher is the way to go. For example you can take some master courses as Erg??nzung, but that will have to be accepted by the study administration. 

### How to find courses?
Go to VVZ and select Bachelorstudium ??? Informatik ??? Informatik Bachelor ??? [Category].

### When do I have to start worrying about master?
Sometime at the end of your last Bachelor semester, as you need to decide on Major and Minors.

### Is the pain and worrying finally over?
Yesn't. There will be hard subjects later on too (NumCS says hello!). And ETH can still exmatriculate you - but the passing rate of the remaining semesters is much higher. 
To be precise: 
You need to pass 7 out 8 Grundlagenf??cher. So if you fail two of them twice, you will not be able to get your Bachelor. Theoretically this is similar with other categories too but you have way more subjects that you can pass, so this shouldn't be a problem in any way.