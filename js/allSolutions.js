function maxOfThree(num1, num2, num3) {
    let result = num1;
    if (num2 > result) {
        result = num2;
    };
    if (num3 > result) {
        result = num3;
    };
    // Note: A if-else would result in maxOfThree(1,3,5) returning 3.
    return result;
}

function isCharacterAVowel(char) {
    let vowels = ["a", "e", "i", "o", "u"];
    if (char.length != 1) {
        console.error("Not a character")
        return false;
    };
    let result = false;
    vowels.forEach((c) => {if (c = char) {result = true}});
    return result;
}

function sumArray(arr) {
    return arr.reduce((accumulator, current) => accumulator + current)
}

function multiplyArray(arr) {
    return arr.reduce((accumulator, current) => accumulator * current)
}

function sillySum(arr) {
    return arr.map((currentValue, index) => currentValue * index).reduce((accumulator, currentValue) => accumulator + currentValue)
}

function reverseString(num) {
    // Iteratively concatenate a result string with the character popped off at the end of the given string
    let result = "";
    let tmp = num.split('');
    while (tmp.length) {
        result += tmp.pop();
    }
    return result;
}

function findLongestWord(arr) {
    // Sort the array by word length in ascending order and return the first element
    // The sort function should return true if the 2nd parameter has a length greater than the 1st, i.e. make the swap if the 2nd parameter has a longer word
    return arr.sort((a,b) => {return b.length - a.length})[0]
}

function filterLongWords(arr, maxLength) {
    if (typeof(maxLength) != "number" || parseInt(maxLength) != maxLength || maxLength < 0) {console.error("Need a positive number for max length!"); return};
    let result = [];
    arr.map((currentWord) => {if (currentWord.length < maxLength) {result.push(currentWord)}});
    console.log(maxLength);
    return result;
}

function grade(testScore) {
    if (typeof(testScore) != "number" || testScore < 0 || testScore > 100) {console.error("Need a valid test score between 0 and 100!"); return}
    let result = "A";
    switch (true) {
        case (testScore < 45): {result = "F"; break};
        case (testScore < 50): {result = "E"; break};
        case (testScore < 55): {result = "D"; break};
        case (testScore < 60): {result = "C"; break};
        case (testScore < 70): {result = "B"; break};
        default: break;
    }
    return result;
}

// I was originally thinking of using this blunderbuss of a function, but I don't think it exists? It looks like it should be a utility, so I'm writing it here for future use. The required task doesn't actually require its use since it's a 1 time look up.
function phoneBookReverse (phonebook) {
    var reversedPhoneBook = {};
    for (var number in phonebook) {
        if (phonebook.hasOwnProperty(number)) {
            if (!(reversedPhoneBook.hasOwnProperty(phonebook[number]))) {
                reversedPhoneBook[phonebook[number]] = [];
            }
            reversedPhoneBook[phonebook[number]].push(number);
        };
    }
    return reversedPhoneBook;
}

function phoneBookLookUp (phonebook, number) {
    for (let name in phonebook) {
        if (phonebook[name] == number) {
            console.log(name)
        }
    }
}

function letterCount(word) {
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

function isPrime(n) {
    if (typeof(n) != "number" || parseInt(n) != n) {console.error("Need an integer!"); return};
    if (n == 2 || n == 3) {return true};
    let upperLimit = Math.floor(Math.sqrt(n));
    let result = true;
    for (let i = 2; i <= upperLimit; i++) {
        if (!(n % i)) {result = false; break}
    }
    return result;
}

function primes(max) {
    if (max < 2 || parseInt(max) != max) {console.error("Need an integer larger than 2!"); return};
    let result = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {result.push(i)}
    }
    return result;
}

function merge(arr1, arr2) {
    return arr1.concat(arr2);
}


