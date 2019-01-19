function longestWord(str) {
    let formattedArr = str.split(' '); // Split str into an array

    formattedArr = formattedArr.map(word => word.replace(/[\W_0-9]/gi, '')); // Map through each word, removing unwanted characters

    return (formattedArr.sort(function(a, b){
        return b.length - a.length // Sort based on word length
    }))[0]; // Return the longest word in the array, which is sorted to position 0
}

console.log(longestWord('This is a string.'));
console.log(longestWord('This is a string with a bunch of numbers. 586585575765765'));
console.log(longestWord('Underscores are ignored, too. _____________________'));