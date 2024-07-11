const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  const strings = [];
  for (let i = 0; i < num; i++) {
    strings[i] = string;
  }
  concatedString = strings.join("");
  return concatedString;
};

// Do not edit below this line
module.exports = repeatString;
