function sumArray (arr){
  var sum_total = 0;
  for (var numbers in arr){
    sum_total = sum_total + arr[numbers];
  }
  return sum_total;
}

function multiplyArray (arr){
  var mul_total = 1;
  for (var numbers in arr){
    mul_total = mul_total * arr[numbers];
  }
  return mul_total;
}

console.log(sumArray([1,2,3,4]));
console.log(multiplyArray([1,2,3,4]));
