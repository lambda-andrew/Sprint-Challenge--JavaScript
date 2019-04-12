# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

.forEach uses function on array, mutates array
.map uses function on array, but creates new array


2. What is the difference between a function and a method?

method is a function on an object

3. What is closure?

a closure is where an inner function has acces to the outer functions variables

4. Describe the four rules of the 'this' keyword.

* 1. Window Binding
<!-- Default binding refers to how this is the global context whenever a function is invoked without any of these other rules. If we aren't using a dot and we aren't using call(), apply(), or bind(), our this will be our global object.

Your global context depends on where you're working. If you're in the browser, this will be the window. When programming in strict mode, the global context is undefined. -->

* 2. Implicit Binding

<!-- Whatever to the left of the '.' is what 'this' is referring to -->



* 3. New Binding

<!-- use new to invoke constructor function. new keyword in front of constructor function will create new object.  -->


* 4. Explicit Binding

<!-- call apply bind

The first parameter in call() method sets the "this" value, which is the object, on which the function is invoked upon. In this case, it's the "obj" object above.
The rest of the parameters are the arguments to the actual function.


Similarly to call() method the first parameter in apply() method sets the "this" value 
which is the object upon which the function is invoked. In this case it's the "obj" object
above. The only difference of apply() with the call() method is that the second parameter
of the apply() method accepts the arguments to the actual function as an array.



The first parameter to the bind() method sets the value of "this" in the 
target function when the bound function is called. Please note that the 
value for first parameter is ignored if the bound function is constructed
using the "new" operator.
The rest of the parameters following the first parameter in bind() 
method are passed as arguments which are prepended to the arguments
 provided to the bound function when invoking the target function.
 -->





5. Why do we need super() in an extended class?

<!-- super is the special sauce. Required with extended class. Super obstracts away funky syntaxt we needed with prototype.  -->

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Clone your OWN version of Repo.
- [ ] Create a new Branch on the clone: `git checkout -b <firstName-lastName>`.
- [ ] Push your new branch: `git push -u origin firstname-lastname`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project `git push`.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: `git push`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master.
- [ ] Add your Project Manager as a Reviewer on the Pull-request



## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!






