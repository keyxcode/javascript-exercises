const fibonacci = function(order) {
    order = parseInt(order);
    if (order < 0) return "OOPS";

    if (order === 1 || order === 2) return 1;
    else {
        return fibonacci(order - 1) + fibonacci(order - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
