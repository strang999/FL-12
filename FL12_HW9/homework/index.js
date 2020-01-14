// 1
function convert() {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            arguments[i] += '';
            newArr.push(arguments[i])
        } else if (typeof arguments[i] === 'string') {
            arguments[i] = parseInt(arguments[i]);
            newArr.push(arguments[i])
        }
    }
    return newArr;
}
convert('1', 2, 3, '4');
// 2
function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

executeforEach([1, 2, 3], function (el) {
    console.log(el * 2)
})

// 3
function mapArray(arr, callback) {
    let newArr = [];
    executeforEach(arr, function (el) {
        newArr.push(callback(parseInt(el)));
    })

    return newArr;
}

mapArray([2, '5', 8], function (el) {
    return el + 3
})
// 4
function filterArray(arr, callback) {
    let newArr = [];
    executeforEach(arr, function (el) {
        return callback(el) ? newArr.push(el) : 0
    });
    return newArr;
}

filterArray([2, 5, 8], function (el) {
    return el % 2 === 0
})
// 5
function flipOver(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}
flipOver('hey world');

// 6
function makeListFromRange(arr) {
    let newArr = [];
    for (let i = 1; i <= arr[arr.length - 1]; i++) {
        if (arr[i] !== arr[arr.length - 1]) {
            newArr.push(i)
        }
    }
    return newArr;
}
makeListFromRange([2, 7])