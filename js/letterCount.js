// Write a function that takes a string that finds out how many times a character occurs. For example, the string "apple" would print the following:

// a - 1
// p - 2
// l - 1
// e - 1
// Hint: Loop through each letter, and increment the value to a key in an object. The key should be that object.

// BONUS: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.

function letterCount(word) {
    var letters = {};
    word = word.toLowerCase().replace(/\s/g, ''); // strip white space and lowercase letters

    for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        if (letters[letter]) {
            letters[letter] += 1;
        }
        else {
            letters[letter] = 1;
        }
    }
    for (var letter in letters) {
        console.log(letter + " - " + letters[letter]);
    }
}



letterCount("apple");
letterCount("apPle");
letterCount("apple ");
letterCount("apple APPLE");