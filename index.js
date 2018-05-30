function convert(str){
    let split = str.split(',')
    let hasil =[]

    for(let i=0;i<split.length;i++){
        let tampung = []
        for(let j =0;j<split[i].length;j++){
            tampung.push(split[i][j])
        }
        hasil.push(tampung)
    }
    return hasil
}
console.log(convert("aqrst,ukaei,ffooo"))
console.log(convert("qwer,tyui,asdf,ghkk"))