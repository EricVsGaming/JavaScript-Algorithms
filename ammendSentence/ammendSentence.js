function ammendSentence(str) {
    let strArr = str.split(''); // Create an array that contains each char in str

    strArr = strArr.map(char => { // Map through each char in strArr
        if (char === char.toUpperCase()) { // Check if the current char is upper case
            return ' ' + char.toLowerCase(); // If char is upper case, return the lower case char with a space
        } else {
            return char; // If chat isn't upper case, return char
        }
    });

    return strArr.join(''); // Join strArr back together and return it
}

console.log(ammendSentence('PlzHireMeINeedMoney'));