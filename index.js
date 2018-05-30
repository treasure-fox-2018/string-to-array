function stringToArray(data) {
    data = data.split(',')
    
    var arr = []
    for (let i = 0; i < data.length; i++) {
        var isi = []
        for (let j = 0; j < data[i].length; j++) {
            isi.push(data[i][j])
        }
        arr.push(isi)
    }


    return arr
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
