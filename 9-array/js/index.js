/* 

JavaScript arrays are used to store multiple values in a single variable. Unlike objects, which work with properties or "names" that don't have indexes, items inside an array are accessed by their position.

Imagine an array as a list of items, with each item's position determined by its order inside the array.

For example, consider the array:

const products = ["rice", "beans", "milk"];

products[0] (item at index 0) contains the value "rice".
products[1] (item at index 1) contains the value "beans".

And so on...
*/

// const products = ["rice", "beans", "milk"];

// or:

// ARRAYS:
const personArray = new Array("Gabriel", "Cristiano", 30);

// OBJECTS:
const personObject = {
	name: "Gabriel",
	surname: "Cristiano",
	age: 30,
};

// USING ARRAYS:
const products = new Array("rice", "bean", "milk");

// First element of an array.
products[0];

// Last element of an array
products[products.length - 1];

// Array length
products.length;

// Adds in the array a new element (in the end)
products.push("Brazilian");
products[personArray.length] = "Married";

// Check if it the variable is an array
Array.isArray(products);
