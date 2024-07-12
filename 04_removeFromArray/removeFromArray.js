const removeFromArray = function() {
    let arrayToFilter = arguments[0];
    let filteredArray;
    for (let i = 1; i < arguments.length; i++) {
        arrayToFilter = arrayToFilter.filter((element) => element !== arguments[i]);
    }
    return arrayToFilter;
};

// Do not edit below this line
module.exports = removeFromArray;
