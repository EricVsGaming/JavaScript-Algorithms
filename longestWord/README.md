# longestWord

## Objective
    Write a function that takes in a string and returns the longest word in the string.

## Example outputs
    longestWord('This is a string.') will return 'string'.
    longestWord('This is a string with a bunch of numbers. 586585575765765') will return 'numbers'.
    longestWord('Underscores are ignored, too. _____________________') will return 'Underscores'.

## How I solved it
    Write a function that takes in one argument (str).
    Split str into an array and store it in a variable (formattedArr).
    Map through each word in formattedArr to remove unwanted characters.
    Sort formattedArr based on the length of each word.
    Return the longest word, which is always at index 0.