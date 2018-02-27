// Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.

function findLongestWord(arr) {
    var longest = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
}


console.log(findLongestWord(["aa","bbb","cccc"]) === 4);