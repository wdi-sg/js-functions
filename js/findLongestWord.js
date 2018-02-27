function findLongestWord(array) {
  var maxLength = 0;
  var maxWord;
  for (var i=0; i<array.length;i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
      console.log(array[i]);
    }
  }
  return maxLength;
}

console.log(findLongestWord(["icroscopicsilicovolcanoconiosis","hello","again"]));
