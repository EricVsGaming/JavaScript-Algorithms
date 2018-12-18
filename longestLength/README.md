# longestLength

## Objective
    Write a function that takes in a string and returns the length of the longest word.

## Example outputs
    longestLength('Plz hire me I need money') will return 5.
    longestLength('iujnoh uniuniuni ibun') will return 9.

## How I solved it 1
    Write a function that takes in one argument (str).
    Create a variable that stores each word in str into an array using split().
    Use sort() to sort the words from longest to shortest.
    Return the length of the first item in the array.

## How I solved it 2
    Write a function that takes in one argument (str).
    Create a variable that stores each word in str into an array using split().
    Create a variable that holds the current longest word (start as empty string).
    Write a for loop that iterates through each word in the array.
    For each iteration, use an if to check if the length of the current word is longer than the length of the current longest word, if so, set the current word to the longest variable.
    After the for loop, return the longest word.