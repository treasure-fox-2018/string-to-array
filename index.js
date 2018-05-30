function stringToArray(string){
    let mainArr = []
    let childArr = []
    let splitString = string.split(',')
    
    for(let i = 0; i < splitString.length; i++){
        for(let j = 0; j < splitString[i].length; j++){
            childArr.push(splitString[i][j])
        }
        mainArr.push(childArr)
        childArr = []
    }
   return mainArr;
    
}

console.log(stringToArray('aqrst,ukaei,ffooo'));

