function sillySum(arr) {
    return arr.map((currentValue, index) => currentValue * index).reduce((accumulator, currentValue) => accumulator + currentValue)
}