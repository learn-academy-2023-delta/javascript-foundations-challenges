
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

blackCoffee = new Coffee("black", null, null)
console.log(blackCoffee.coffeeProfile());

sweetCoffee = new Coffee("sweet", 1, 2)
console.log(sweetCoffee.coffeeProfile());


// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte 
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.


class Latte {
  constructor(flavor, milkType = "none", numberOfShots) {
    this.flavor = flavor,
    this.milkType = milkType,
    this.numberOfShots = numberOfShots
  }
  showLatte() {
    return `The latte has ${this.flavor} flavor, ${this.milkType} milk and ${this.numberOfShots} shots.`
  }
}

brandonsLatte = new Latte("regular", "no" , 1);
console.log(brandonsLatte.showLatte());

chrisLatte = new Latte("hazelnut", "almond", 2);
console.log(chrisLatte.showLatte());



// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cylinder {
  constructor(radius, height) {
    // this.radius = radius
    // this.height = height
    this.volume = Math.PI * radius ** 2 * height
  }
  showRounded() {
    return this.volume.toFixed(4)
  }
}
canOfBeans = new Cylinder(5, 10)
canOfBeans1 = new Cylinder(3, 29)
canOfBeans2 = new Cylinder(24, 3)

console.log(canOfBeans.showRounded())
console.log(canOfBeans1.showRounded())
console.log(canOfBeans2.showRounded())