// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("tired", () => {
  it("returns drink coffee or keep working", () => {
      expect(tired("yes")).toEqual("drink coffee")
      expect(tired("no")).toEqual("keep working")
  })
}) 

// Create the function that will make the test pass.
const tired = (answer) => {
  if(answer === "yes") {
   return "drink coffee"
   } else {
    return "keep working"
  }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("stressed", () => {
  it("returns relax or keep going", () => {
    expect(stressed("yes")).toEqual("relax")
    expect(stressed("no")).toEqual("keep going")
  })
})
// Create the function that will make the test pass.
const stressed = (solution) => {
  if(solution === "yes") {
    return "relax"
  } else {
    return "keep going"
  }
}
// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("price", () => {
  it("returns 'in budget' if less than $300", () => {
    expect(price(amount)).toEqual("in budget")
  })
})
// Create the function that will make the test pass.
let amount = 100
const price = (cost) => {
  if(cost < 300) {
    return "in budget"
  }
}
// Write the test for a function that takes in two numbers and returns the smaller number.
describe("number", () => {
  it("returns the smaller of two numbers", () => {
    expect(number(num1, num2)).toEqual(smaller)
  })
})
// Create the function that will make the test pass.
let num1 = 14;
let num2 = 10;
const number = (num1, num2) => {
  if(num1 < num2) {
    return smaller = num1;
  } else {
    return smaller = num2;
  }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.

describe("isOdd", () => {
  it("returns odd if number is odd", () => {
    expect(isOdd(num)).toEqual("number is odd")
  })
})


// Create the function that will make the test pass.
let num = 3
const isOdd = (input) =>  {
  if(input % 2 !== 0){
    return "number is odd"

  }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruit", () => {
  it("returns yellow if banana red if apple purple if grape", () => {
    expect(fruit("banana")).toEqual("yellow")
    expect(fruit("apple")).toEqual("red")
    expect(fruit("grape")).toEqual("purple")
  })
  })

// Create the function that will make the test pass.

const fruit = (input) => {
  return input === "banana" ? "yellow"
  : input === "apple" ? "red"
  : input === "grape" ? "purple"
  : "sorry" ;
}
 
// Write the test for a function called rick that returns "Morty".

describe("pickle", () => {
it("returns morty", () => {
expect(pickle()).toEqual("Morty")
})

}) 



// Create the function that will make the test pass.

const pickle = () => {
  return "Morty"
}
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.