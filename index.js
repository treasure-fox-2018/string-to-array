function stringArray(string) {

  let split = string.split(',')
  let arrHasil = [];

  for (let i = 0; i < split.length; i++) {
    arrHasil.push([]);

    for (let j = 0; j < split[i].length; j++) {
      arrHasil[i].push(split[i][j]);
      arrHasil[i][j].split(',')

    }

  }
  return arrHasil
}
console.log(stringArray('aqrst,ukaei,ffooo'));
console.log(stringArray('qwer,tyui,asdf,ghjk'));
