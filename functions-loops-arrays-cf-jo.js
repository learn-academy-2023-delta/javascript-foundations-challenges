// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
console.log(testArr1.map(x => x * 3))
// output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
console.log((testArr2.filter( x => x % 2 !== 0)));
// output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
console.log(comboArr.filter(x => typeof x === typeof 'string').join(''));

const combo = (input) => {
  let arr = [];
  let string = ''
  for(i = 0; i < input.length; i++) {
    if(typeof input[i] === typeof '') {
      arr.push(input[i]);
    }
  }
  return arr.join('');
}
console.log(combo(comboArr));
// output: "nicework"
// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// output: 10
const sumArray = (array) => {
  let counter = 0
  for(let i = 0; i < array.length; i++){
counter += array[i];
console.log("x");
  }
  return counter
}
console.log(sumArray(addThese1));
const addThese2 = []
// output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// output: 1