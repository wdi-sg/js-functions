function maxOfThree(num1, num2, num3) {
  var max;
  if (num1 > num2) max = num1;
  else max = num2;

  if (max > num3) return max;
  else return num3;

  // return Math.max(num1,num2,num3);
}

console.log(maxOfThree(1,2,3));
