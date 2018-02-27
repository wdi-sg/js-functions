/**
Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

function reverseString(inputString){
	//create a new string
	var newStr = "";

	for(var i=inputStr.length-1;i>=0;i--){
		//Starting point of loop corresponds to the last character
		newStr += inputString[i];
	}
	return console.log(newString);
}
