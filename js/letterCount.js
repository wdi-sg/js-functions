

function letterCount(word){
  var letters = {};

  //loop, figure it out
  for(x = 0, length = word.length; x < length; x++) {
  	var l = word.charAt(x)
  	letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
  }

  //output count!
  for(var key in letters) {
  	console.log(key + ' - ' + letters[key]);
  }
}

letterCount("haha");
