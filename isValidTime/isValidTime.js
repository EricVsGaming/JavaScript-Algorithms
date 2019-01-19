function isValidTime(time) {
    let timeArr = time.split(':');

    if (Number(timeArr[0]) > 23 || Number(timeArr[1]) > 59) {
        return false;
    }
    else {
        return true; 
    }
}

console.log(isValidTime('24:00'));
console.log(isValidTime('00:60'));
console.log(isValidTime('23:00'));
console.log(isValidTime('00:59'));