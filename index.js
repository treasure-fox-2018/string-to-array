// input: "aqrst,ukaei,ffooo"
// output:
// [['a','q','r','s','t'],['u','k','a','e','i'],['f','f','o','o','o']]

function strToArr(str){
var strSplitArr = str.split(",")
var arrResult=[]
for(let i = 0; i<strSplitArr.length; i++ ){
  var splitInside = strSplitArr[i].split("")
  arrResult.push(splitInside)
}

return arrResult
}

console.log(strToArr("aqrst,ukaei,ffooo"))
