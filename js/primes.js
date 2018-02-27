function isPrime(n) {
    if (typeof(n) != "number" || parseInt(n) != n) {console.error("Need an integer!"); return};
    if (n == 2 || n == 3) {return true};
    let upperLimit = Math.floor(Math.sqrt(n));
    let result = true;
    for (let i = 2; i <= upperLimit; i++) {
        if (!(n % i)) {result = false; break}
    }
    return result;
}

function primes(max) {
    if (max < 2 || parseInt(max) != max) {console.error("Need an integer larger than 2!"); return};
    let result = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {result.push(i)}
    }
    return result;
}