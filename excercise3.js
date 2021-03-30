//Exercise 3/ A

var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log("The 5th month is: ", months[4], " and the 11th month is: ", months[10]);

//Exercise 3/ B

console.log("Sorted alphabetically: ", months.sort());

//Exercise 3/ C

months.unshift("Alejandro");
months.push("Godoy");

console.log("Exercise C: ", months);

//Exercise 3/ D

months.shift();
months.pop();

console.log("Exercise D: ", months);

//Exercise 3/ E

console.log("Array in reverse, exercise E: ", months.reverse());

//Exercise 3/ F

console.log("String and - , exercise F: ", months.join(" - "));

//Exercise 3/ G

var monthsArray = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var monthsCut = monthsArray.slice(4, 11);

console.log("The new array cut /Exercise G: ", monthsCut);