function stringtoArray(arr) {
    let arrSplit = arr.split(',')
    let mainArr = []

    for (let i = 0; i < arrSplit.length; i++) {
        let subArr = []
        for (let j = 0; j < arrSplit[i].length;j++) {
            subArr.push(arrSplit[i][j])
        }
        mainArr.push(subArr)
    }
    return mainArr
}

console.log(stringtoArray('aqrst,ukaei,ffooo'))
console.log(stringtoArray('qwer,tyui,asdf,ghjk'))