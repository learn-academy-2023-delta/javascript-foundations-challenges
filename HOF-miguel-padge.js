// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]

const mult10 = arr1.map(value => value * 10)
console.log(mult10)// we got [ 30, 90, 150, 40, 100 ]
// // output: [30, 90, 150, 40, 100]

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
const arr2 = [3, 9, 15, 4, 10]

const div2 = arr2.map(value => value / 2)
console.log(div2)// we got [ 1.5, 4.5, 7.5, 2, 5 ]
// // output: [1.5, 4.5, 7.5, 2, 5]

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr3 = [2, 7, 3, 5, 8, 10, 13, -9]

const div3 = arr3.filter(value => value % 2 !== 0)
console.log(div3)// we got [ 7, 3, 5, 13, -9 ]
// // output: [7, 3, 5, 13, -9]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"

const pumbaa =
"Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze";

function getWordsWithOddLengths(str) {
    return str.split(" ").filter(value => value.length % 2 !== 0);
  }
  
  const result = getWordsWithOddLengths(pumbaa);
  console.log(result); // we got [ 'a', 'wonderful', "ain't", 'passing', 'craze' ]

// function getWordsWithOddLengths(str) {
//     const words = str.split(" ")
//     const result = []
  
//     for (let i = 0; i < words.length; i++) {
//       const word = words[i]
//       if (word.length % 2 !== 0) {
//         result.push(word)
//       }                                      //Same problem but using a for loop
//     }
  
//     return result
//   }
  
//   const result = getWordsWithOddLengths(pumbaa)
//   console.log(result)

  

//   // output: ["a", "wonderful", "ain't", "passing", "craze"]

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

     function letterStr(str) {
        return str.filter(item => typeof item === "string").join("")// we got nicework
  }
// const result2 = letterStr(comboArr)
console.log(letterStr(comboArr))


// // output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]

 //we want true, 58, "abcd",

 const filterFalsyValues = item => item.filter(Boolean)//.map(item => String(item))

console.log(filterFalsyValues(filterArrayValues))

// // output: [58, "abcd", true]

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]

//create function 

//check each index if odd 
  //do modulo of index
//if odd capitalize
  //.toUpperCase

//return array

const everyOther = (arrayAgain) => {

    wordArray = arrayAgain.map(word => word.split("") )
    console.log(wordArray)

//     // const name = (letter) => { for(let i = 0; i < letter.length; i++){
//     //     if (i % 2 === 1){
//     //      return   letter[i].toUpperCase()
//     //     }
//     // }
//  }
}
console.log(everyOther(makesWackyWords))
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"

// // output: "jvscrpt s wsm"

// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"

// // output: [7, 8, 2, 1, 5, 4]
