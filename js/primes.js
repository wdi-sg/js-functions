const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            // console.log('false');
            return false;
        }
    }
    return true;
}

const primes = (max) => {
    let primeArr = [];
    for(let i = 1; i <= max; i++){
        if(isPrime(i)){
            primeArr.push(i);
        }
    };
    console.log(primeArr);
    return primeArr;
};

primes(20);