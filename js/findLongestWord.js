
function findLongestWord(arr){
  var largest_length = 0;
  var longest_word_index;
  for (var i=0; i<arr.length; i++){
    if (arr[i].length > largest_length){
      largest_length = arr[i].length;
      longest_word_index = i;
    }
  }
  console.log("Longest word in the array = " + arr[longest_word_index]);
}

findLongestWord(["haha", "shopping", "happy", "knowledge", "enormous", "fabulous"]);
