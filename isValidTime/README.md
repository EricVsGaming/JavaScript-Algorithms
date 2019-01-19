# isValidTime

## Objective
    Write a function that takes in a string and returns if it is a valid time or not.

## Example outputs
    isValidTime('20:00') will return false.
    isValidTime('10:60') will return false.
    isValidTime('13:00') will return true.
    isValidTime('00:59') will return true.

## How I solved it
    Write a function that takes in one argument (time).
    Split time into an array at the colon. ('22:50' becomes ['22', '50']).
    If the first item in the array is larger than 23 OR the second item in arr is larger than 59, return false.
    Else return true.