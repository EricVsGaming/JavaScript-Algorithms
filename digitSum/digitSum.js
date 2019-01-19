function digitSum(str) {
    let numArr = str.match(/\d+/g) || []; // Add all numbers to an array. If no numbers are found, add an empty array.
    let sum = 0; // Initialize an accumulator

    numArr.forEach(num => {
        sum += Number(num) // For each item in the array, add its value to the accumulator
    });

    return sum; // Return the accumulator
}

console.log(digitSum('2 oranges and 13 apples.'));
console.log(digitSum('BananaMan'));