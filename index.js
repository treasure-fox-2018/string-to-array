function strToArr(str){
  var splitArr = str.split(',');
  var resultArr = [];

  for (var i = 0; i < splitArr.length; i++) {
    var strNumberArr = [];

    for (var j = 0; j < splitArr[i].length; j++) {
      strNumberArr.push(splitArr[i][j]);
    }
    resultArr.push(strNumberArr);
  }
  
  return resultArr;
}

console.log(strToArr('aqrst,ukaei,ffooo'));
console.log(strToArr('qwer,tyui,asdf,ghjk'));
