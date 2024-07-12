const add = function(firstNumber, secondNumber) {
  const result = firstNumber + secondNumber;
  return result;
};  

const subtract = function(firstNumber, secondNumber) {
  const result = firstNumber - secondNumber;
  return result;
};

const sum = function(arrayToSum) {
  let sum = 0
	if (arrayToSum.length === 0) return sum;
  else {
    for(let i = 0; i < arrayToSum.length; i++) {
      sum += arrayToSum[i];
    }
    return sum;
  }
};

const multiply = function(arrayToMultiply) {
  let multiplies = 1
	if (arrayToMultiply.length === 0) return multiplies;
  else {
    for(let i = 0; i < arrayToMultiply.length; i++) {
      multiplies *= arrayToMultiply[i];
    }
    return multiplies;
  }
};

const power = function(firstNumber, secondNumber) {
  let result = firstNumber**secondNumber;
  return result;
};

const factorial = function(number) {
  let fractal = 1
	if(number === 0) return fractal;
  else {
    for(let i = 1; i <= number; i++) {
      fractal *= i;
    }
    return fractal;
  } 
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
