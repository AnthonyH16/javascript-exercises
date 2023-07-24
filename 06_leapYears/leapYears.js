const leapYears = function(isItLeapYear) {
    if (isItLeapYear % 400 === 0 && isItLeapYear % 100 === 0){
        return true;
    }
    else if (isItLeapYear % 4 === 0 && isItLeapYear % 100 === 0){
        return false;
    }
    else if (isItLeapYear % 4 === 0){
        return true;
    }
    else {
        return false;
    }
};




// Do not edit below this line
module.exports = leapYears;
