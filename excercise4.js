//Exercise 4/ A

var num = Math.random();

if (num >= 0.5) {
  alert(num + " = Grater than 0.5");
} else {
  alert(num + " = Lower than 0.5");
};

//Exercise 4/ B

var age = Math.random() * 100;

console.log(age);

if (age < 2) {
  alert(age + " = Bebé");
} else if (age >= 2 && age <= 12) {
  alert(age + " = Niño");
} else if (age >= 13 && age <= 19) {
  alert(age + " = Adolescente");
} else if (age >= 20 && age <= 30) {
  alert(age + " = Joven");
} else if (age >= 31 && age <= 60) {
  alert(age + " = Adulto");
} else if (age >= 61 && age < 75) {
  alert(age + " = Adulto mayor");
} else {
  alert(age + " = Anciano");
};