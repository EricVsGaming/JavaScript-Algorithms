# ammendSentence

## Objective
    Write a function which takes in a string that has no spaces, but new words are denoted with upper case characters, and return a lower case, spaced out string.

## Example outputs
    ammendSentence('PlzHireMeINeedMoney') will return 'plz hire me i need money'.

## How I solved it
    Write a function that takes in one argument (str).
    Create an array and use split() to store each char in str into the array (strArr).
    map() through each char in the array.
    If the current char is uppercase, return a space with the char lowercased.
    If the current char isn't uppercase, return the char.
    After the whole array is mapped through, use join() to return the joined array.
