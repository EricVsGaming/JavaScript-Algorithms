function firstDuplicate(numArr) {
    let numObj = {}; // Initialize an empty object

    for(let num of numArr) { // Iterate through each num in numArr
        if(numObj.hasOwnProperty(num)) { // If num exists in numObj, return num
            return num;
        } else { // If num doesn't exist in numObj, add num to numObj
            numObj[num] = num;
        }
    }

    return -1; // If no duplicates are found, return -1
}

console.log(firstDuplicate([1, 2, 3, 1, 4, 5, 5]));
console.log(firstDuplicate([1, 2, 3, 4, 5]));