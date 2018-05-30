function stringtoArray (str) {
  var resultArr = [];
  var grupKataArr = [];
  var grupKataStr = '';
  var index = 0;
  for (var i = 0; i <= str.length; i++) {
    
    if (str[i] === ',' || i === str.length) {
      // grupKataArr.push(grupKataStr);
      grupKataArr[index] = grupKataStr;
      grupKataStr = '';
      index++;
    }
    else {
      grupKataStr = grupKataStr + str[i];
    }
  }
 
  for (var i = 0; i <= grupKataArr.length - 1; i++) {
    resultArr.push(grupKataArr[i].split(''));
  }

  return resultArr;
}

console.log(stringtoArray('aqrst,ukaei,ffooo'))
console.log(stringtoArray('qwer,tyui,asdf,ghjk'))