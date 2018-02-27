// Create a function to return true or false if a number passed in a prime number.

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

console.log(isPrime(1) === false);
console.log(isPrime(2) === true);
console.log(isPrime(541) === true);
console.log(isPrime(4) === false);