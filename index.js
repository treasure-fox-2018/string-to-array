function stringToArr(input) {
    var kolom = [];
    var baris = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] === ',') {
            kolom.push(baris);
            baris = [];
        } else {
            baris.push(input[i]);
        }
    }
    kolom.push(baris);
    return kolom;
}

console.log(stringToArr('aqrst,ukaei,ffooo'));
console.log(stringToArr('qwer,tyui,asdf,ghjk'));
