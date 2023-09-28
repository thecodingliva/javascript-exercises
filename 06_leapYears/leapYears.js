const leapYears = function(i) {
    let leapYears = i;
    if ( i%4 == 0 && i %100 != 0 ||  i %400 == 0) {
        return true;
    } else {
        return false
};
}

// Do not edit below this line
module.exports = leapYears;
