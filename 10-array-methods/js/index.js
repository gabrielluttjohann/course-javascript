// ARRAY:
const personArray = new Array("Gabriel", "Cristiano", 30);

// ARRAY METHODS:

// Adds a new element on the begin from an array
personArray.unshift("Pedro");

// Removes the first element from an array:
personArray.shift(); // all index are updated as well.

// Adds a new element in the end from the array:
personArray.push();

// Removes the last element from an array:
personArray.pop();

// Removes any element from an array
delete personArray[0]; // indexes aren't updated, only the deleted element becomes undefined.

// Add new values in a array position
personArray.splice(1, 0, "item added 1", "item added 2"); // 1 - position to put new elements, 2- how many you wanna remove, 3- new values to be added.

// Concatenating arrays:
const person1 = new Array("Gabriel", "Cristiano", 30);

const person2 = new Array("Pedro", "Lorenzo", 25);

const superList = person1.concat(person2);

// Slicing arrays:
const soccerPlayers = new Array(
	"Biro Biro",
	"Ribamar",
	"Pelé",
	"Maradona",
	"Cristiano Ronaldo",
	"Pedro",
	"Vampeta",
	"Dimitri"
);

const Aces = soccerPlayers.slice(2, 5);

// Sort array (Strings):
// (Ascendant)
const sortedPlayers = soccerPlayers.sort();

// (Descendant)
sortedPlayers.reverse();

// Sort array (Numbers):
const numbers = [40, 100, 1, 5, 25, 10];

// (Ascendent)
numbers.sort(function (a, b) {
	return a - b;
});

// Largest number:
function largestNumber(array) {
	return Math.max.apply(null, array);
}

// Lowest number:
function lowestNumber(array) {
	return Math.min.apply(null, array);
}

// Filtering array:
const greaterThan20 = numbers.filter(filtering);

function filtering(value, index, array) {
	return value > 20;
}
