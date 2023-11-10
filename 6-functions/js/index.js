/*
FUNCTIONS:

A function in JavaScript is a code block projected to perform a specific task.

It's like a little "Factory" where you make a road and he give you an output.

It can be thought of as "little-programs" designed to do a task that will contribute for all code

A JavaScript Function is performed when "Something" invokes it (call it).
*/

// FIRST
function realToDollar(real, dollarRate) {
	conversion = real / dollarRate;

	return conversion;
}

let real, dollarRate;
real = 10.0;
dollarRate = 5.08;

let realInDollar = realToDollar(real, dollarRate);

alert("The value in real is: " + real + " after conversion: " + realInDollar);

// SECOND
function toCelsius(fahrenheitValue) {
	return (5 / 9) * (fahrenheitValue - 32);
}

var x = toCelsius(77);

alert("The temperature is " + x + "º degrees Celcius.");