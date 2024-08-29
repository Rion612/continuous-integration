module.exports.digitalRoot = function digitalRoot(number) {
    while (number >= 10) {
        number = number.toString()
                       .split('')
                       .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return number;
};

module.exports.isEven =  function isEven(number) {
    return number%2 == 0;
};


module.exports.isOdd =  function isOdd(number) {
    return number%2 == 1;
};