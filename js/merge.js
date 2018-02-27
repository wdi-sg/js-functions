const merge = (arr1, arr2) => {
    return arr1.concat(arr2).sort((a,b) => {
        return a - b;
    });
}

let arr1 = [3,6,11];
let arr2 = [2,4,5,8,9];

console.log(merge(arr1,arr2));