/**
Write a function called merge. The function should take two sorted arrays of numbers as input and return a merged array of the sorted numbers from the input. For example, if the input arrays were var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9]; Then the returned array would be: [2,3,4,5,6,8,9,11].
*/

function merge(arr1,arr2){
	var bigArray=[];
	addBig(arr1,bigArray);
	addBig(arr2,bigArray);
	console.log("Before sorting: " + bigArray);
	bigArray.sort(sortNumber);
	console.log("After sorting: " + bigArray);
}

function addBig(arr,bigArray){
	for(i=0;i<arr.length;i++){
		bigArray.push(arr[i])
	}
	return bigArray;
}

//by default, sort is only by alphabetically. Add this function for numerical sorting
function sortNumber(a,b){
	return a - b;
}