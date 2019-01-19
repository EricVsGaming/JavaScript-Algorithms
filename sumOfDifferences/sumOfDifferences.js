function sumOfDifferences(numArr) {
    let accumulator = 0; // Initialize an accumulator variable

    for (let i = Math.min(...numArr); i <= Math.max(...numArr); i++) { // Create a for-loop. starting int is the lowest number in numArr, last int is the highest int in numArr
        accumulator += i; // Add the current iteration value to the accumulator
    }

    return accumulator;
}

console.log(sumOfDifferences([5, 10]));
console.log(sumOfDifferences([7, 3]));