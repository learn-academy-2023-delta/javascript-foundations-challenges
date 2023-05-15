//Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
const multiply3 = (array) => {
    let newArr =[];
    for (let i=0; i < array.length; i++){
        newArr.push(array[i]*3)
        
    }
    return newArr
}

console.log(multiply3(testArr1)); //[ 9, 27, 45, 12, 30 ]
// output: [9, 27, 45, 12, 30]
//Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const newArray = (array) =>{
   let newArray = []
   for (let i= 0; i < array.length; i ++){
    if (array[i] % 2 !== 0){
        console.log(array[i])
    }
    return newArray
   }
}

console.log(newArray(testArr2));
// output: [-7, 3, 5, 13]
//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
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
//Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// output: 10

const addThese2 = []
// output: 0
//Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// output: 1