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

The biggest difference between `.forEach` and `.map` is that `.forEach` will override the original array. Where as `.map` will create a new array to hold the results of the function.

2. What is the difference between a function and a method?

The differences between a Function and a Method would be to first start with how a function is a piece of code that is called by name. It can be passed data to operate on. And can optionally return data. All data that is passed to a function is explicitly passed. Where as with a method, it is a piece of code that is called by a name in association to an object. In most cases, it is identical to a function except that a method is implicitly passed the object on which it was called. Additionally a method is able to operate on data that is onctained within the class. 

3. What is closure?

Closure is a feature in Javascript. It enables an inner function to have access to the outer (enclosing) function's variables through a scope chain.
The closure will have three scope chains generally:
- It has access to its own scope and the variables defined between the curly brackets.
- It has access to the outer function's variables.
- It has access to the global variables as well. 

4. Describe the four rules of the 'this' keyword.

The four rules surrounding the `This` keyword all operate in the means of answering: What is the calling object?

You can approach it by breaking it into topics for the rules: 

-1. Is the function called by new?
-2. Is the function called by call(), apply(), or bind()?
-3. Is the function called as a method, ie: obj.func()?
-4. Is the function called in the global scope?
        -If strict mode is enabled, return undefined.
        -Otherwise, return the global object, ie: window.

To expand on rule -1. Whenever a function is contained in the global scope, the value of `This` inside of that function will be the window object.
For rule -2. Whenever a function is called by a preceding dot, the object before that dot is `This`.
With rule -3. Whenever a constructor function is used, `This` refers to the object that is created and returned by the constructor function.
Lastly rule -4. Whenever JavaScript’s `.call` or `.apply` method is used, `This` becomes explicitly defined.

<!-- Spoke with PM Andrew, he clarified that my answer needs to talk about the binding types and 4 uses of `This` in addition to the above portion  -->

The 4 types of `This` bindings are:

(1) Explicit Binding - These bindings explicity bind `This` to an object, and override the implicit binding used. 
                            Explicit bindings can be made with `.call`, `.apply`, or `.bind`. 

(2) Implicit Binding - These bindings implicity bind `This` to an object directly, based on how `This` is stored. 
                            If it is stored within an object, then `This` is implicitly bound to that objecte. 
                            Where as if an object is invoked, `This` will be bound implicitly to the 
                            object directly to the left of the keywod. 

(3) Global / Window - If no binding is applied to `This`, then it will assume the `Global Binding` of the Javascript window,
                             which is the object that contains all of the page content. 

(4) New - when an object is constructed, `This` will be bound to the new object, rather than the object constructing the new object. 

5. Why do we need super() in an extended class?

Utilizing the `Super()` in an extended class case is a means of streamlining the inheritance process. It is used to tell a Parent's constructor to be concerned with a Child's attributes. Then it abstracts away the `Object.create(this,class)` syntax. The changes occur by making the Child class act as an extension of the Parent class + replacing `this.name = name;` with `super(name);`

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


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
