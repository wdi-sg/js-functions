// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

function isCharacterAVowel(char) {
    vowels = ['a','e','i','o','u','A','E','I','O','U']
    if (vowels.includes(char)) {
        return true;
    }
    return false;
}

console.log(isCharacterAVowel("a") === true)
console.log(isCharacterAVowel("A") === true)
console.log(isCharacterAVowel("4") === false)
console.log(isCharacterAVowel(0) === false)