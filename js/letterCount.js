function letterCount(word) {
    if (typeof(word) != "string") {console.error("Need a string!"); return};
    // Use the unicode of a character as its index in a translated array
    let tmp = word.toLowerCase().split('');
    let result = new Array(26).fill(0);
    for (char in tmp) {
        result[tmp[char].charCodeAt(0) - 97]++;
    }
    for (let i = 0; i<26; i++) {
        if (result[i]) {
            console.log(String.fromCharCode(i+97) + " - " + result[i])
        }
    }
}