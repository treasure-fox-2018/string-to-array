function stringToArray(input){
    var result = []
    var arr = []
    for(let i=0; i<input.length; i++){
        if(input[i] !== ","){
            arr.push(input[i])
        }
        if(input[i] === "," || i === (input.length-1)){
            result.push(arr)
            arr = []
        }
    }
    return result
}
console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwer,tyui,asdf,ghjk"))