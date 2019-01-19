function isDuplicate(numArr) {
    numArr = numArr.sort(function(a, b) { // Sort numArr from smallest to largest
        return a - b;
    });
    console.log(numArr)
    for(let index in numArr) { // Loop through index 0 to max interger in numArr
        if(numArr[index] != index) { // If an index doesn't equal its value, the duplicate number is the index's value.
            return true;
        }
    }

    return false;
}

console.log(isDuplicate([0, 1, 4, 5, 6, 2, 3, 7, 8, 9, 10]));
console.log(isDuplicate([0, 1, 4, 4, 5, 6, 2, 3, 7, 8, 9, 10]));