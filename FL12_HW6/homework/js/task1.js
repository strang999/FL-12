// Your code goes here
let a = +prompt('Please enter value A', '');
let b = +prompt('Please enter value B', '');
let c = +prompt('Please enter value C', '');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Invalid input data');
}
let result = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
let D = Math.pow(b, 2) - 4 * a * c;
console.log(`D=${D}`);
if (D > 0) {
  console.log(`x1=${result} and x2=${result2}`)

} else if (D === 0) {
  console.log(`x=${result}`)
} else {
  console.log('No sulution')
}