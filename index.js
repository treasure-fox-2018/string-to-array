const stringToArray = (string => {
    let stringSplit = string.split(',');
    let stringArr = [];
    for(let z = 0; z < stringSplit.length; z ++){
        stringArr.push(stringSplit[z].split(''))
    }
    console.log(stringArr)
})

stringToArray("aqrst,ukaei,ffooo");
stringToArray("qwer,tyui,asdf,ghjk")




