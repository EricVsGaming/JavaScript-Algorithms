function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) { // If num is divisible by 3 and 5, return fizzbuzz
        return "fizzbuzz";
    }
    else if (num % 3 === 0) { // If num is only divisible by 3, return fizz
        return "fizz";
    }
    else if (num % 5 === 0) { // If num is only divisible by 5, return buzz
        return "buzz";
    } else { // In any other case, return an empty string
        return "";
    }
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(4));