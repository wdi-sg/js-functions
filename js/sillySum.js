const sillySum = (arr) => {
    let count = 0;
    arr.forEach((x, i) => {
        count += x * i;
    });
    console.log(count);
    return count;
}

let sillyArr = [1,2,3,4];
sillySum(sillyArr);