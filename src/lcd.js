const asciiDigits = { 
    1 : ['   ',
         '  |',
         '  |'],
    2 : [' _ ',
         ' _|',
         '|_ '],
    3 : [' _ ',
         ' _|',
         ' _|'],
    4 : ['   ',
         '|_|',
         '  |'],
    5 : [' _ ',
         '|_ ',
         ' _|'],
    6 : [' _ ',
         '|_ ',
         '|_|'],
    7 : [' _ ',
         '  |',
         '  |'],
    8 : [' _ ',
         '|_|',
         '|_|'],
    9 : [' _ ',
         '|_|',
         ' _|'],
    0 : [' _ ',
         '| |',
         '|_|']
};

function render_number (number) {
    var digits = number.toString().split('');
    var result = "";
    for(var line = 0; line < 3; line ++) {
        for(var i = 0 ; i < digits.length ; i++) {
            result += asciiDigits[digits[i]][line];
        }
        result += '\n';
    }
    return result;
}
