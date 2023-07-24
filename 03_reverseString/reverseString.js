const reverseString = function(word) {
    let wordSplit = Array.from(word);
    let wordReversed = wordSplit.reverse().join(``);
    return wordReversed;


};

// Do not edit below this line
module.exports = reverseString;
