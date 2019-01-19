# missingNumber

## Objective
    Write a function that takes in an array of numbers and returns the missing number, from 0 to the highest number in the array.

## Example outputs
    missingNumber([0, 1, 4, 5, 6, 2, 3, 8, 9, 10]) will return 7.

## How I solved it
    Write a function that takes in one argument (numArr).
    Use sort() to sort numArr from smallest to largest.
    Loop through numArr, checking for when an index isn't equal to its value.
    Return the first index that isn't equal to its value.