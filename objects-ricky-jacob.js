const person = {
    firstName: "Arthur",
    lastName: "Dent"
}

//   Write the code that accesses the first name of the person object.
console.log(person.firstName)
//   Write the code that accesses the last name of the person object.
console.log(person.lastName)
//   Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
// console.log(person.homePlanet)
//   Update the person object with a method that logs "Arthur Dent is from planet Earth".
person.message = function () {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
}
console.log(person.message())

const product = {
    name: "chair",
    price: 24.99
}
//   Write a function called describeProduct that takes the product object as an argument and logs
//   "The product is a chair. It costs $24.99".
const describeProduct = (object) => {
    return `The product is a ${object.name}. It costs $${object.price}`
}
console.log(describeProduct(product))

//   Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
const totalWithTax = (object) => {
    return `Total: ${parseFloat(object.price * 1.07).toFixed(2)}`
}
console.log(totalWithTax(product))

const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"]
}

//   Write the code that accesses the ingredients property.
console.log(lunch.ingredients)

//   Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])

//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const recipeList = (object) => {
    return `The ingredients for a ${object.name} ${object.type} are ${object.ingredients[0]} ,${object.ingredients[1]}, and ${object.ingredients[2]}`
}
console.log(recipeList(lunch))

//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.goToSnack = function () {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]} ,${this.ingredients[1]}, and ${this.ingredients[2]}`
}
console.log(lunch.goToSnack()) 

const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 }
]
console.log(animals[0].type)
//   Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const catsOnly = (petList) => {
    let catList = []
    for(let i=0; i<petList.length;  i++) {
        if(petList[i].type === "cat"){
            catList.push(petList[i])
        }
    }
    return catList
}
console.log(catsOnly(animals))
//   Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const nameOnly = (petList) => {
    let names = []
    for(let i=0; i<petList.length;  i++) {
        names.push(petList[i].name)
    }
    return names
}
console.log(nameOnly(animals))

//   Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const oldPets = (pets) => {
    let ages = []
    for(let i=0; i<pets.length; i++){
        if(pets[i].age > 10){
            ages.push(pets[i].name)
        }
    }
    return ages
}
console.log(oldPets(animals))

//   Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const petText = (pets) => {
    let messages = []
    for(let i=0; i<pets.length; i++){
        messages.push(`${pets[i].name} is a ${pets[i].type} and has ${pets[i].age}`)
    }
    return messages
}

console.log(petText(animals))