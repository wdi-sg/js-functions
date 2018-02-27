// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function maxOfThree(num1, num2, num3) {
    var bigNum = num1; 
    if (num2 > bigNum) {
        bigNum = num2;
    }
    if (num3 > bigNum) {
        bigNum = num3;
    }
    return bigNum;
}

console.log(maxOfThree(3, 1, 2))
console.log(maxOfThree(4, 15, 23))
console.log(maxOfThree(3, 100, 20))
