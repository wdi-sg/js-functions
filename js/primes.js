
function isPrime(num){
  if (num < 2){
    return false;
  }
  else if (num === 2){
    return true;
  }
  else{
    for (var i=2; i<num; i++){
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}

function primes(max){
  var primes_array = [];
  for (var i=0; i<max; i++){
    if (isPrime(i)) {
      primes_array.push(i);
    }
  }
  return primes_array;
}

console.log(primes(10));
