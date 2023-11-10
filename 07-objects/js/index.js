/*
OBJECTS:

Objects are basically variable with many values inside.

Ex: const car = { 
    brand: "ford", 
    model: "ka", 
    year: 2005,
}

The values inside an object are named properties.

Objects can also have methods. A method is a function placed inside a property.

 */

// Literal object
const car = {
	brand: "ford",
	model: "ka",
	year: 2005,

	horn: function () {
		alert("Biiiiii");
	},

	complete: function () {
		return (
			"The brand is: " + this.brand + " and the model is: " + this.model + "."
		);
	},
};

// Calling object attributes:
console.log(car);
console.log(car.brand);
console.log(car["brand"]);
console.log();

// Calling object functions:
car.horn();
alert(car.complete());
