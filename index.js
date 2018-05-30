function stringToArray (str) {

    var splitStr=str.split(",")
    var result=[]

    for(var i=0; i<splitStr.length; i++) {
        result.push([])
    }

    for(var x=0; x<splitStr.length; x++) {
        for(var y=0; y<splitStr[x].length; y++) {
            result[x].push(splitStr[x][y])
        }
    }

    return result
}

console.log(stringToArray("abcde,fghij,klmno"))
console.log(stringToArray("foo,bar,lol,bun,cao"))