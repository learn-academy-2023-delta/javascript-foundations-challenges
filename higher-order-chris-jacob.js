// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr19 = [3, 9, 15, 4, 10]

const arrayMultiplier = (arr) => {
  return arr.map(value => value * 10)
}
console.log(arrayMultiplier(arr19)); //[ 30, 90, 150, 40, 100 ]
// output: [30, 90, 150, 40, 100]

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
const arr1 = [3, 9, 15, 4, 10]

const arrayDividor = (arr) => {
  return arr.map(value => value / 2)
}
console.log(arrayDividor(arr1))
// output: [1.5, 4.5, 7.5, 2, 5]

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]

const oddArray = (array) => {
  return array.filter(value => value % 2 !== 0)
}
console.log(oddArray(arr2));
// output: [7, 3, 5, 13, -9]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa =
  "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"

const stringOddSplitter = (string) => {
  let temparray = string.split(' ')
  return temparray.filter(value => value.length %2 !== 0)
}
console.log(stringOddSplitter(pumbaa));
// output: ["a", "wonderful", "ain't", "passing", "craze"]
// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]
// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"
// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328"
// output: [7, 8, 2, 1, 5, 4]