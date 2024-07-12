const reverseString = function(string) {
    const stringAsArray = string.split("");
    const reversedStringAsArray = stringAsArray.reverse();
    const reversedString = reversedStringAsArray.join("");
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
