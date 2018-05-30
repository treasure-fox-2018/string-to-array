function stringToArray(input) {
  let inputSplit = input.split(',')
  let result = []

  for (let a = 0; a < inputSplit.length; a++) {
    var pisahArr = []
    for (let b = 0; b < inputSplit[a].length; b++) {
      pisahArr.push(inputSplit[a][b])
    }
    result.push(pisahArr)
  }

  return result
}
console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))