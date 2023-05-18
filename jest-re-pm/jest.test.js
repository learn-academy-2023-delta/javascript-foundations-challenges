// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("areYouTired", () => {
  it("returns drink coffee or keeping working", () => {
      expect(areYouTired("are tired")).toEqual("drink coffee")

      expect(areYouTired("not tired")).toEqual("keep working")
  })
})

const areYouTired = (string) => {
  if(string === "are tired"){
      return "drink coffee"
  } else if(string === "not tired"){
      return "keep working"
  }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed
describe("areYouStressed", () => {
  it("returns relax or keep going", () => {
      expect(areYouStressed("are stressed")).toEqual("relax")
      
      expect(areYouStressed("not stressed")).toEqual("keep going")
  })
})

const areYouStressed = (string) => {
  if(string === "are stressed"){
      return "relax"
  } else if(string === "not stressed"){
      return "keep going"
  }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("inBudget", () => {
  it("returns in budget", () => {
      expect(inBudget(299)).toEqual("in budget")
  })
})

const inBudget = (price) => {
  if(price < 300){
      return "in budget"
  }
}


// Write the test for a function that takes in two numbers and returns the smaller number.
describe("smallestNums", () => {
  it("returns the smallest number", () => {
      expect(smallestNums(4, 10)).toEqual(4)
  })
})

const smallestNums = (num1, num2) => {
  if(num1 < num2){
      return num1
  } else if(num2 < num1){
      return num2
  }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
describe("oddNum", () => {
  it("returns odd", () => {
      expect(oddNum(3)).toEqual("odd")
  })
})

const oddNum = (num) => {
  if(num % 2 !== 0){
      return "odd"
  }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.

describe("coloredFruit", () => {
  it("returns color of fruit", () => {
      expect(coloredFruit("banana")).toEqual("yellow")
      expect(coloredFruit("apple")).toEqual("red")
      expect(coloredFruit("grape")).toEqual("purple")
  })
})

const coloredFruit = (fruit) => {
  if(fruit === "banana"){
      return "yellow"
  } else if (fruit === "apple"){
      return "red"
  } else if(fruit === "grape"){
      return "purple"
  }
}

// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.

describe("rick",() => {
  it("returns Morty", () => {
    expect(rick()).toEqual("Morty")
  })
} )

const rick = () => {
  return "Morty"
}


// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.

describe("greeter", () => {
  it("returns a greeting with a name", () => {
    expect(greeter("Padge")).toEqual("What up Padge")
  })
})

const greeter = (name) => {
  return `What up ${name}`
}
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.

describe("oddOrEven", () => {
  it("returns odd or even", () => {
    expect(oddOrEven(3)).toEqual("odd")
    expect(oddOrEven(2)).toEqual("even")
  })
})

const oddOrEven = (num) => {
  if(num % 2 !== 0){
      return "odd"
  } else if(num % 2 === 0){
    return "even"
  }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
describe("doubler", () => {
  it("returns number multiplied by 2", () => {
    expect(doubler(2)).toEqual(4)
  })
})

const doubler = (num) => {
  return num * 2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.

describe("multiply", () => {
  it("returns the product of two numbers", () => {
    expect(multiply(2, 4)).toEqual(8)
  })
})

const multiply = (num1, num2) => {
  return num1 * num2
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
describe("divisible", () => {
  it("returns whether the first number is evenly divisible by the second", () => {
    expect(divisible(10, 5)).toEqual("10 is evenly divisible by 5")
  })
})

const divisible = (num1, num2) => {
  if(num1 % num2 === 0){
      return `${num1} is evenly divisible by ${num2}`
  }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.
describe("fizzbuzz", () => {
  it("return the word fizz if a multiple of 3, the word buzz if multiple of 5, the word fizzbuzz if multiple of 3 and 5.", () => {
    expect(fizzbuzz(3)).toEqual("fizz")
    expect(fizzbuzz(5)).toEqual("buzz")
    expect(fizzbuzz(15)).toEqual("fizzbuzz")
  })
})

const fizzbuzz = (num) => {
  if(num % 3 === 0 && num % 5 === 0){
    return "fizzbuzz" 
  } else if(num % 5 === 0){
    return "buzz"
  } else if(num % 3 === 0){
    return "fizz"
  }
}