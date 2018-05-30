function convertStringtoArray(str) {
    var mainArr = [];
    var splitStr = str.split(',');
    // console.log(splitStr);

    for (let i = 0; i < splitStr.length; i++) {
        var groupArr = [];
        mainArr.push(groupArr);
        for (let j = 0; j < splitStr[i].length; j++) {
            groupArr.push(splitStr[i][j]);
        }
    }
    return mainArr;
}

console.log(convertStringtoArray('aqrst,ukaei,ffooo'));
console.log(convertStringtoArray('qwer,tyui,asdf,ghjk'));