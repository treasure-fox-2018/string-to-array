function stringToArray (str) {
  let splitStrArr = str.split(",")
  let output = [];
  for (let i = 0 ; i < splitStrArr.length ; i ++) {
    let rowValueArr = splitStrArr[i].split("");
    output.push(rowValueArr);
  }
  return output;
}
console.log(stringToArray("aqrst,ukaei,ffooo"))
