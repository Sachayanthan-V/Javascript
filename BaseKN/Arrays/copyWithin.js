`
copyWithin(target, start)
copyWithin(target, start, end)
`

var arr1 = [1,2,3,4,5,6,7,8];

console.log(arr1);
// arr1.copyWithin(0, 3);
arr1.copyWithin(3, 0);
console.log(arr1);