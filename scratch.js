function findMax (arr) {
    arr = arr.sort();
    return arr[arr.length - 1]
}

let arr = [1, 10, 40, 5000, 2];

console.log(findMax(arr));