// Write a function called merge. The function should take two sorted arrays of numbers as input and return a merged array of the sorted numbers from the input. For example, if the input arrays were var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9]; Then the returned array would be: [2,3,4,5,6,8,9,11].

function merge(arr1, arr2) {
    var arr3 = [];
    var totalCount = arr1.length + arr2.length;

    for (var i = 0; i < totalCount; i++) {
        if (arr1.length === 0) {
            arr3 = arr3.concat(arr2);
            break;
        }
        if (arr2.length === 0) {
            arr3 = arr3.concat(arr1);
            break;
        }
        var num1 = arr1[0];
        var num2 = arr2[0];
        if (num1 < num2) {
            arr3 = arr3.concat(arr1.shift());
        }
        else {
            arr3 = arr3.concat(arr2.shift());
        }
    }
    return arr3;
}

console.log(merge([3,6,11],[2,4,5,8,9]))