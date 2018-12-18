function longestLength(str) {
    arr = str.split(' '); // Split the string into an array of words
    arr.sort(function(a, b) {return b.length - a.length}); // Sort the words from longest to shortest
    return arr[0].length; // Return the length of the first word in the array
}

console.log(longestLength('Plz hire me I need money'));
console.log(longestLength('iujnoh uniuniuni ibun'));