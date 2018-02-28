var finder = function(string){
	var object ={};
	var newString=string.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
	for (i=0;i<newString.length;i++){
		object[newString[i]] = 0
	}
	for (i=0;i<newString.length;i++){
		object[newString[i]] += 1
	}
	for (key in object){
		console.log(key+" - "+object[key])
	}
};

finder("Croco  dile");