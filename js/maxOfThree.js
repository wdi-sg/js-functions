const maxOfThree = (...args) => {
    args.sort((a,b) => {
        return a-b;
    })
    let largestNum = args.pop();
    console.log(largestNum);
    return largestNum;
}

maxOfThree(1,10,2,50,3);
