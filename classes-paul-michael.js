class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams() {
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars() {
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }

  // Coffee marker: copy the given Coffee class into a text editor

// Write the code that makes a black coffee object

const blackCoffee = new Coffee ("black", 0, 0)

console.log(blackCoffee)

// Write the code that outputs the black coffee's profile

console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars

const sweetCoffee = new Coffee ("sweet", 1, 2)

console.log(sweetCoffee)

// Write the code that outputs the 1 cream and 2 sugars coffee profile

console.log(sweetCoffee.coffeeProfile())






// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots

class Latte {
    constructor(flavor, milkType, shotNum) {
      this.flavor = flavor.toLowerCase()
      this.milkType = milkType.toLowerCase()
      this.shotNum = shotNum
    }
 latteProfile() {
    return `A ${this.flavor} latte with ${this.milkType} milk, and ${this.shotNum} shot of espresso`
  }
}
// Write a method for your Latte class that outputs the latte's profile




// Write the code that makes a regular, single shot latte

const singleShotLattee = new Latte ("regular", "2%", 1)

// Log the regular, single shot latte's profile

console.log(singleShotLattee.latteProfile())

// Write the code that makes a double shot, hazelnut latte with almond milk.

const newFlavor = new Latte ("Hazelnut", "almond", 2)

// Log the double shot, hazelnut latte with almond milk's profile.


  console.log(newFlavor.latteProfile())

// Volume of a Cylinder: create a class for Cylinder

// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)

class Cylinder{
    constructor(radius, height) {
        this.height = height
        this.radius = radius
        this.pi = 3.14

    } 
    cylinderVolume() {
        return (this.radius * this.pi) ** (this.height * 2)
    }
} 


// Write the code that rounds the volume of the cylinder to four decimal places



// Write the code that creates three unique cylinder objects