// The concept of this solution is that the residues of integers
// modulo 15 are periodic (with period 15). The implementation can
// be done in a few ways, but since machine language deals with binary
// numbers, it's possible that the fastest implementation uses
// binary numbers as a filter (because division is expensive!).
// Nevertheless, I'll write here (in 15 min?)
// both the binary and the human-readable version.

// Note: 810092018 in binary is 110000010010010000011000010000
// Split into pairs, 11 00 00 01 00 10 01 00 00 01 10 00 01 00 00
// Notice that there are 15 pairs of bits, which represent:
// 11 - divisible by 15
// 01 - divisible by 3
// 10 - divisible by 5

// To effectively use that large binary string as a filter, we use bitwise
// comparison operators, e.g. the & comparison operator, and bitshift operators
// e.g. the >> and << shift operators.

// The reason why that binary string is written like this "in reverse" is that
// the digits with smaller values are on the right, e.g. in decimal, the digit 7
// has the smallest value in the number 1234127.

const end = 100;
const start = 1;

function bitFizzBuzz(start, end) {
    var bFilter = 810092048;
    let counter = bFilter & 3;
    
    for (let i = 1; i < start; i++) {
        bFilter = bFilter >> 2 | counter << 28;
    }
    
    for (let num = start; num <= end; num++){
        let counter = bFilter & 3;
        let result = 'FizzBuzz';
        // if the binary string returns 0 when bitwise compared to 3 (11), then it's neither
        // divisible by 3 (represented by 01) nor 5 (represented by 10).
        // if the binary string returns 1 when bitwise compared to 3 (11), then it's divisible by 3 (01).
        // if the binary string returns 2 when bitwise compared to 3 (11), then it's divisible by 5
        // (remember, 10 indicates divisibility by 5).
        
        if (counter === 0) {
            result = num;
        } else if (counter === 1) {
            result = 'Fizz';
        } else if (counter === 2) {
            result = 'Buzz';
        }
    
        // Sadly this algorithm relies on its own iterative nature to seek the correct position in the
        // binary filter, and so doing bitFizzBuzz(15) in the console will not work.
        // We will need to do something like "for (let i=1;i<upperLimit;i++) {console.log(bitFizzBuzz(i))}"
        // to actually use this. Still need to benchmark this vs the normal implementation below though!
        // We can of course shift the binary string beforehand to account for this, but *lazy*. Edit: Ah
        // heck it, I wrote that thing above.
    
        // Need to either shift the binary filter to the right by 2 digits to prepare for the next iteration, or to reset it if it's done.
        bFilter = bFilter >> 2 | counter << 28;

        console.log(result);
    }
}


// And now for the normal implementations...
function normalFizzBuzz(start, end) {
    let nFilter = [false, false, 'Fizz', false, 'Buzz', 'Fizz', false, false, 'Fizz', 'Buzz', false, 'Fizz', false, false, 'FizzBuzz'];
    for (let i = start; i <= end; i++) {
        let result = nFilter[(i - 1) % 15]; //This is an expensive operation, but how much more expensive is it in JS compared to lower level languages, and is it expensive enough to merit the bit comparison implementation above?? If we wanted to cheat like in the bit comparison implementation, we wouldn't do this and just increment the index each time, subtracting 15 each time we hit 16 for the fastest possible runtime :D
        console.log(((result) ? result : i));
    }
}

function nFizzBuzz(start, end) { //This is the cheaty implementation described above :D
    let nFilter = [false, false, 'Fizz', false, 'Buzz', 'Fizz', false, false, 'Fizz', 'Buzz', false, 'Fizz', false, false, 'FizzBuzz'];
    var r = (start % 16) - 1;
    for (let i = start; i <= end; i++){
        if (r > 14) {r-=15};
        console.log((nFilter[r]) ? nFilter[r] : i);
        r++;
    }
}

// Pick your poison! :D
//bitFizzBuzz(start, end);
//normalFizzBuzz(start, end);
//nFizzBuzz(start, end);