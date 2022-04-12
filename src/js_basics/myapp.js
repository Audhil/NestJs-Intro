//  tutorial: https://www.youtube.com/watch?v=PlbupGCBV6w&list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4&index=1&ab_channel=Telusko
console.log('jack and jill');
let num = 4;
console.log(num);
let name = 'audhil';
console.log(name);
const pi = 3.14;
console.log(pi);
let num_float = 4.3;
console.log(num_float);
console.log(typeof num_float);
console.log(typeof name);
let hexNo = 0xff;
let exponential = 1.4e13;
let num_ = 100_00_000;
let infinity = 5 / 0;
let NegInfinity = -5 / 0;
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
let bigInt = 100385340840242042n;
// console.log(bigInt + 10); //  TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(bigInt + 3n); //  100385340840242045n
let name1 = 'mohammed';
let name2 = 'audhil';
let name3 = name1 + name2;
let bool = 5 > 6;
console.log(bool);
console.log(typeof bool);
let user = null;
console.log(user); //  null
console.log(typeof user); //  object
let anotherUser;
console.log(anotherUser); //  undefined - equal to NULL in Java?
console.log(typeof anotherUser); //  undefined - equal to NULL in Java?
let d = 9;
console.log(d / 'audhil'); //  NaN - not a number
console.log(typeof (d / 'audhil')); //  number
//  type conversion
let num1 = 9;
console.log(num1, typeof num1); //  9 number
let num2 = String(9);
console.log(num2, typeof num2); //  9 string
let num3 = Number('9');
console.log(num3, typeof num3); //  9 number
//   type coercion
let x;
console.log(x, typeof x); //  undefined undefined
x = 8;
console.log(x, typeof x); //  8 number
x = x + '';
console.log(x, typeof x); //  8 string
x = x - 2;
console.log(x, typeof x); //  6 number
x = x + '';
x = x + 2;
console.log(x, typeof x); //  62 string
x = +x + 1; //  unary operator converts string to number
console.log(x, typeof x); //  63 number
x = x + '';
x = -x + 1; //  unary operator converts string to number
console.log(x, typeof x); //  -62 number
x = !x;
console.log(x, typeof x); //  false boolean
//  truthy & falsy values
console.log(Boolean(9)); //  true
console.log(Boolean(-9)); //  true
console.log(Boolean(0)); //  false
console.log(Boolean(null)); //  false
console.log(Boolean(undefined)); //  false
console.log(Boolean('audhil')); //  true
let y = '123 Audhil';
console.log(y, typeof y); //  123 Audhil string
y = Number(y);
console.log(y, typeof y); //  NaN number
y = '123 Audhil';
y = parseInt(y);
console.log(y, typeof y); //  123 number
y = 'M123 Audhil';
y = parseInt(y);
console.log(y, typeof y); //  NaN number
