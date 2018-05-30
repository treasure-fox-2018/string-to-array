/**
 * @function stringToArray
 * mengkonversi kumpulan string menjadi array multidimensi
 * @param {string} strInput input string yang berisi kumpulan karakter
 * @returns {array} mengembalikan array multidimensi berisi string yang sudah dimasukkan setiap karakter
**/

//

function stringToArray(strInput) {
    var splittedStrInput = strInput.split(',');
    var splittedStrArr = [];

    for (let i = 0; i < splittedStrInput.length; i++) {
        let strRowArr = [];
        for (let j = 0; j < splittedStrInput[i].length; j++) {
            strRowArr.push(splittedStrInput[i][j]);
        }

        splittedStrArr.push(strRowArr);
    }

    return splittedStrArr;
}


console.log(stringToArray('abcde,fghij,klmno,hjjhg'));
