function StringtoArray(words) {

  let length = words.split(',').length
  let fill = words.split(',')

  let outside = []
  for (let i = 0; i < length; i++) {
    outside.push(fill[i].toString().split(''))
  }

  return outside
}
console.log(StringtoArray('aqrst,ukaei,ffooo'))
console.log(StringtoArray('qwer,tyui,asdf,ghjk'))
