const removeFromArray = function(inputArray, ...args) {
    let newArray = [];

    inputArray.forEach(e => {
        if (!args.includes(e)) {
            newArray.push(e);
        }
    })

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
