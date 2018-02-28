function sillySum(num) {
	var result = 0
	for (var i = 0; i < num.length; i ++) {
		result += num[i] * i
	}
	return result;
};

sillySum([3, 4, 6]);