/**
Using your isPrime() function, create a function primes that will return an array of all prime numbers up to a certain amount.
*/

function primes(max){
	var i = 0;
	var array = [];
	while(i<=max){
		if(isPrime(i)==true){
			array.push(i);
		}
		i++;
	}
	console.log(array);
}

function isPrime(num){
	//prime numbers are greater than 1
	if(num>1){
		for(var i=2;i<num;i++){
			if((num%i)==0){
				return false;
				break;
			}
			else{
				return true;
			}
		}
	}
	else{
		return false;
	}
}
 