function splitmanual (sentence, delimiter) {
  var contain = [] 
  var str = ''
  sentence += delimiter
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === delimiter) {
      contain.push(str)
      str = ''
    } else {
      str += sentence[i]
    }
  }
  return contain
}

function stringToArr(str) {
  var newStr = splitmanual(str, ',')
  let mainArr = []
  for (let a = 0; a < newStr.length; a++) {
    let fillerArr = []
    mainArr.push(fillerArr)
    for (let b = 0; b < newStr[a].length; b++) {
      mainArr[a].push(newStr[a][b])
    }
  }
  return mainArr
}

console.log(stringToArr('str,fff,asd'))