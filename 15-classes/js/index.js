/*
In 2015 the "classes" were introduced in the java script. Classes are an old concept in programming and several languages use them. But in JavaScript this is relatively new, so even experienced programmers don't know how to use them very well.

Basically, classes are like "Factories" for creating objects.
It can be said that they are "special functions" for creating objects.

Just like a real-life a factory needs machines to build objects, Classes in JavaScript use a method called constructor() to manufacture objects.
*/

class Car {
	constructor(brand, model, year) {
		this.brand = brand;
		this.model = model;
		this.year = year;
	}

	horn() {
		return this.model + " horned: BIIIIIIIIIII";
	}
}

// Instantiating
const uno = new Car("Fiat", "Uno", 2001);
const gol = new Car("Volkswagen", "Gol", 2013);

// Printing
console.log(uno);
console.log(gol.year);
console.log(gol.horn())