const reverseString = (str) => {
    let reversedStr = str.split("").reverse().join("");
    console.log(reversedStr);
    return reversedStr;
}

let str = 'jag testar';

reverseString(str);