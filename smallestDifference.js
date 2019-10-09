function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b)
    arrayTwo.sort((a, b) => a - b)

    let idxOne = 0
    let idxTwo = 0
    let smallest = Infinity
    let difference = Infinity
    let smallestPair = [];

    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let firstNum = arrayOne[idxOne];
        let secondNum = arrayTwo[idxTwo];
        if (firstNum < secondNum) {
            difference = secondNum - firstNum
            idxOne++
        } else if (firstNum > secondNum) {
            difference = firstNum - secondNum
            idxTwo++
        } else {
            return [firstNum, secondNum]
        }
        if (smallest > difference) {
            smallest = difference;
            smallestPair = [firstNum, secondNum]
        }
    }
    return smallestPair
}

