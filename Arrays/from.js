let arr = Array.from('sachayanthanV');
console.log(arr);

let arr1 = Array.from ( 'sachayanthan'.toUpperCase() );
console.log(arr1);

let arr2 = Array.from ( [1,2,3,4,5,6,7,8,9,10] , (x) => x*3 );
console.log(arr2);

let duplicate = ['abc', 'def', 'abc', 'ijk', 'def'];
let set = new Set(duplicate)
console.log(set);// result : { 'abc', 'def', 'ijk' }
let arrFromSet = Array.from(set); // result : ['abc', 'def', 'ijk'];
console.log(arrFromSet);