# firstDuplicate

## Objective
    Write a function that takes in an array of numbers. Return the first duplicate in the array, or -1 if no duplicates are found.

## Example outputs
    firstDuplicate([1, 2, 3, 1, 4, 5, 5]) will return 1.
    firstDuplicate([1, 2, 3, 4, 5]) will return -1.

## How I solved it
    Write a function that takes in one argument (numArr).
    Initialize an empty object.
    Iterate through each num in numArr.
    For each num, check if num exists in the object. If it doesn't exist, add it to the object. If it does exist, that's the first duplicate.
    Return the first num that exists in the object.
    If no duplicates are found, return -1.
