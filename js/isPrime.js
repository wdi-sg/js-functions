const isPrime = (num) => {
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            console.log('false');
            return false;
        }
    }   
    console.log(num !== 1);
    return num !== 1;
    // console.log(num)
    // console.log(true);
    // return true;
}

isPrime(3);
isPrime(8);
isPrime(9);
isPrime(11);