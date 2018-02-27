/**
Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index
*/

function sillySum(array){
	var output = 0;
	var currSum = 0;
	for(var i=0;i<array.length;i++){
		currSum = array[i]*array.indexOf(array[i]);
		output += currSum;
	}
	return output;
}
