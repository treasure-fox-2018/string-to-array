function stringToArray(sentence){
    let arr = [];
    let temp = [];
    for(let a = 0; a < sentence.length; a++){
        
        if(sentence[a] != ','){
            temp.push(sentence[a])
        }else{
            arr.push(temp);
            temp = []
        }

        if(a ===sentence.length-1){
            arr.push(temp)
        }

    }

    return arr
}

console.log(stringToArray('aqrst,ukaei,ffooo'))