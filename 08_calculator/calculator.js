const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	// let sum = 0;
  // for (let num of array) {
  //   sum += num;
  // }
  // return sum;

  return array.reduce((total, current) => {
    return total + current;
  }, 0)
};

const multiply = function(array) {
  // let product = 1;
  // for (let num of array) {
  //   product *= num;
  // }
  // return product;

  return array.reduce((product, current) => {
    return product * current;
  }, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	fact = 1;
  if (num === 0) return fact;
  for (let i = 1; i <= num; i ++) {
    fact *= i;
  }
  return fact;
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
