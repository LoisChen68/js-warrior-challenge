# Simple JS Challenge: Warrior Class

## Introduction

This is a small JS exercise for you to practice reading JS challenges and
solving them via automated tests.

You will be writing a simple `Warrior` class in JavaScript to ensure that it
meets all of the following specifications.

## Challenge Specification

As part of this challenge, you will need to complete the `Warrior` class in
`warrior.js`.

Every Warrior has three attributes:
- name, type `str`
- health, type `int`, default `100`
- mana, type `int`, default `100`

We should be able to create a Warrior by specifying a name, i.e.

```
const warrior = new Warrior("Victoria")
```

The warrior is able to `heal`, `castMagic`, and `takeDamage` when fighting
enemies. We need to be able to check if the warrior is still alive with
`isAlive`. **You need to implement all these functions as part of this challenge**.

#### heal

Warriors can heal themselves. The `heal` function takes in an integer `amount` and
regains the warrior's `health` by the given amount.

Note: A warrior's `health` cannot exceed 100.


#### takeDamage

Warriors will takeDamage when fighting enemies. The `takeDamage` function takes
in an integer `damage` and reduces the warrior's `health` by the given amount.

Note: A warrior's `health` cannot be lower than 0.


#### castMagic

Warriors can cast magic when fighting enemies. The `castMagic` function takes
in an integer `manaCost`, reduces the warrior's `mana` by the given amount,
and returns the damage dealt.

If casting of magic is successful, the damage dealt is **two times the `manaCost`**.
\For example, if `manaCost` is 15, the damage is 30.

If the warrior has sufficient mana to cast the magic, the warrior's mana will reduce
by the given `manaCost`. This function needs to return the damage dealt.

If the warrior has insufficient mana to cast the magic, the warrior's mana
**will not be reduced**. The damage dealt in this case is 0.

Note: A warrior's `mana` cannot be lower than 0.

#### isAlive

Warriors can be dead or alive.

If a warrior's health is 0, then `isAlive` should return `false`.
Otherwise, `isAlive` should return `true`.


## Completing the Challenge

1. First, fork this repository on GitHub to your own account
2. Clone your forked repository to your computer
3. Next, install the dependencies using `npm install --save-dev`
4. Run the test suite, and all test cases should fail: `npx jest`
5. Start implementing all of the functions as specified above

Once you have completed all the functions, you should run the test suite with
`npx jest` to verify that all your functions are working correctly.

Once all tests have passed, send a Pull Request to this folder for final
verification.


## Warnings

You are only allowed to edit `warrior.js`. Editing any of other files is
considered to be failing the challenge.

Feel free to read any other files in this project.
