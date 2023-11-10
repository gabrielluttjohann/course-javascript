/*
JSON:

Explaining it in a simple way, JSON is basically a way of converting an object into text and vice versa, text into an object.

It is mainly used to transmit data between systems in a simple way, as the text format is read by practically every programming language.

To work with JSON in JavaScript we use two methods:

JSON.parse() -> Converts standard JSON text into objects

JSON.stringfy() -> Converts objects to standard JSON text
*/

// Object car:
// const car = {
// 	brand: "Fiat",
// 	model: "Uno",
// 	year: 2001,
// };
// document.getElementById("area").innerHTML = car;

// // Converts objects to standard JSON text
// let text = JSON.stringify(car);
// document.getElementById("area").innerHTML = text;

// // JSON.parse() -> Converts standard JSON text into objects
// let obj = JSON.parse(text)
// console.log(car.model)

function searchCEP() {
	let input = document.getElementById("cep").value;

	const ajax = new XMLHttpRequest();
	ajax.open("GET", "https://viacep.com.br/ws/" + input + "/json/");
	ajax.send();

	ajax.onload = function () {
		document.getElementById("text").innerHTML = this.responseText;

		// Text to Object
		let obj = JSON.parse(this.responseText);
		let logradouro = obj.logradouro;
		let bairro = obj.bairro;

		document.getElementById("text").innerHTML =
			"Logradouro: " + logradouro + "<br> Bairro: " + bairro;
	};
}
