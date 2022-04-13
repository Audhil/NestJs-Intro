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
