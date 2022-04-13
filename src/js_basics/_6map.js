let map = new Map();
map.set('1', 1);
console.log(map); //  Map(1) { '1' => 1 }
map.set(5, 1);
console.log(map); //  Map(2) { '1' => 1, 5 => 1 }
map.set('audhil', 'android');
console.log(map); //  Map(3) { '1' => 1, 5 => 1, 'audhil' => 'android' }
console.log(map.keys()); //  [Map Iterator] { '1', 5, 'audhil' }
console.log(map.has(5)); //  true
console.log(map.get(5)); //  1
console.log('using for of loop');
/*
* key : 1, value: 1
  key : 5, value: 1
  key : audhil, value: android
*/
for (let [k, v] of map) {
  console.log(`key : ${k}, value: ${v}`);
}
console.log('using for each loop');
/*
* key : 1, value: 1
  key : 5, value: 1
  key : audhil, value: android
*/
map.forEach((v, k) => {
  console.log(`key : ${k}, value: ${v}`);
});
