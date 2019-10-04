const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result_str = "";

    for (let iter_expr = 0; iter_expr < expr.length; iter_expr = iter_expr + 10) {
        let temp_str = expr.slice(iter_expr, iter_expr + 10);
        let morse_str = "";

        if (temp_str === "**********") {
            result_str += " ";

        } else {
            for (let iter_temp_str = 0; iter_temp_str < temp_str.length; iter_temp_str = iter_temp_str + 2) {
                let temp_substr = temp_str.slice(iter_temp_str, iter_temp_str + 2);

                if (temp_substr === "10") {
                    morse_str += ".";
                } else if (temp_substr === "11") {
                    morse_str += "-";
                }
            }

            for (let key in MORSE_TABLE) {
                if( key === morse_str){
                    result_str += MORSE_TABLE[key];
                }
            }
        }
    }

    return result_str;
}

module.exports = {
    decode
};