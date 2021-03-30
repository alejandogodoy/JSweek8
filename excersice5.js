//Exercise 5/ A

var myArray = ["twitter", "whatsapp", "facebook", "instagram", "gmail"];

for (var i = 0; i < myArray.length; i++) {
  alert(myArray[i]);
};

//Exercise 5/ B

for (var i = 0; i < myArray.length; i++) {
  alert(myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1));
}

//Exercise 5/ C

var sentence = "";

for (var i = 0; i < myArray.length; i++) {
  sentence = sentence + " " + myArray[i];
};

alert(sentence);

//Exercise 5/ D

var array = [];

for (var i = 0; i < 10; i++) {
  array.push(i);
};

console.log(array);