function convertToArray(string){
	var mainArr = []
	var arrWord = string.split(',')

	for(let a = 0; a < arrWord.length; a++){
		let arrTemp = arrWord[a].split('')

		mainArr.push(arrTemp)
	}
	return mainArr;
}

console.log(convertToArray('qazwsx,edcvf,tgbn'));
console.log(convertToArray('abcd,okln,ghijk'));
