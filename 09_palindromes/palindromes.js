function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
}

const palindromes = function (string) {
    string = string.toLowerCase();
    const charArray = string.split("");
    let arrLength = charArray.length;

    for (let i = 0; i < arrLength; i++) {
        if (!isCharacterALetter(charArray[i])) continue;
        let j = arrLength - i - 1;
            console.log(charArray[i]);
            console.log(charArray[j]);
            if (!isCharacterALetter(charArray[j])) continue;
            if (charArray[i] != charArray[j]) return false;
    }

    return true;
};

palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
