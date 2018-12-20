# titleCase

## Objective
    Write a function that takes in a string and returns a title cased string.

## Example outputs
    titleCase('This is a string.') will return 'This Is A S tring.'

## How I solved it
    Write a function that takes in one argument (str).
    Use split() to turn the string into an array and store the array in a variable.
    Update the array variable using map() to apply some logic to each word.
    For each word, set the first letter to uppercase, then use slice() to add the rest of the word back onto the capitalized letter.
    Use join() to turn the array back into a string and return it.