// Using your isPrime() function, create a function primes that will return an array of all prime numbers up to a certain amount.

function isPrime(num) {
    // for special cases of 1 and 2
    if (num === 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    // start evaluating a number from its square to reduce number of computations
    var newNum = Math.ceil(Math.sqrt(num));

    // if the number is divisible by anything other than 1, it is not an integer
    for (var i = newNum; i > 1; i--) {
        if (Number.isInteger(num/i)) {
            return false;
        }
    }
    return true;
}

function primes(limit) {
    var count = 0;
    // check positive integers only
    for (i = 1; i <= limit; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

console.log(primes(10) === 4);
console.log(primes(1000) === 168);

