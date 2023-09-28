const removeFromArray = function(array, ...args) {
    return array.filter(x => !args.includes(x))
};
console.log(removeFromArray);

// Do not edit below this line
module.exports = removeFromArray;
