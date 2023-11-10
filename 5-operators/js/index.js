/* 
We're going to understand Operators:

-> JavaScript operators are used to assign and compare values, execute aritimetics operations and much more.

The signals we use are: + - * / = ++ -- += -= *= **= /= && || and so on...

Are separated into 6 columns:
*/

// 1) Aritimetic Operators (Mathematical):
var x, y, sum;
x = 1;
y = 2;

// 2) Assignment Operators:
sum = 1 * 2; // =

// 3) Sequential Operators:
var value1, value2;
value1 = "Gabriel";
value2 = "Cristiano";

total = value1 + value2; // concatenation +

// 4) Comparational Operators:
total = value1 == value2; // Comparating value / Result: False
total = value1 === value2; // Comparating value and type / Result: False
total = value1 != value2; // Comparating value / Result: True
total = value1 !== value2; // Comparating value and type / Result: True

// 5) Conditional Operators:
var age, voter;
age = 18;
voter = age >= 18 ? "Yes, voter" : "Non-voter"; // if yes, else

// 6) Logical Operators
result = (age > 60 && age < 70); // && = and
result = (age === 60 || age === 70); // || = or
result = !(age > 60); // ! = not
