

function maxOfThree(num1, num2, num3){
  if (num1 > num2){
    if (num1 > num3){
      console.log(num1 + " is the largest number of the three");
    }
    else{
      console.log(num3 + " is the largest number of the three");
    }
  }
  else if (num2 > num3){
    console.log(num2 + " is the largest number of the three");
  }
  else{
    console.log(num3 + " is the largest number of the three");
  }
}

maxOfThree(6,7,8);
