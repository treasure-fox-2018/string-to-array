function strToArr(str) {
  if (str.length === 0) {
    return "No str";
  } else {
    // init var
    var arrStrs = [];
    var strCount = 1;

    for (var i = 0; i < str.length; i++) {
      var inspectorNumberOfStr = str[i];

      // logic to detect number of heroes
      if (inspectorNumberOfStr === ",") {
        arrStrs.push(strCount = {
          strToBeSplit: ""
        })
        strCount++;
      }
    }
    arrStrs.push(strCount = {
      strToBeSplit: ""
    });
    strCount++;
  }
  // console.log(arrStrs);

  var i = 0;
  var j = 0;
  while (j < str.length) {
    var inspector = str[j];
    if (inspector !== ",") {
      arrStrs[i].strToBeSplit += inspector;
    } else if (inspector === ",") {
      i ++;
    }
    j ++;
  }
  // console.log(arrStrs);

  var finalArray = [];
  for (var l = 0; l < arrStrs.length; l++) {
    var tempoArray = [];
    var arrStrsAccess = arrStrs[l].strToBeSplit;
    for (var k = 0; k < arrStrsAccess.length; k++) {
      tempoArray.push(arrStrsAccess[k]);
    }
    finalArray.push(tempoArray);
  }
  console.log(finalArray);
}

console.log(strToArr("mksmxs,xskmxs,kkmws,maa"));
