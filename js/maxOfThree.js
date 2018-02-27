/**
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
*/


function maxOfThree(num1,num2,num3){
	var max = 0;
	if(num1<num2){
		max = num2;
		if(num2<num3){
			max = num3;
		}
	}
	else{
		max = num1;
		if(num1<num3){
			max = num3;
		}
	}
	return max;
}
