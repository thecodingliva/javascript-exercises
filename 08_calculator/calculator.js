const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1;
  
  for (var i = num -1; i >= 1; i--) {
    num *=i;
  } return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
