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
