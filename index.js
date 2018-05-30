function stringConverter(string) {
  var newInput = string.split(',');
  var arrParent = [];

  for (var i = 0; i < newInput.length; i++) {
    var newArr = [];
    for (var j = 0; j < newInput[i].length; j++) {
      newArr.push(newInput[i][j]);
    }
    arrParent.push(newArr);
  }
  return arrParent;
}

console.log(stringConverter('aqrst,ukaei,ffooo'));
console.log(stringConverter('qwer,tyui,asdf,ghjk'));
