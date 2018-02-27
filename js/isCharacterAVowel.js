function isCharacterAVowel(char) {
  var vowels = "aeiouAEIOU";
  if (vowels.includes(char)) return true;
  return false;
}

console.log(isCharacterAVowel('z'));
