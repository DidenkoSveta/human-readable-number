module.exports = function toReadable(number) {
    const stringNumber = `${number}`;
    const length = stringNumber.length;

    if (number === 0) return 'zero';
    if (length === 1) {
        return returnOneNumber(number);
    }
    if (length < 3) {
        if (number < 20 && number > 9) {
            return returnDecimalBelowTwenty(number);
        }
        const secondNumber = returnOneNumber(+stringNumber[1]);
        return returnDecimal(+stringNumber[0]) + (secondNumber ? ' ' + secondNumber : '');
    }

    return returnOneNumber(+stringNumber[0]) + ' hundred' + ((+stringNumber[2] === 0 && +stringNumber[1] === 0) ? '' : ' ' + toReadable(number - stringNumber[0] * 100))
}

const returnOneNumber = (oneNumber) => {
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    if (!oneNumber) return '';
    return numbers[oneNumber - 1]
}

const returnDecimalBelowTwenty = (decimal) => {
    const numbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    return numbers[decimal - 10]
}

const returnDecimal = (decimal) => {
    const numbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    return numbers[decimal - 2];
}

module.exports = function toReadable(number) {
    const stringNumber = `${number}`;
    const length = stringNumber.length;

    if (number === 0) return 'zero';

    let result = '';
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

    for (let i = 0; i < length; i++) {
        if (i === 0 && +stringNumber[i] !== 0) {
            result += numbers[+stringNumber[i] - 1] + ' hundred';
        }
        if (i === 1 && +stringNumber[i] !== 0) {
            result += ' ' + numbers[+stringNumber[i] + 17];
        }
        if (i === 2 && +stringNumber[i] !== 0) {
            result += ' ' + numbers[+stringNumber[i] - 1];
        }
    }

    return result || 'zero';
}
