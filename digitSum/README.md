# digitSum

## Objective
    Write a function that takes in a string and return the sum of all digits in the string. Return 0 if no digits are present.

## Example outputs
    digitSum('2 oranges and 13 apples.') will return 15.
    digitSum('BananaMan') will return 0.

## How I solved it
    Write a function that takes in one argument (str).
    Use match() to check for any numbers and add them to an array (numArr).
    Initialize an accumulator variable (sum).
    Use forEach() to add each digit in numArr to sum.
    Return sum.
