// Your code goes here
let a = +prompt('Please enter the first side');
let b = +prompt('Please enter the second side');
let c = +prompt('Please enter the third side');
if (a === undefined || b === undefined || c === undefined || a === '' || b === '' || c === '') {
    alert('Input values should be ONLY numbers')
} else if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length ');
} else {
    if (a && b && c) {
        if (a === b && b === c && a === c) {
            console.log('Equilateral triangle')
        } else if (a !== b && a !== c && b !== c) {
            console.log('Scalene triangle')
        } else if (a === b && a !== c || a === c && a !== b) {
            console.log('Isosceles triangle')
        }
    } else {
        console.log('Triangle doesn’t exist')
    }
}