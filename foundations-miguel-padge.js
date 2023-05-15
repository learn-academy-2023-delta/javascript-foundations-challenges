// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]
 
const mult3 = (array) => {
let newArray = []
    for (let i = 0; i < array.length; i++ ) {
        newArray.push(array[i] * 3)
    }
    return newArray
}
console.log(mult3(testArr1)) // We got [ 9, 27, 45, 12, 30 ] 

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];

const oddNum = (array) => {
  return array.filter((num) => num % 2 === 1);
};

console.log(oddNum(testArr2));



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
// output: "nicework"
// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// output: 10

const addThese2 = []
// output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// output: 1