/**
Create a function to return true or false if a number passed in a prime number.
*/

function isPrime(num){
	//prime numbers are greater than 1
	if(num>1){
		for(var i=2;i<num;i++){
			if((num%i)==0){
				console.log(false);
				break;
			}
			else{
				console.log(true);
			}
		}
	}
	else{
		console.log(false);
	}
}