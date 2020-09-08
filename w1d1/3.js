function findLongestWord(arr) {
    let max = arr[0].length;
    let temp = [];

    for (let i = 1; i < arr.length; i++) {
        temp = arr[i].length;
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

const words = ["i", "am", "the", "best"];
console.log(findLongestWord(words));