// Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(str) {
    var reversed = "";
    for (var i = 0; i < str.length; i++) {
        reversed += str[str.length - 1 - i];
    }
    return reversed;
}

console.log(reverseString("jag testar") === "ratset gaj");