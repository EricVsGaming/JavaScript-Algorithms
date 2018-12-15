function factorial(num) {
    let accumulator = 1; // Creat accumulator
    for (let i = 1; i <= num; i++) { // Increase i by 1 each iteration until it is equal to num
        accumulator *= i; // Multiply the interation number with the accumulator
    }
    return accumulator;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(10));