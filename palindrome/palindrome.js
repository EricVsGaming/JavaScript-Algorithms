function palindrome(str) {
    let newStr = str.toLowerCase().replace( /[\W_]/g, ''); // Duplicate str, but without caps or special cases
    if (newStr.split('').reverse().join('') === newStr) { // If the str is equal to itself backward...
        return true;
    } else {
        console.log(newStr.split('').reverse().join(''))
        return false;
    }
}

console.log(palindrome('racecar'));
console.log(palindrome('RacEcAr'));
console.log(palindrome('r*ac_e-c.a(r'));
console.log(palindrome('phuoihipgiug'));