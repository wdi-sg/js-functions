const letterCount = (word) => {
    let countObj = {}
    word.split("").forEach(x => {
        if(x in countObj){
            countObj[x]++;
        }
        else{
            countObj[x] = 1;
        }
    });
    console.log(countObj);
    return countObj;
};

let word = 'apple';

letterCount(word);