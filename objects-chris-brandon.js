// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
  addUp: function() {
    return this.firstName + " " + this.lastName + "is from planet " + this.homePlanet;
  }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.homePlanet = 'Earth')
console.log(person);
console.log(person.addUp());
// Write the code that accesses the first name of the person object.
// Write the code that accesses the last name of the person object.
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".


// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}

const describeProduct = (input) => {
  console.log(`The product is a ${input.name}. It costs ${input.price}`);
}
describeProduct(product)

const totalWithTax = (input) => {
  return (input.price * 0.07 + input.price).toFixed(2);
}
console.log(totalWithTax(product))
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  allStats: function() {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients.join(", ")}.`
  }
}
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients);
// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2]);
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const sammich = (meal) => {
  // return `The ingredients for a ${meal.name} ${meal.type} are ${meal.ingredients[0]}, ${meal.ingredients[1]}, and ${meal.ingredients[2]}.`
  return `The ingredients for a ${meal.name} ${meal.type} are ${meal.ingredients.join(", ")}.`
}
console.log(sammich(lunch));
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.allStats());

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

const petFilter = (array) => {
  return array.filter(value => value.type === "cat")
}
console.log(petFilter(animals))

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

const petMap = (array) => {
  return array.map(value => value.name)
}

console.log(petMap(animals))

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

const age = (array) => {
  let filtered = array.filter(value => value.age > 10)
  return filtered.map(value => value.name)
}

console.log(age(animals))

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

const sentence = (array) => {
  let mapped = array.map(value => value.name + "is a fuzzy cute animal")
  return mapped
}

console.log(sentence(animals))

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}

// Write the code that destructures the author object so that the following code snippet will run successfully:

let [name, genre] = [author.name, author.genre]

console.log(`${name} is a ${genre} author`)

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

const describePokemon = (array) => {
  [species, pokemon_type] = [array.species, array.pokemon_type]
  return `${species} is a ${pokemon_type} pokemon`
}

console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5,
  addUp: function() {
    return .5 * this.base * this.height
  }
}
triangleDimensions.base = 6
console.log(triangleDimensions.addUp())

// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
// 🏔 Stretch Goals
// Consider this variable:

const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"]
  }
}
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf"]