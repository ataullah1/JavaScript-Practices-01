// JavaScript Var Variable
var a = 50;
var aa = 20;
console.log(a + aa);

// JavaScript Let Variable
let b = 100;
b = 101;
let bb = 50;
console.log(b - bb);
let ba = "I'm ";
let baa = 15 + 3;
let bba = ' years old';
console.log(ba + baa + bba);

let time = 5 + 4 + ' AM';
console.log(time);

// JavaScript Boolean
let ab = 50;
let ac = 60;
let ad = 50;
console.log(ab == ad);
console.log(ab == ac);

// Javascript Const Variable
const c = 120;
const ca = 70;
console.log(c + ca);

// JavaScript Array
const names = ['Rahim', 'Karim', 'Salam', 'Barkat'];
console.log(names[0]);
console.log(names[3]);
console.log(names[2]);

// JavaScript Object
const person = {
  firstName: 'Rahim',
  lastName: 'Islam',
  age: 50,
  bestColor: 'green',
};
console.log(
  person.firstName +
    ' ' +
    person.lastName +
    ' is ' +
    person.age +
    ' years old. He likes color ' +
    person.bestColor
);

// Javascript Function
function going(names, times) {
  console.log(names + ' wont to school at' + times + " o'clock.");
}
going('Rohim', '10:00 AM');
going('Karim', '09:00 AM');
going('Rubel', '10:30 AM');
going('Sagor', '09:30 AM');
// =======
function total(a, b, c) {
  return a * c + b;
}
console.log(total(20, 10, 5));
// ======
function myFunction() {
  let a = 90;
  let b = 30;
  console.log(a - b);
}
myFunction();

// JavaScript Object
const bmwCar = {
  type: 'BMW Care',
  model: 2054,
  color: 'Block',
  waight: '800 KG',

  start: function () {
    console.log('The Car is started');
  },

  drive: function () {
    console.log('The Car is drived');
  },
};
console.log(bmwCar.waight);
console.log(bmwCar['type']);
bmwCar.start();
bmwCar.drive();

// ===
const person1 = {
  firstName: 'Md',
  lastName: ' Ataullah',
  age: 18,
  fullName: function () {
    return this.firstName + this.lastName;
  },
};
console.log(person1.fullName());

// ===
