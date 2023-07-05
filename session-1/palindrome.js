function isPalindrome(word) {
    const re = /[\W_]/g
    const lCase = word.toLowerCase().replace(re, '')

    const reversedWord = lCase.split("").reverse().join("")
    
    return lCase === reversedWord

  }
  
  const word = 'racecar'

  if (isPalindrome(word)) {
    console.log('It is a palindrome!')
  } else {
    console.log('It is not a palindrome!')
  }