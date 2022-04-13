let alien = {};
console.log(alien); //  {}
console.log(typeof alien); //  object
let alien2 = {
  name: 'Audhil',
  tech: 'JS',
  'work exp': 9,
};
console.log(alien2); //  { name: 'Audhil', tech: 'JS' }
console.log(typeof alien2); //  object
console.log(alien2.name); //  Audhil
console.log(alien2.tech); //  JS
console.log(alien2['tech']); //  JS
console.log(alien2['work exp']); //  9
let input = 'name';
console.log(alien2[input]); //  Audhil
//  complex obj
let alien3 = {
  name: 'Audhil',
  tech: 'JS',
  laptop: {
    cpu: 'i7',
    ram: 4,
    brand: 'HP',
  },
};
/*
*
    {
      name: 'Audhil',
      tech: 'JS',
      laptop: { cpu: 'i7', ram: 4, brand: 'HP' }
    }
*/
console.log(alien3);
console.log(alien3.laptop.brand); //  HP
console.log(alien3.laptop.brand.length); //  2
console.log(alien3.laptop.graphixCard); //  undefined
// console.log(alien3.laptop.graphixCard.length); //  TypeError: Cannot read properties of undefined (reading 'length')
console.log(alien3.laptop.graphixCard?.length); //  undefined - it prevents error
/*
* {
  name: 'Audhil',
  tech: 'JS',
  laptop: { cpu: 'i7', ram: 4, brand: 'HP' }
}
*/
console.log(alien3);
// delete alien3.tech;
// //  { name: 'Audhil', laptop: { cpu: 'i7', ram: 4, brand: 'HP' } }
// console.log(alien3);
// delete alien3.laptop;
// //  { name: 'Audhil' }
// console.log(alien3);

//  For in loop in JavaScript
/*
* name
  tech
  laptop
*/
for (let key in alien3) console.log(key);
/*
* name Audhil
  tech JS
  laptop { cpu: 'i7', ram: 4, brand: 'HP' }
*/
for (let key in alien3) console.log(key, alien3[key]);
console.log('loop through inner objec');
/*
* name Audhil
  tech JS
  cpu i7
  ram 4
  brand HP
*/
for (let key in alien3)
  if (typeof alien3[key] === 'object')
    for (let iKey in alien3[key]) console.log(iKey, alien3[key][iKey]);
  else console.log(key, alien3[key]);
