const toReadable = (number) => {
    let result = '';
    let numStr = number.toString();
    let numLength = numStr.length;
    let numArr = numStr.split('');
    let numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        1000: 'thousand',
        1000000: 'million',
        1000000000: 'billion'
    };

    if (number === 0) {
        return numbers[number];
    }

    for (let i = 0; i < numLength; i++) {
        let num = numArr[i];
        let position = (numLength - i);
        let index = '';
        let divider = '';

        if (position === 2 && numArr[i - 1] !== '1') {
            index = num + '0';
        } else {
            index = num;
        }

        if (position === 3 || position === 6 || position === 9 || position === 12) {
            divider = ' ' + numbers[Math.pow(10, position - 1)] + ' ';
        }

        result += numbers[index] + divider;
    }

    return result.trim();
};

module.exports = toReadable;
