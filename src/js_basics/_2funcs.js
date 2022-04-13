function helloWorld() {
  console.log('Hello World!1');
}
helloWorld();
function helloWorld2() {
  return 'Hello World!2';
}
let str = helloWorld2();
console.log(str);
function helloUser(user) {
  return `Hello ${user}!`;
}
let name = 'Audhil';
let str2 = helloUser(name);
console.log(str2);
//  function expression - kim: functions are considered as objects in Js
let add = function (a, b) {
  return a + b;
};
console.log(add); //  [Function: add]
let res = add(2, 4);
console.log(res); //  6
let sum = add;
console.log(sum); //  [Function: add]
console.log(sum(4, 5)); //  9
//  default values to params
let add2 = function (a, b, c = 3) {
  console.log(a, b, c);
  return a + b + c;
};
console.log(add2(1, 2)); //  6
//  arrow function
let arFunc1 = (a, b) => {
  return a + b;
};
console.log(arFunc1(1, 2)); //  3
let arFunc2 = (a, b) => a - b;
console.log(arFunc2(19, 3)); //  16
//  object methods
let laptop = {
  cpu: 'i9',
  ram: 16,
  brand: 'HP',
  greet: function () {
    console.log('Hello Monkey!');
  },
};
laptop.greet(); //  Hello Monkey!

let laptop2 = {
  cpu: 'i8',
  ram: 24,
  brand: 'Apple',
  getConfig: function () {
    console.log(`laptop config is : ${this.cpu}, ${this.ram}, ${this.brand}`);
  },
  compare: function (laptop) {
    if (this.cpu > laptop.cpu) return this;
    else return laptop;
  },
};
laptop2.getConfig(); //  laptop config is : i8, 24, Apple
//  { cpu: 'i9', ram: 16, brand: 'HP', greet: [Function: greet] }
if (laptop.cpu > laptop2.cpu) console.log(laptop);
else console.log(laptop2);
let laptop3 = {
  cpu: 'i3',
  ram: 2,
  brand: 'ASUS',
  getConfig: function () {
    console.log(`laptop config is : ${this.cpu}, ${this.ram}, ${this.brand}`);
  },
};
/*
  * {
    cpu: 'i8',
    ram: 24,
    brand: 'Apple',
    getConfig: [Function: getConfig],
    compare: [Function: compare]
  }
*/
console.log(laptop2.compare(laptop3));
