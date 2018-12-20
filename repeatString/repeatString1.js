function repeatString(str, num) {
    let accumulator = '';
    while(num > 0) {
        accumulator += str;
        num--;
    }
    return accumulator;
}

console.log(repeatString('This is a string.', 3));
console.log(repeatString('I need more coffee.', 15));