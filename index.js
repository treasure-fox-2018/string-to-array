function stringToArray(string){
  let stringSplit = string.split(",");
  let arrOutside = [];
  // console.log(stringSplit);
  for(let i=0; i<stringSplit.length; i++){
    arrOutside.push([]);
    for(let j=0; j<stringSplit[i].length; j++){
      arrOutside[i].push(stringSplit[i][j])
      arrOutside[i][j].split(",")
    }
  }
  return arrOutside
}
console.log(stringToArray("aqrst,ukaei,ffooo"));
// console.log(stringToArray("qwer,tyui,asdf,ghjk"));
