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
