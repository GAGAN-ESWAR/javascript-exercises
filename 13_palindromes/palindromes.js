const palindromes = function (str) {
    let alphaNumeric ="abcdefghijklmnopqrstuvwxyz0123456789";

    let cleanedString = str
    .toLowerCase()
    .split("")
    .filter(char => alphaNumeric.includes(char))
    .join("");

    let reversedString = cleanedString.split("").reverse().join("");

    return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
