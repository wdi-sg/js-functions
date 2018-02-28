function letterCount(word) {
	var count = {};
	for (var i = 0; i < word.length; i ++) {
		var letter = word[i];
		if (count[letter]) {
			count[letter]++;
		} else {
			count[letter] = 1;
		}
	}
	return count;
};

letterCount('apple');