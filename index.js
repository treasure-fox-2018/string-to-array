
function stringToArr(name) {


    var arr = []
    var nameStr = name.split(',')
    for (var j = 0; j < nameStr.length; j++) {

        arr.push([])

    }

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < nameStr[i].length; j++) {
            arr[i].push(nameStr[i][j])
            // console.log(arr[i])
        }
    }

    // console.log(nameStr)
    return arr


}



console.log(stringToArr('aqrst,ukei,ffoo'))
console.log(stringToArr('qwer,tyui,asdf,ghjk'))
