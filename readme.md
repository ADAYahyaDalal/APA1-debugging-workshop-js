# Debugging Workshop 🐛

## 🧰 Installation

In this codespace, you should have the following applications installed:

1. `node`. This is the JavaScript runtime we'll use to execute the JavaScript programs in this workshop. Check node is installed by running `node --version` in your terminal and check this command returns the current node version.

## Background

The term "bug" in computing has an interesting origin. In 1947, Grace Hopper and her team at Harvard were working on the Mark II computer when they encountered a malfunction. Upon investigation, they discovered a moth trapped in a relay, causing the issue. This incident is often cited as the origin of the term "bug" in computer science, although the term had been used in engineering contexts before this event.

## 📖 Key terms

A bug is a flaw or error in a computer program that causes it to produce an incorrect or unexpected result, or to behave in unintended ways. More specifically, a bug occurs when there is a discrepancy between:

- The expected behaviour: How the program is intended or specified to function under certain conditions.
- The actual behaviour: How the program actually performs when those conditions are met.

This discrepancy can arise in various ways, such as:

- Incorrect output or calculations
- Unexpected program termination
- Unresponsive or frozen applications
- Security vulnerabilities
- Performance issues

> 🔑 Debugging is the process of identifying, analysing, and resolving these discrepancies to align the actual behaviour of the program with its expected behaviour.

## A Brief Guide to Debugging

Effective debugging involves several key steps:

1. Establish or clarify the **expected behaviour** of your program.
   For example, if you call a function with a certain set of inputs, we should expect to get back a particular return value.
2. Call the function/program you want to debug.
3. Identify the difference between the **expected behaviour** and the actual behaviour (what happens when you actually run the code).
4. Use various strategies (see below) to find out why the bug is occurring.
5. Fix the bug and verify that the program now works as expected.

A more in-depth [optional debugging guide](./debugging-guide.md) is available for those wanting to practice their use of the VSCode debugger.

## 🧭 Debugging strategies

### 🖨️ Printing to the console

In most programming languages, we can print or log variables to check if they're being updated with the correct values during program execution. In JavaScript, for example, we can use `console.log` to log variables to the console, giving us a better idea of what's happening inside our program.

### 👣 Step Through Execution

Stepping through code, also known as "playing computer," is a technique where you step through the execution of a program line by line to check the values in memory as the program runs. You can do this manually using a piece of paper or use tools like [Python Tutor](https://pythontutor.com/visualize.html#mode=edit) for visualisation.

### 💡 Rubber Duck Debugging

This technique involves explaining your code, line by line, to an inanimate object (traditionally a rubber duck). By verbalizing your code, you often spot the issue yourself. This method can be surprisingly effective in helping you understand your own code better and identify logical errors.

## 🎢 Running order

We recommend you tackle these problems in the following order. The problems will generally increase in difficulty so it's important you're comfortable with the earlier problems before you start tackling the later problems.

### 🍵 Warm up

As a group, you should check you understand the task by going through some problems together and asking questions. We recommend you debug the following problems together:

1. `square`
2. `increment`
3. `capitalise`

### 🍎 Core

4. `percentage-change`
5. `pence-to-pounds`
6. `12-hour-clock`
7. `convert-temperature`
8. `times-table`
9. `rotate-angle`
10. `right-angled-triangle`
11. `fizz-buzz`
12. `sum-digits`
13. `count-char`

### 🧠 Challenge

14. `multiple-of-five`
15. `find-century`
16. `is-valid-triangle`
17. `text-in-div`
19. `is-palindrome`
19. `find-closing-parenthesis`
