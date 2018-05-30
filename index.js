function stringToArray(str) {
  let strArray = str.split(',');
  let output = [];

  for (let i = 0; i < strArray.length; i++) {
    let string = strArray[i].split('');
    output.push(string);
  }
  return output;
}

console.log(stringToArray("aqrst,ukaei,foooo"))