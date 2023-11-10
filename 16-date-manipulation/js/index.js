// Date manipulation with JavaScript

// Basic command to get date
let date = new Date();

// Get current year:
let year = date.getFullYear();

// Get current month (0 (January) -> 11 (December)):
let month = date.getMonth();

// Show month in wrote format
const yearMonths = new Array(
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
);

let wroteMonth = yearMonths[date.getMonth()];

// Get month day:
let monthDay = date.getDate();

// Get weekday:
let weekDay = date.getDay();

const weekDays = new Array(
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
);

// Get hour
let hour = date.getHours();

// Get minutes
let minutes = date.getMinutes();

// Get hour
let seconds = date.getSeconds();

// Get milliseconds
let milliseconds = date.getMilliseconds();

// get the date in Brazilian standard
let brazilianDate = date.toLocaleString("pt-br", { dateStyle: "short" });

// or

d = new Date();
monthDay = d.getDate();
month = d.getMonth() + 1;
year = d.getFullYear();

let dateDefaultBrazil = addZero(monthDay) + "/" + addZero(month) + "/" + year;

function addZero(x) {
	return x < 10 ? "0" + x : "" + x;
}

// Compare dates
var today = new Date();
var expiration = new Date(2022, 0, 15);

if (today > expiration) {
	console.log("Your account is expired!");
} else {
	console.log("It hasn't expired yet, everything is fine.");
}

// Difference between two dates in days
var initialDate = new Date();
var finalDate = new Date(2023, 11, 31);

var timeDifference = dataFinal.getTime() - initialDate.getTime();

var daysDifference = Math.ceil(timeDifference / (24 * 60 * 1000));
