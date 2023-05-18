// Jest challenges

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

describe("ans", () => {
    it("returns a string that says drink coffee or keep working", () => {
        expect(ans(true)).toEqual("drink coffee")
        expect(ans(false)).toEqual("keep working")
    })
})
 // ● ans › returns a string that says drink coffee or keep working

 const ans = (boolean) => {
    if(boolean) {
        return "drink coffee" 
    } else if(!boolean) {
        return "keep working"
    }
 }
// pass

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

describe("stress", () => {
    it("returns a string that says 'relax' or 'keep going'." , () => {
        expect(stress(true)).toEqual("relax")
        expect(stress(false)).toEqual("keep going")
    })
})
// ● stress › returns a string that says 'relax' or 'keep going'.

const stress = (boolean) => {
    if(boolean) {
        return "relax"
    } else if(!boolean) {
        return "keep going"
    }
}
// pass

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

describe("money", () => {
    it("returns 'in budget' if price is lower than $300.", () => {
        expect(money(300)).toEqual("out budget")
        expect(money(295)).toEqual("in budget")
    })
})
// ● money › returns 'in budget' if price is lower than $300.

const money = (number) => {
    if(number >= 300) {
        return "out budget"
    } else if(number < 300) {
        return "in budget"
    }
}
// pass

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

describe("smallNumb", () => {
    it("returns the smaller number between the two numbers.", () => {
        expect(smallNumb(2, 3)).toEqual(2)
    })
})
// ● smallNumb › returns the smaller number between the two numbers.

const smallNumb = (num1, num2) => {
    if(num1 < num2) {
        return num1
    } else if( num1 > num2) {
        return num2
    } else {
        return "They are equal"
    }
}
// pass

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.

describe("oddNum", () => {
    it("returns true if number is odd, false if number is even.", () => {
        expect(oddNum(3)).toEqual(true)
        expect(oddNum(2)).toEqual(false)
    })
})
// ● oddNum › returns true if number is odd, false if number is even.

const oddNum = (num) => {
    if(num % 2 !== 0) {
        return true
    } else if(num % 2 === 0) {
        return false
    } else {
        return "something went wrong"
    }
}
// pass

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.

describe("fruit", () => {
    it("returns the color of the fruit.", () => {
        expect(fruit("banana")).toEqual("yellow")
        expect(fruit("apple")).toEqual("red")
        expect(fruit("grape")).toEqual("purple")
    })
})
//   ● fruit › returns the color of the fruit.

const fruit = (fruitType) => {
    if(fruitType === "banana") {
        return "yellow"
    } else if(fruitType === "apple") {
        return "red"
    } else if(fruitType === "grape") {
        return "purple"
    } else {
        return "something went wrong"
    }
}
// pass


// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
describe("rick", () => {
    it("returns Morty.", () => {
        expect(rick()).toEqual("Morty")
        
    })
})

const rick = () => "Morty"


// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.


describe("greeter", () => {
    it("returns a hello string with the persons name.", () => {
        expect(greeter("Stan")).toEqual("Hello Stan")
        
    })
})

const greeter = (name) => {
    return `Hello ${name}`

}
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () => {
    it("tests if a number is even or odd", () => {
        expect(oddOrEven(2)).toEqual("Even")
        expect(oddOrEven(3)).toEqual("Odd")
        
    })
})

const oddOrEven = (num) => {
    if (num % 2 === 0) {
        return "Even"
    } else  if (num % 2 !== 0) {
        return "Odd"
    }

}


// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
    it("doubles a number", () => {
        expect(doubler(2)).toEqual(4)
        
        
    })
})

const doubler = (num) => num*2
    

// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("multiply", () => {
    it("multiplies two numbers", () => {
        expect(multiply(2, 4)).toEqual(8)
        
        
    })
})

const multiply = (num1, num2 ) => num1*num2
   


// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisibleBy", () => {
    it("tests if a number is divisible by its friend", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
        
        
    })
})

const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    } else  {
        return "the numbers are not evenly divisible"
    }
    }




// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
describe("fizzbuzz", () => {
    it("tests if a number is a multiple of stuff", () => {
        expect(fizzbuzz(10)).toEqual("buzz")
        expect(fizzbuzz(3)).toEqual("fizz")
        expect(fizzbuzz(30)).toEqual("fizzbuzz")
        expect(fizzbuzz(4)).toEqual(4)
        
        
    })
})

const fizzbuzz = (num1) => {
    if (num1 % 3 === 0 && num1 % 5 === 0) {
        return "fizzbuzz"
    }else if(num1 % 3 === 0){
        return "fizz"
    }else if (num1 % 5 === 0){
        return "buzz"
    }else return num1

}




// Create the function that will make the test pass.