/**
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

function sumArray(array){
	var output = 0;
	for(var i=0;i<array.length;i++){
		output+=array[i];
	}
	return output;
}

function multiplyArray(array){
	var output = 1;
	for (var i=0;i<array.length;i++) {
		output*=array[i];
	}
	return output;
}