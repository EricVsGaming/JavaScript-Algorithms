function reverseString(str) {
    let reversedStr = ''; // Create variable to store the result
    for(let i = 0; i < str.length; i++) { // Write a for loop that iterates through each letter in str
        reversedStr = str[i] + reversedStr; // Add the current letter to the front of the storage string
    }
    return reversedStr;
}

console.log(reverseString('Some String'));
console.log(reverseString('JavaScript'));