let arr1 = [[1,2,3],[1,2,3],[1,2,3],[1,2,3],[6,7]];
let arr2 = [[1, ['sachin'] ,2,3],[1,2,3],[1,2,3],[1,2,3],[6,7]];
let arr3 = [[1,2,3],[1,2,['sachin'] ,3],[1,2,3],[1,2,3],[6,7]];
let arr4 = [[1,2,3],[1,2,3],[1,2,3],[1,['sachin', ['sachin'] ] ,2,3],[6,7]];
let arr5 = [[1,2,3],[1,2,3],[1,2,3],[1,2,3],[6,7], ['sachin'] , []];
let arr6 = [[1,2,3],[1,2,3],[1,2,3],[1,2,3],[6,7], [,,,]];
let arr7 = [[1,2,3],[1,2,3],[1,2,3],[1,2,3],[6,7], ];

// console.log(arr1);
let arr = null;
// arr = arr1.flat();
// console.log(arr);
// arr = arr2.flat();
// console.log(arr);
// arr = arr3.flat();
// console.log(arr);
// arr = arr4.flat();
// console.log(arr);
// arr = arr5.flat();
// console.log(arr);
// arr = arr6.flat();
// console.log(arr);
// arr = arr7.flat();
// console.log(arr);

// arr = arr4.flat(4);
// console.log(arr);

arr = arr4.flat(Infinity);
console.log(arr);

// this too will work.......... but use flat( inside give the number how many heirarchy is there.)

// let c = arr.flat();
// console.log(c);
// let d = c.flat();
// console.log(d);