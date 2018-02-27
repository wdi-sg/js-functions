function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  if (num%2 == 0) return false;
  for (var i=3; i*i < num; i+= 2) {
    if (num%i == 0) return false;
  }
  return true;
};

function primes(max) {
  if (max == 0) return [];
  var res = [2];
  if (max == 1) return res;
  var num = 3;
  while (max > 1) {
    if (isPrime(num)) {
      res.push(num);
      max--;
    }
    num += 2;
  }

  return res;
}

console.log(primes(15));
