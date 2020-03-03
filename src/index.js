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

    let splitFixedLength = (str, delimeterLength) => {
        return [].concat.apply([],
            str.split('').map(function (x, i) { return i % delimeterLength ? [] : str.slice(i, i + delimeterLength) })
        )
    }

    let splittedLetters = splitFixedLength(expr, 10)
    let innerTable = {
        '10': '.',
        '11': '-'
    }

    return splittedLetters.map(element => {
        if (element === '**********') {
            return ' '
        }
        element = element.replace(/\b0+/g, '')
        element = element.replace(/10|11/gi, matched => innerTable[matched]);
        return MORSE_TABLE[element]
    }).join('')
}

module.exports = {
    decode
}