function findNumbers (num) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let returnArr = [];
    for (let i = 0; i < num; i++) {
        let randomNum = Math.floor(Math.random() * arr.length);
        returnArr.push(arr[randomNum]);
        arr.splice(randomNum, 1);
    }
    return returnArr;
}

console.log(findNumbers(10));
