// HOF challenges Brandon and Amir

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.

const arr1 = [3, 9, 15, 4, 10]

const maparr1 = arr1.map(value => value * 10)

console.log(maparr1) 
      //output: [30, 90, 150, 40, 100]

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]

const maparr2 = arr1.map(value => value / 2)

console.log(maparr2)
// // output: [1.5, 4.5, 7.5, 2, 5]



// Create a function that takes in an array of numbers and returns an array with only odd numbers.

const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]

const maparr3 = arr2.filter(value => value % 2 !== 0).map (value => value)

console.log(maparr3)
// // output: [7, 3, 5, 13, -9]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]

const noEven = (array) => {
    return array.split(" ").filter((value, index, array) => value.length % 2 !== 0)
}

console.log(noEven(pumbaa)) // ["a", "wonderful", "ain't", "passing", "craze"]

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

// 1. Create a function with a parameter named array.
// 2. Create an HOF.
// 3. Use typeof to find out the datatype with equality operators.
// 4. invoke and since we are looking for a string, add .join("") to turn the given variable into an string.


const letters = (array) => {
    return array.filter((value, index, array) => {
        return typeof value === "string"
    })
}

console.log(letters(comboArr).join("")) // nicework

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]

// 1. Create a function with a paratmeter named array.
// 2. Create a high order function
// 3. Use filter to obtain the elements we need. [58, "abcd", true]
    // 3a. Use banger operator ! with loose equality operator
// 4. Invoke the function.

const filtered = (array) => {
    return array.filter((value, index, array) => {
    return value !== null && value != false 

    })
}

// How to use index just to log the 0,2,3.

// console.log(false === 0)
// console.log(filtered(filterArrayValues))

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.

const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// 1. Create a function with a parameter named string.
// const str = (array) => {

//     return array.map(value =>{
//         return value.length % 2 === 0
//     })
// }

// console.log(str(makesWackyWords))

// for (let i = 0; i < simba.length; i++) {
//     if (i % 2 === 0) {
//     }
// }

// console.log(simba)