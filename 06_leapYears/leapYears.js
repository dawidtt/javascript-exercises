const leapYears = function(year) {
    let bool
    if (year % 400 === 0) {
        bool = true;
    }
    else if (year % 100 === 0) {
        bool = false;
    }
    else if (year % 4 === 0) {
        bool = true;
    }
    else {
        bool = false;
    }
    return bool;
};

// Do not edit below this line
module.exports = leapYears;
