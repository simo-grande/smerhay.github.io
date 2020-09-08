function reverseArray(arr) {
    let temp = [];
    let j = 0;

    for (let i = arr.length - 1; i > 0; i--) {
        temp[j] = arr[i];
        temp[arr.length - 1] = arr[0];

        j++;
    }
    return temp;

}
const arr1 = [1, 2, 3, 4, 5];
console.log(reverseArray(arr1));