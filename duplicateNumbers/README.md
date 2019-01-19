# duplicateNumbers

## Objective
    Write a function that takes in an array of numbers and returns true if it contains a duplicate value, false if it doesn't.

## Example outputs
    isDuplicate([0, 1, 4, 5, 6, 2, 3, 7, 8, 9, 10]) will return false.
    isDuplicate([0, 1, 4, 4, 5, 6, 2, 3, 7, 8, 9, 10]) will return true.

## How I solved it
    Write a function that takes in one argument (numArr).
    Use sort() to sort numArr from smallest to largest.
    Loop through numArr, checking for when an index isn't equal to its value.
    Return the value of the first index that isn't equal to its value.