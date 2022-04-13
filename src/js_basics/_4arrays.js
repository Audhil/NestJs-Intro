// let values = new Array(); //  this is not working
let values = [];
console.log(values); //  []
values = [1, 2, 4];
console.log(values); //  [ 1, 2, 4 ]
console.log(values.length); //  3
values.push(5); //  adds data at end
values.push(15);
console.log(values); //  [ 1, 2, 4, 5, 15 ]
values.pop(); //  removes data from end
console.log(values); //  [ 1, 2, 4, 5 ]
//  fetch values
console.log(values[0]); //  1
console.log(values[9]); //  undefined
//  different types of data
let names = ['audhil', 'mohammed', 'Java'];
console.log(names); //  [ 'audhil', 'mohammed', 'Java' ]
names[3] = 'Okay';
console.log(names); //  [ 'audhil', 'mohammed', 'Java','Okay ]
//  array of num, string, object, and function
let data = [
  5,
  'Audhil',
  { tech: 'JavaScript' },
  function () {
    console.log('Jack and jill');
    return 11;
  },
];
console.log(data); //  [ 5, 'Audhil', { tech: 'JavaScript' }, [Function (anonymous)] ]
data[3](); //  calls function - o/p - Jack and jill
let res = data[3]();
console.log(res); //  11
values = [1, 2, 4];
console.log(values.shift()); //  1 i.e., removes data from start
console.log(values); //  [ 2, 4 ]
console.log(values.unshift(0)); //  adds data at start
console.log(values); //  [ 0, 2, 4 ]
console.log(values.unshift(10));
console.log(values); //  [ 10, 0, 2, 4 ]
values.push(5); //  adds data at end
console.log(values); //  [ 10, 0, 2, 4, 5 ]
values.push(15); //  adds data at end
console.log(values); //  [ 10, 0, 2, 4, 5, 15 ]
// values.pop();
// console.log(values); //  [ 10, 0, 2, 4, 5 ]
// values.pop();
// console.log(values); //  [ 10, 0, 2, 4 ]
// values.pop();
// console.log(values); //  [ 10, 0, 2 ]
console.log(values.splice(2)); //  [ 2, 4, 5, 15 ]
console.log(values); //  [ 10, 0 ]
values.push(332, 9, 7, 11);
console.log(values); //  [ 10, 0, 332, 9, 7, 11 ]
console.log(values.splice(2, 2)); //  [ 332, 9 ]
console.log(values); //  [ 10, 0, 7, 11 ]
console.log(values.splice(2, 2, 16, 12, 13)); //  [ 7, 11 ]
console.log(values); //  [ 10, 0, 16, 12, 13 ]
console.log(values.splice(1, 1, 11, 122)); //  [ 0 ]
console.log(values); //  [ 10, 11, 122, 16, 12, 13 ]
//  for of loop
console.log('demoing for off loop');
let nums = [];
nums[2] = 11;
nums[6] = 16;
console.log(nums); //  [ <2 empty items>, 11, <3 empty items>, 16 ]
console.log(nums.length); //  100
console.log('of loop');
/*
* undefined
  undefined
  11
  undefined
  undefined
  undefined
  16
*/
for (let n of nums) console.log(n);
console.log('in loop');
console.log('display keys');
/*
  prints keys
*   2
*   6
*/
for (let key in nums) console.log(key);
console.log('display values');
/*
  prints values
*   11
*   16
*/
for (let key in nums) console.log(nums[key]);
//  array destructuring
let vals = [1, 2, 3, 4];
let [a, b, c, d] = vals;
console.log(a, b, c, d); //  1 2 3 4
let [aa, bb, , dd] = vals;
console.log(aa, bb, dd); //  1 2 4
//  swapping like a magic
let a1 = 8;
let b1 = 9;
console.log(a1, b1); //  8 9
[a2, b2] = [b1, a1];
console.log(a2, b2); //  9 8
let words = 'My name is Mohammed Audhil'.split(' ');
console.log(words); //  [ 'My', 'name', 'is', 'Mohammed', 'Audhil' ]
let [p, q, r, s, t] = words;
console.log(p, q, r, s, t); //  My name is Mohammed Audhil
let anotherWords =
  'Jack and jill went up the hill, to fetch a pail of water'.split(' ');
let [x, y, ...z] = anotherWords;
console.log(x); //  Jack
console.log(y); //  and
/*
[
  'jill',  'went',
  'up',    'the',
  'hill,', 'to',
  'fetch', 'a',
  'pail',  'of',
  'water'
]
*/
console.log(z); //
//  Array forEach Method in JavaScript
console.log('forEach method');
let vv = [41, 34, 434, 55, 2, 7, 77, 8];
/*
  41
  34
  434
  55
  2
  7
  77
  8
*/
vv.forEach((n) => {
  console.log(n);
});
/*
*
* 41 0 [
  41, 34, 434, 55,
   2,  7,  77,  8
]
34 1 [
  41, 34, 434, 55,
   2,  7,  77,  8
]
434 2 [
  41, 34, 434, 55,
   2,  7,  77,  8
]
55 3 [
  41, 34, 434, 55,
   2,  7,  77,  8
]
2 4 [
  41, 34, 434, 55,
   2,  7,  77,  8
]
7 5 [
  41, 34, 434, 55,
   2,  7,  77,  8
]
77 6 [
  41, 34, 434, 55,
   2,  7,  77,  8
]
8 7 [
  41, 34, 434, 55,
   2,  7,  77,  8
]
*/
vv.forEach((n, index, nums) => {
  console.log(n, index, nums);
});
console.log('filter map reduce method');
console.log(vv.filter((n) => n % 2 === 0)); //  [ 34, 434, 2, 8 ]
console.log('looping after filter');
/*
   34 0 [ 34, 434, 2, 8 ]
  434 1 [ 34, 434, 2, 8 ]
    2 2 [ 34, 434, 2, 8 ]
    8 3 [ 34, 434, 2, 8 ]
*/
vv.filter((n) => n % 2 === 0).forEach((n, index, nums) => {
  console.log(n, index, nums);
});
console.log('using map');
vv.filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .forEach((n, index, nums) => {
    console.log(n, index, nums);
  });
console.log('using reduce');
let reduceResult = vv
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((a, b) => a + b);
console.log(reduceResult); //  956
