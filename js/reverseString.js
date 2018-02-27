
function reverseString(word){
  var reversedString = "";
  for (var i = word.length-1; i >= 0; i--) {
      reversedString = reversedString.concat(word.charAt(i));
  }
  return reversedString;
}

// Display the reversed string
console.log(reverseString("jag testar"));
