// let values = new Array(); //  this is not working
let values = [];
console.log(values); //  []
values = [1, 2, 4];
console.log(values); //  [ 1, 2, 4 ]
console.log(values.length); //  3
values.push(5);
values.push(15);
console.log(values); //  [ 1, 2, 4, 5, 15 ]
values.pop();
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
