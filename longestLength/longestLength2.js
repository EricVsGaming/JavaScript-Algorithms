function longestLength(str) {
    let arr = str.split(' '); // Split str into an array of words
    let longest = ''; // Initialize a variable to hold the longest word
    for (let word of arr) { // Iterate through each word in arr
        if (word.length > longest.length) { // If current word is longer than longest word, set current word to longest
            longest = word;
        }
    }

    return longest.length;
}





console.log(longestLength('Plz hire me I need money'));
console.log(longestLength('iujnoh uniuniuni ibun'));