/*
FOR:

Provides a quick and easy way to perform an action over and over again.
*/

// for (let i = 0; i < 101; i++) {
// 	document.getElementById("test").innerHTML += i + " ,"; // "+=" for concatenation
// }

// var year = new Date().getFullYear();

// for (let i = year; i >= 1900; i--) {
// 	document.getElementById("year").innerHTML +=
// 		"<option value='" + i + "'>" + i + "</option>";
// }

const cars = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"];

var size = cars.length;
for (let i = 0; i < size; i++) {
	document.getElementById("test").innerHTML += cars[i] + ", ";
}
