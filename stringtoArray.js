function stringToArray (str) {
  let motherBoard = [];
  let strArr = str.split(',')
  for (var i in strArr){
    let row = [];
    for (var j in strArr[i]){
      row.push(strArr[i][j]);
    }
    motherBoard.push(row)
    debugger;
  }
  return motherBoard
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
