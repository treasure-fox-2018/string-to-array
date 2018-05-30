function stringToArray(string) {
  var splitString = string.split(',')
  var temp = []
  for (var i = 0; i < splitString.length; i++) {
    var row = []
    for (var j = 0; j < splitString[i].length; j++) {
      row.push(splitString[i][j])
    }
    temp.push(row)
  }

  return temp;

}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
