function removePunktuation(letter) {
    if(letter !== "." && letter !== "," && letter !== " " && letter !== "!") return true;
    else return false;
}
const palindromes = function (string) {
    string = string.toLowerCase();
    const stringAsArray = string.split("");
    let filteredStringAsArray = stringAsArray.filter(removePunktuation);
    string = filteredStringAsArray.join("");
    const reversedStringAsArray = filteredStringAsArray.reverse();
    const reversedString = reversedStringAsArray.join("");
    if (string === reversedString) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
