maxOfThree = (num1, num2, num3) => {
	return Math.max(num1, num2, num3);
	};

console.log(maxOfThree(1, 2, 3));

isCharacterAVowel = (char) => {
	if (["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) > -1) {
		console.log(true);
	} else {
		console.log(false);
	}
};

isCharacterAVowel("a");

sumArray = (arr) => {
	let total = 0;
	for(i=0; i < arr.length; i++) {
		total += arr[i];
	}
	console.log(total);
};

multiplyArray = (arr) => {
	let total = 1;
	for(i=0; i < arr.length; i++) {
		total = total * arr[i];
	}
	console.log(total);
};

multiplyArray([1, 2, 3, 4]);

sillySum = (arr) => {
	let total = 0;
	for (i=0; i < arr.length; i++) {
		total += arr[i] * i;
	}
	console.log(total);
};
const arr = [1, 2, 3, 4];
sillySum(arr);

reverseString = (stringed) => {
	let reversed = "";
	for(i=(stringed.length - 1); i>=0; i--) {
		reversed += stringed[i];
		console.log(i);
	}
	console.log(reversed);
};

reverseString("hello");

findLongestWord = (arr) => {
	let longest = "";
	for (i=0; i < arr.length; i++) {
		if (arr[i].length > longest.length) {
			longest = arr[i];
		}
	}
	console.log(longest);
};

findLongestWord(["apple", "boy", "asdkajsdka"]);

letterCount = (word) => {
	let count = {};
	// remove spaces and punctations
	word = word.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+ ]/g, "");
	for (i=0; i<word.length; i++) {
		let char = word[i].toLowerCase();
		if (char in count) {
			// does not exist
			count[char] += 1;
		} else {
			// exist already
			count[char] = 1;
		}
	}
	console.log(count);
};

letterCount("happy to sleep!?");

isPrime = (num) => {
	for (i=2; i<num; i++) {
		if (num % i === 0 ) {
			return false;
		}
	}
	return true;
};

console.log(isPrime(6));

primes = (numb) => {
	for (j=1; j<=numb; j++) {
		if (isPrime(j)) {
			console.log(j);
		}
	}
};

primes(200);

const arr1 = [7, 2, 1, 3, 10];
const arr2 = [8, 2, 4 ,5, 1, 11];

merge = (arr1, arr2) => {
	let combinedArray = arr1;
	for (i=0; i<arr2.length; i++) {
		if (!combinedArray.includes(arr2[i])) {
			combinedArray.push(arr2[i]);
		}
	}
	// return combinedArray;
	console.log(combinedArray.sort((a, b) => {return a - b}));
};
merge(arr1, arr2);
