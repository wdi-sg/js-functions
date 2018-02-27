/**
Write a function that takes a string that finds out how many times a character occurs. 
*/

function letterCount(word){
	//Convert the word to lowercase and remove any punctuations or wide spaces
	var wordModified = word.toLowerCase().replace(/\s[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

	//split the words into individual characters
	var chars = word.split("");
	
	//Adding characters and their frequencies into an object letterCount
	var letterCount = {};
	for(var i=0;i<chars.length;i++){
		if(letterCount[chars[i]]==undefined){
			letterCount[chars[i]]=0;
		}
		letterCount[chars[i]]+=1;
	}

	//iterate over letterCount and print out each letter and its frequency
	for (var letter in letterCount){
		console.log(letter+": "+letterCount[letter])
	}
}
