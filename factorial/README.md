# factorial

## Objective
    Write a function that takes in a number and returns the factorial. (ex. 5! = 1 * 2 * 3 * 4 * 5 = 120)

## Example outputs
    factorial(5) will return 120.
    factorial(4) will return 24.
    factorial(0) will return 1.
    factorial(10) will return 3628800.

## How I solved it
    Write a function that takes in one argument (num).
    Create an accumulator variable.
    Write a for loop that adds one to itself until it reaches num.
    With each iteration of the for loop, multiply the current iteration number with the accumulator.
    After the loop, return the accumulator.