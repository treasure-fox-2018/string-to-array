function stringOfArray (str) {
  var strArr = []
  var resultArr = []
  str += ','
  for (var a = 0; a < str.length; a++) {
    var containStr = ''
    if (str[a] === ',') {
      resultArr.push(strArr)
      strArr = []
    } else {
      containStr += str[a]
      strArr.push(containStr)
    }
  }
  return resultArr
}

console.log(stringOfArray('aqrst,ukaei,ffooo'))
console.log(stringOfArray('qwer,tyui,asdf,ghjk'))