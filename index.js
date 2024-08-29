module.exports.digitalRoot = function digitalRoot(number) {
    while (number >= 10) {
        number = number.toString()
                       .split('')
                       .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return number;
};