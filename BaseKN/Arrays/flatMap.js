let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let narr = arr.flatMap( (values) => (values%2==0)? ['jarvis, robot, friday'] : [ 'sachin', 'edith'] );
console.log(narr);  