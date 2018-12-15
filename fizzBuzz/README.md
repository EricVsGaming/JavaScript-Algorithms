# fizzBuzz

## Objective
    Write a function that returns "fizz" if a given number is divisible by 3, returns "buzz" if the number is divisible by 5, returns "fizzbuzz" if the number is divisible by 3 AND 5, or return "" in any other case.

## Example outputs
    fizzBuzz(3) will return "fizz".
    fizzBuzz(5) will return "buzz".
    fizzBuzz(15) will return "fizzbuzz".
    fizzBuzz(4) will return "".

## How I solved it
    Write a function that takes in one argument (num).
    Check if num is evenly divisible by both 3 and 5 FIRST. If so, return "fizzbuzz".
    Then check if num is evenly divisible by 3. If so, return "fizz".
    Then check if num is evenly divisible by 5. If so, return "buzz".
    If all those fail, return an empty string.