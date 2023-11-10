/* 
We're going to understand variables

Variables are "containers" where we can store informations that may vary, is this, may have any value type.

In JavaScript we have 3 key-words to declare variables:
-> var
-> let
-> const
*/

// VAR
// var - DECLARATION 1:
var x = 2;
var y = 3;
var sum = x + y;
alert(sum);

// var - DECLARATION 2:
var x, y, sum;
x = 2;
y = 3;
sum = x + y;
alert(sum);

// LET
// Cannot be redeclared. For instance:
/* 
let person = "Gabriel";
let person = "João"; 
*/

let x = 10; // Here it's 10

{
	let x = 2; // Here it's 2
}

// Here will be 10 as well
document.getElementById("text").innerHTML = x;

// CONST
// Cannot be changed. For instance:
const x = 10;

{
	// will generate an error message, because cannot be changed
	// const x = 2;
}

// will generate an error message, because cannot be changed
// const x = 5;
