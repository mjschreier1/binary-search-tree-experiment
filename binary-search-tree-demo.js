// This function implements a binary search tree alternative to JavaScript's Array.prototype.indexOf() method.
// Note that it requires the array to already be sorted and only contain unique numbers.
// Notice the time difference when it comes to an array of length 10,000,000
function binarySearchIndexOf(value, sortedArrayOfUniqueNumbers) {
    let low = 0;
    let high = sortedArrayOfUniqueNumbers.length - 1;
    while (low <= high) {
        let mid = low + Math.ceil((high - low) / 2);
        if (value < sortedArrayOfUniqueNumbers[mid]) { high = mid - 1 }
        else if (value > sortedArrayOfUniqueNumbers[mid]) { low = mid + 1 }
        else { return mid }
    }
    return -1;
}

let testOne = [3, 5, 6, 7, 9]
let testTwo = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let testThree = []
let testFour = [1]
let testFive = [3, 6]
let testSix = new Array(10000000).fill(0).map((el, i) => el = i)

// Test cases to ensure the binarySearch method is working correctly
console.log(binarySearchIndexOf(5, testOne)) // 1
console.log(binarySearchIndexOf(5, testTwo)) // 5
console.log(binarySearchIndexOf(0, testThree)) // -1
console.log(binarySearchIndexOf(1, testFour)) // 0
console.log(binarySearchIndexOf(0, testFour)) // -1
console.log(binarySearchIndexOf(6, testFive)) // 1

// Comment out one of the console.log expressions each time to see the difference in execution time
console.time("execution")
console.log(binarySearchIndexOf(9999999, testSix)) // 9999999
// console.log(testSix.indexOf(9999999)) // 9999999
console.timeEnd("execution")