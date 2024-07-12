const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    let smaller;
    let larger;
    if (typeof firstNumber != "number" ||  typeof secondNumber != "number" || firstNumber < 0 || secondNumber < 0) return "ERROR";
    
    if (firstNumber > secondNumber) {
        smaller = secondNumber;
        larger = firstNumber;
    }
    else {
        smaller = firstNumber;
        larger = secondNumber;
    }
    
    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
