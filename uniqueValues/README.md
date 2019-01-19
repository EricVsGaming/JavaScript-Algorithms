# uniqueValues

## Objective
    Write a function that takes in two arrays. Return an array of unique values between them.

## Example outputs
    uniqueValues([1, 'pig', 37], [1]) will return ['pig', 37].
    uniqueValues(['someRandomTestStr', 69, true, true], [69, 'someRandomTestStr', true, false]) will return [false].
    uniqueValues([1], [1]) will return [].

## How I solved it
    Write a function that takes in two arguments (arr1, arr2).
    Create an emptry array to hold unique values (uniques).
    Write a for loop that iterates through the items in arr1.
    Use includes() to check if an item exists elsewhere.
    If item exists in arr2 OR uniques, do nothing.
    If item exists nowhere else, use push() to add item to uniques.
    Repeat steps 3-6, but for arr2.
    Return uniques.