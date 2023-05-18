// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile
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
 let blackCoffee = new Coffee("black", 0, 0)
 console.log(blackCoffee.coffeeProfile());
 let otherCoffee = new Coffee("black", 1, 2)
 console.log(otherCoffee.coffeeProfile());
// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
class Latte {
    constructor(flavor, milkType, numberOfShots){
        this.flavor = flavor,
        this.milkType = milkType,
        this. numberOfShots = numberOfShots
    }
    latteProfile(){
        return `A ${this.flavor} coffee with ${this.numberOfShots} shots of expresso with ${this.milkType} milk`
    }
}
// Write a method for your Latte class that outputs the latte's profile
let myLatte = new Latte("chocolate", "low-fat", 100)

console.log(myLatte.latteProfile());


// Write the code that makes a regular, single shot latte

// Log the regular, single shot latte's profile
let regLatte = new Latte("regular", "whole", 1 )
console.log(regLatte.latteProfile());
// Write the code that makes a double shot, hazelnut latte with almond milk.
let hazelLatte = new Latte("hazelnut", "almond", 2 )
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(hazelLatte.latteProfile());
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cylinder {
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }
    cylinderVolume(){
        return (Math.PI)*this.height*(this.radius**2)
    }
    volumeRounded(){
        return parseFloat(this.cylinderVolume()).toFixed(4)
    }
}

let firstCylinder = new Cylinder(2, 3)
let secondCylinder = new Cylinder(1, 4)
let thirdCylinder = new Cylinder(3, 5)
console.log(firstCylinder.cylinderVolume());
console.log(firstCylinder.volumeRounded());