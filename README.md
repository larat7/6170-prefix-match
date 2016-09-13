# Project 1: Prefix Match
Due at noon on 09/19/2016 | [Submission Form](https://goo.gl/forms/eE0TId5Yu9MVXJti2)

## Overview
[Autocomplete](https://en.wikipedia.org/wiki/Autocomplete) is a useful feature that helps users fill out forms. For example, typing the first few letters of a country (e.g. “Un”) shows a drop-down list of all country names beginning with the typed letters (e.g. “United States”, “United Kingdom”). 

In this assignment, you will design and implement an abstract data type called a prefix tree (also known as a [trie](https://en.wikipedia.org/wiki/Trie)) which is used for prefix-based retrieval operations. Alongside the staff-provided HTML template and dictionary, your code will form the functional core of a autocompletion-enabled search form for selecting from a set of the most common English words.

## Objectives
This assignment will give you practice applying the fundamental programming ideas you have been learning: 

1. List functionals (map, filter and reduce) and iterators (each) for obtaining abstract and elegant iteration (in this case for tree traversal);
2. Closures to structure the namespace and encapsulate data representation.

It will also, of course, be an opportunity to become familiar with the core features and idioms of JavaScript, and to demonstrate your skills in software design and implementation.

## Specification

The only functionality requirement is that, after loading the page in a browser, a user may begin typing a word into the text field and for each letter input a drop-down list is displayed showing at most ten words from the provided dictionary, sorted lexicographically, that contain the input word as a prefix. If no words match then no words should be displayed. Your specific task is to create a JavaScript module containing an implementation of a trie data structure to be used as the foundation of the autocomplete functionality.

We've provided you with an HTML template and some starter code that you will use to link your trie to the user-facing autocomplete functionality (a drop-down text box).

In line with the objectives described in the previous section, we will also be considering the following aspects of your solution:

### Data Encapsulation

Closures let you encapsulate private state within a function while exporting a judiciously selected set of public methods and state. In implementing any abstract data type, it is important to decide which components of your implementation are useful to a user of the module, and which are not; the former should be publicly accessible, while the latter should be [hidden](https://en.wikipedia.org/wiki/Information_hiding). You should design your API so that the only public methods exposed by your trie are addWord(word) and autocomplete(prefix).

### Use of Functionals

This project provides many opportunities to use functional programming idioms as taught in class. To encourage you to use functionals, for this assignment you should NOT use a [for-loop](http://www.w3schools.com/js/js_loop_for.asp). You must also include at least one correct usage of each of the following functionals: map, filter, and reduce. For example, you should not use a forEach and accumulator variable where a reduce should be used, or a map with an if-statement where a map and filter should be used. For information on common misuses of functionals, see below.

### Testing

You should unit test your implementation of the data structure, providing at least five test cases. You will use the [Mocha](https://mochajs.org/) test framework with the [Chai](http://chaijs.com/) assertion library to write these tests. You can run the tests by opening the file tests.html in your browser and you should write your tests in tests.js.

Note that this project requires client-side code only. That is, you should only be writing HTML and JavaScript files that run directly in your web browser. There is no need to host the web page anywhere.

## Deliverables

The deliverables for this assignment are as follows:

- Your trie implementation
- Your unit tests (which must pass)

## Grading

The assignment will be graded as follows:
- Functionality (30 points). Does the submission meet the functionality requirements described above?
- Data Encapsulation and Namespacing (30 points). Does your code prevent exposure of implementation using the techniques described in class? Are the components of your code encapsulated within their own scope? Is the global namespace free of unnecessary object references? Are your modules in separate JavaScript files and imported appropriately?
- Functional Idioms (20 points). Do you leverage the functional, recursive idioms described in class for tree traversal operations instead of using for-loops or while-loops?
- Unit Tests and Code Style (20 points). Are there nontrivial, passing unit tests that test the specification? Is your code clean, readable, and commented? Are your exported methods documented appropriately?
 
Note that you cannot receive credit for the other parts if your code does not have basic functionality. Also, it is not enough to simply create a working implementation; your trie must be well designed and implemented pursuant to the best practices and techniques outlined in class. Needless to say, since the construction of the trie is the substance of this assignment, you may not use code you find online as part of the trie implementation.

## Hints

For general information about tries, see the [Wikipedia page](https://en.wikipedia.org/wiki/Trie).

A Java implementation of a trie data structure from a popular undergraduate algorithms textbook can be found [here](http://algs4.cs.princeton.edu/52trie/TrieST.java.html).

A web search will provide many trie implementations of varying quality in various languages. Use those to get an idea of the data structure, but make sure to not lean on any one too much for reference. Remember, the focus of this assignment is not simply to create a working implementation.

[Common Misuses of Functionals](https://github.com/hariharsubramanyam/common_misuses_of_functionals)

For each level in the trie, you will need to apply a particular function to all of a node's children, then combine the result sets of those operations into a single result set. Consider the particular functionals described in class, and figure out whether this computation matches a pattern we’ve discussed.
