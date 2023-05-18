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

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// Write the code that destructures the author object so that the following code snippet will run successfully:

let { name, genre} = author
 console.log(`${name} is a ${genre} author`)
console.log(name);
console.log(author.name);
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

const describePokemon = (object) => {
    let { species, pokemon_type} = object

    return `${species} is a ${pokemon_type} pokemon`
}

console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
 console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5
}




// Modify the triangleDimensions object to have a method that returns the area of the triangle.
triangleDimensions.areaFinder = function() {
    return (this.base*this.height)/2
 }
 console.log(triangleDimensions);
 console.log(triangleDimensions.areaFinder());
// Write the code that will update the base to be the value of 6.
triangleDimensions.base = 6
console.log(triangleDimensions.areaFinder());
// 🏔 Stretch Goals
// Consider this variable:

const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"],
    2023: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"]
  }
}
// Write the code that logs the name of your cohort.

console.log(learn.cohorts[2023][3]);
let { 2021:c2021, 2022:c2022, 2023:c2023 } = learn.cohorts

// Write the code that uses desstructuring to log the name of your cohort.

console.log(c2023[3]);
//const { cohorts[2021] : { 2022 } } = learn


// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.

const arrayizer = (object) => {
    let array = []
    for (let key in object.cohorts){
    array = array.concat((object.cohorts[key].map(value => key + value)))
    }
    
    return array
}
console.log(arrayizer(learn));
// // output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf"]
