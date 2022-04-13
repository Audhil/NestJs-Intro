let nums = new Set('bookKeeper');
console.log(nums); //  Set(7) { 'b', 'o', 'k', 'K', 'e', 'p', 'r' }
console.log('print with for each');
nums.forEach((value) => {
  console.log(value);
});
console.log('value & value1');
//  value = value1 = we are using it for uniformity between arrays as well
nums.forEach((value, value1, nums) => {
  console.log(value, value1, nums);
});
console.log('print with for of');
for (let n of nums) console.log(n);
console.log('another set');
let nums2 = new Set(); //  Set(8) { 3, 4, 5, 31, '3', 'Audhil', 'JS', 'Server' }
nums2.add(3);
nums2.add(4);
nums2.add(5);
nums2.add(3);
nums2.add(31);
nums2.add('3');
nums2.add('Audhil');
nums2.add('Audhil');
nums2.add('JS');
nums2.add('Server');
nums2.add('JS');
console.log(nums2);
console.log(nums2.has('JS')); //  true
console.log(nums2.has(1));  //  false
