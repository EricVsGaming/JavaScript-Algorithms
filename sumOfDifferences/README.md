# sumOfDifferences

## Objective
    Write a function that takes in an array of two numbers, then return the sum of the difference of the two numbers (inclusive).

## Example outputs
    sumOfDifferences([5, 10]) will return 45.
    sumOfDifferences([7, 3]) will return 25.

## How I solved it
    Write a function that takes in an array of two numbers (numArr).
    Create an accumulator variable with a value of 0.
    Write a for-loop. The starting int will be the return of Math.min applied to numArr, and the last int will be the return of Math.max applied to numArr.
    For each iteration, add the value of the current iteration to the accumulator.
    After the for-loop, return the accumulator.

    