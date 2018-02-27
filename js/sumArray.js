const sumArray = (arr) => {
    let sum = arr.reduce((a,b) => {
        return a + b;
    }, 0);
    console.log(sum);
    return sum;
};

const multiplyArray = (arr) => {
    let multi = arr.reduce((a,b) => {
        return a * b;
    }, 1);
    console.log(multi);
    return multi;
};

let arr = [1,2,3,4];

sumArray(arr);
multiplyArray(arr);