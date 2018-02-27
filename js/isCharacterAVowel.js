var vowels_array = ['a', 'e', 'i', 'o', 'u'];

function isCharacterAVowel(num){
  for (var vowels in vowels_array){
    if (num === vowels_array[vowels]){
      return true;
    }
    else {
      return false;
    }
  }
}

console.log(isCharacterAVowel('f'));
