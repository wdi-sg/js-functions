function isPrime(n) {
// prime numbers must be greater than 1
  if (n < 2)
    return false;
  
  //total number of loop run to test on each number 
  let maxIteration = Math.ceil(Math.sqrt(n));

  //number to test starting from 2
  for (var i = 2; i <= maxIteration; i++) {
    if (n == 2)
      // 2 is a prime number
      return true;
    else if (n % i == 0)
      //if number is divisible, number is not prime
      return false;
  }
  //if number is NOT divisible by any number, number is prime
  return true;
}

console.log(isPrime(n));