# addDigits

## Objective
    Write a function that takes in a number. Return the sum of the numbers given (Terrible explanation. See below :p)

## Example outputs
    addDigits(48) will return 12.
    addDigits(11) will return 2.

## How I solved it
    Write a function that takes in one argument (num).
    Parse num to a string, then split it into an Array (numArr).
    Create a reducer variable (reducer).
    Map through each item in numArr, parsing each item to an int.
    Use reduce(reducer) to add each int in numArr together. Return the Result.
