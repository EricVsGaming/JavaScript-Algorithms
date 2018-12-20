function titleCase(str) {
    let arr = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)); // Split str into an array, then map over each word, making the first letter uppercase and adding the rest of the word to the uppercase letter
    return arr.join(' ') // Return the full sentence.
}



console.log(titleCase('This is a test string.'));