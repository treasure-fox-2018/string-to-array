function stringToArray(input) {
    let arraySplit = [];
    let splitLetter = input.split(',');

    for(let i = 0; i < splitLetter.length; i++) {
        arraySplit.push([]);

        for(let j = 0; j < splitLetter[i].length; j++) {
            arraySplit[i].push(splitLetter[i][j]);

        }
    }
    return arraySplit
}

console.log(stringToArray('qwer,tyui,asdf,ghjk'));
console.log(stringToArray('test,makan,dan,selonjoran'));