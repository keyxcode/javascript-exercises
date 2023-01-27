const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");

    return (processedString === processedString.split("").reverse().join(""));
};

palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
