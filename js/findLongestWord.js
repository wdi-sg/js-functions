const findLongestWord = (arr) => {
    arr.sort((a,b) => {
        return a.length - b.length;
    });
    let longestWord = arr.pop();
    console.log(longestWord);
    return longestWord;
};

let testArr = ['test','testetstes','testestsetsetsetst', 'adawdugawuydgawydgauwydgaky'];

findLongestWord(testArr);