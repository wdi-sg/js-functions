// Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index.

function sillySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i] * i;
    }
    return sum;
}

console.log(sillySum([2,5]) === 5);
console.log(sillySum([1,2,3]) === 8);