# repeatString

## Objective
    Write a function that takes in a string and a number, then repeats the string number amount of times.

## Example outputs
    repeatString('This is a string.', 3) will return 'This is a string.This is a string.This is a string.'.
    repeatString('I need more coffee', 15) will return 'I need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffeeI need more coffee'.

## How I solved it 1
    Write a function that takes in two arguments (str and num).
    Create an accumulator variable to store the final string.
    Write a for loop that checks for num to be greater than 0.
    For every time num is greater than 0, add str to the accumulator and decrease num by 1.
    If num isn't greater than 0, return the accumulator.

## How I solved it 2
    Write a function that takes in two arguments (str and num).
    Return str.repeat(num)
    That's it... Exciting, right? :D