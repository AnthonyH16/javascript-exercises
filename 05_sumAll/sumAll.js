let total = 0;
const sumAll = function (first, second) {
    if (typeof (second) == "string") {
        total = "ERROR"
    }
    else if (first < second && first >= 0 && second >= 0) {
        for (i = first; i <= second; i++) {
            total = ((second - first) + 1) * (first + second) / 2;
        }
    }
    //  total += i ;
    else if (second < first && first >= 0 && second >= 0) {
        for (i = second; i <= first; i++) {
            total = ((first - second) + 1) * (first + second) / 2;
        }
    }
    else {
        total = "ERROR"
    }
    return total;
}



// Do not edit below this line
module.exports = sumAll;
