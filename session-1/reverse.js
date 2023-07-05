function reverse(word) {
    return word.split("").reverse().join("")
   }
   
const word = 'hello'

const reversedWord = reverse(word)

console.log(reversedWord) // 'olleh'