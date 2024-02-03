const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"
index = -2;
console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"


console.log();


let newlist = [1,2,3,4,5]
let newObj = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 }
console.log(newlist.at(3));
// console.log(newObj.at(0));