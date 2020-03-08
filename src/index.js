const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let tmp = [];
    for (let i = 1; i <= expr.length; i++) {
        if (i % 10 == 0 && i != 0) {
            tmp.push(expr.substr(i - 10, 10));
        }
    }
    let arr = [];
    for (let el of tmp) {
        el = el.replace(/00/g, '');
        el = el.replace(/11/g, '-');
        el = el.replace(/10/g, '.');
        el = el.replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
        if (el != ' ') el = MORSE_TABLE[el];
        arr.push(el);
    }
    return arr.join('');
}

module.exports = {
    decode
}