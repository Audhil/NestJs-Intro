function Alien(name, tech) {
  this.name = name;
  this.tech = tech;
  return this; //  this line is optional
}

let alien1 = new Alien('Audhil', 'JS');
console.log(alien1); //  Alien { name: 'Audhil', tech: 'JS' }

let alien2 = new Alien('Mohammed', 'Android');
console.log(alien2); //  Alien { name: 'Mohammed', tech: 'Android' }

alien1.name = 'Arun'; //  this changes are effective only in alien1
console.log(alien2); //  Alien { name: 'Mohammed', tech: 'Android' } - it doesn't affect alien2
//  another sample
function Audhil(name, tech) {
  this.name = name;
  this.tech = tech;
  this.work = function (time) {
    console.log(`Audhil works for ${time} hrs`);
  };
  return 9; //  any other return value will get ignored in constructor functions, other than objects
}

let aa = new Audhil('mohammed', 'Java');
console.log(aa.name); //  mohammed
console.log(aa.tech); //  Java
aa.work(3); //  Audhil works for 3 hrs
console.log(aa.work(2)); //  Audhil works for 2 hrs & //  undefined
console.log(aa); //  Audhil { name: 'mohammed', tech: 'Java', work: [Function (anonymous)] }
