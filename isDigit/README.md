# isDigit

## Objective
    Write a function that takes in a string and returns if it is a digit or not (digit being a number 0-9).

## Example outputs
    isdigit('0') will return true.
    isDigit('9') will return true.
    isDigit('b') will return false.

## How I solved it
    Write a function that takes in one argument (str).
    Create a variable that stores each possible digit in an array.
    Return the result of using includes() to check if str exists in the array.