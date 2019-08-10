var GOLDENRATIO = (1 + Math.sqrt(5)) / 2;
function round(num) {
    return Math.round(num);
}
function floor(num) {
    return Math.floor(num);
}
function ceil(num) {
    return Math.ceil(num);
}
function degToRad(num) {
    return num * (Math.PI / 180);
}
function radToDeg(num) {
    return num / (Math.PI / 180);
}
function toDollars(num) {
    return "$" + num.toFixed(2);
}
function tax(num, rate) {
    if (rate === 0) {
        return 0;
    }
    if (rate >= 0 && rate <= 100) {
        return num * (rate / 100);
    }
    throw new Error("The tax rate needs to be within 0 and 1! or 0 and 100!");
}
function withTax(amount, rate) {
    return Math.round((amount + amount * rate) * 100) / 100;
}
function interest(num, rate, years, decimalPlaces) {
    if (decimalPlaces === void 0) { decimalPlaces = 2; }
    if (rate < 0) {
        throw new Error("You cannot enter a interest rate lower than 0%!");
    }
    if (years < 0) {
        throw new Error("You cannot go back in time! Enter a year greater than 0!");
    }
    var interestRate = rate / 100;
    return (num * (1 + interestRate * years)).toFixed(decimalPlaces);
}
function mortage(num, interestRate, numberOfYears) {
    if (numberOfYears < 0) {
        throw new Error("You cannot have a negative amount of years to make payments!");
    }
    if (interestRate <= 0) {
        throw new Error("You cannot have a negative or 0 interest rate!");
    }
    var monthlyInterest = interestRate / 100 / 12;
    var totalPayments = numberOfYears * 12;
    var numerator = Math.pow(1 + monthlyInterest, totalPayments);
    var denominator = Math.pow(1 + monthlyInterest, totalPayments) - 1;
    return (num * monthlyInterest * numerator) / denominator;
}
function decimalToHex(num) {
    // If the number is less than 0
    var internalNum = num;
    if (num < 0) {
        internalNum += 0xffffffff + 1;
    }
    return "0x" + internalNum.toString(16).toUpperCase();
}
module.exports.random = function (maxNum) { return Math.floor(Math.random() * maxNum); };
var index = {
    round: round,
    floor: floor,
    ceil: ceil,
    degToRad: degToRad,
    radToDeg: radToDeg,
    toDollars: toDollars,
    tax: tax,
    withTax: withTax,
    interest: interest,
    mortage: mortage,
    decimalToHex: decimalToHex,
};

export default index;
export { GOLDENRATIO, ceil, decimalToHex, degToRad, floor, interest, mortage, radToDeg, round, tax, toDollars, withTax };
