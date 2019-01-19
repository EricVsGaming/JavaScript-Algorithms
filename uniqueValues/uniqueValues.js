function uniqueValues(arr1, arr2) {
    let uniques = [];

    for(let item of arr1) {
        if(!arr2.includes(item) && !uniques.includes(item)) {
            uniques.push(item);
        }
    }

    for(let item of arr2) {
        if(!arr1.includes(item) && !uniques.includes(item)) {
            uniques.push(item);
        }
    }

    return uniques;
}

console.log(uniqueValues([1, 'pig', 37], [1]));
console.log(uniqueValues(['someRandomTestStr', 69, true, true], [69, 'someRandomTestStr', true, false]));
console.log(uniqueValues([1], [1]));