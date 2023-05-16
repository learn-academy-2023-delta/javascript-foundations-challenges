// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
const multiplier = arr1.map((value) => {
    return value * 10
})
console.log(multiplier)
// output [30, 90, 150, 40, 100]

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.

const arr2 = [3, 9, 15, 4, 10]
const divider = arr2.map((value) => value / 2)

console.log(divider)
// output: [1.5, 4.5, 7.5, 2, 5]

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr3 = [2, 7, 3, 5, 8, 10, 13, -9]
const onlyOdd = (arr3) => {
    return arr3.filter((value) => value % 2 !== 0)
}
console.log(onlyOdd(arr3))
// output: [7, 3, 5, 13, -9]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa =
"Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
const onlyOddWords = (pumba) => {
    return pumbaa.split(" ").filter((value) => value.length % 2 !== 0)
}
console.log(onlyOddWords(pumbaa))
// output: ["a", "wonderful", "ain't", "passing", "craze"]

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
const makeWord = (comboArr) => {
    return comboArr.filter((value)  => typeof(value) === typeof("a"))
}
console.log(makeWord(comboArr).join(""))
// output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
const trashValues = (cleanList) => {
    return cleanList.filter(value => {
        return value !== false && value !== null && value !== 0 && value !== ""
    })
}
console.log(trashValues(filterArrayValues))
// output: [58, "abcd", true]

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.

const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
const editWords = (arr) => {
    return arr.map(value => {
        let newWord = ""
        for(i=0; i<value.length; i++){
            if(i%2!==0){
                newWord += value[i].toUpperCase()
            } else {
                newWord += value[i]
            }
        }
        return newWord
    })
}
const wackyWords = editWords(makesWackyWords)
console.log(wackyWords)
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
const removeVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const arr6 = str.split("").filter(char => !vowels.includes(char))
    return arr6.join("")
}
console.log(removeVowels(str))
// output: "jvscrpt s wsm"
