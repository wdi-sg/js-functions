/** 
Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
*/

function findLongestWord(wordsArray){
	var maxLength = 0;
	for(var i=0;i<wordsArray.length;i++){
		var currLength = wordsArray[i].length;
		if(currLength>maxLength){
			maxLength=currLength;
		}
	}
	return maxLength;
}