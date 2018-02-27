const checkVowels = (char) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if(vowels.indexOf(char.toLowerCase()) > -1){
        console.log('true');
        return true;
    }
    else{
        console.log('false');
        return false; 
    }
}

checkVowels('a');
checkVowels('A');
checkVowels('e');
checkVowels('i');
checkVowels('o');
checkVowels('u');
checkVowels('b');