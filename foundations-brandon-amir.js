// Javascript Foundations Brandon and Amir

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]

// 1. Write a function with iteration.
// 2. Create a new delcaration for new array.
// 3. Create for loop to multiply the array by 3.
// 4. Return the new delcaration.
// 5. Invoke 


const mult3 = (array) => {
let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 3)
    }
    return newArray
}

console.log(mult3(testArr1)) // output: [9, 27, 45, 12, 30]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

// 1. Write a function with iteration.
// 2. Create new delcaration for new array.
    // 2a. Use conditionals
// 3. Within the for loop use modulo and banger operator for only odd numbers.
// 4. Return the new delcaration.
// 5. Invoke the function.

const odds = (array1) => {
let newArray1 = []
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] % 2 !== 0) {
            newArray1.push(array1[i])
        }
    }
    return newArray1
}

console.log(odds(testArr2)) // output: [-7, 3, 5, 13]

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
  // output: "nicework

  // 1. Create a function with iteration and conditionals.
  // 2. Use typeof method to return only the string.

  const letters = (letter) => {
    let letter1 = ""
    for (let i = 0; i < letter.length; i++) {
        if (letter === letter1) {
            letter1.push(letter[i])
        }
    }
    return letter1
  }

console.log(typeof letters(comboArr))

// DID NOT FINISH