function sillySum(arr){
  var count = 0;
  for (var numbers in arr){
    count += (arr[numbers] * numbers);
  }
  return count;
}

console.log(sillySum([1,2,3]));
