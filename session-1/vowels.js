function convertToVowels(word) {
    convertToVowels = word.match(/[aeiou]/gi).join("")
    return convertToVowels
  }
  
const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)

console.log(wordWithOnlyVowels) // iioeo