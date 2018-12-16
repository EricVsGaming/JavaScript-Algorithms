# palindrome

## Objective
    Write a function that takes in a string and returns true if it's a palindrome, false if it's not..

## Example outputs
    palindrome('racecar') will return true.
    palindrome('RacEcAr') will return true.
    palindrome('r*ac_e-c.a(r') will return true.
    palindrome('phuoihipgiug') will return false.

## How I solved it
    Write a function that takes in one argument (str).
    Create a variable to store the string without any special characters or underscores.
    Use a regular expression to remove the special characters.
    Check if the string is the same forward as it is backwards (convert to array, reverse array, join array back to a string, then test).
    If the check is true, return true, else return false.