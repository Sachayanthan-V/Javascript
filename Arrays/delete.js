let newlist = [ 1, 2, 3, 4, 5 ];

console.log(newlist);
delete newlist[3];
console.log(newlist);


let someEmptyItemsList = [1,,2,,3,,4,,5];
console.log(someEmptyItemsList);
/* Result : 

[
  1,
  <1 empty item>,
  2,
  <1 empty item>,
  3,
  <1 empty item>,
  4,
  <1 empty item>,
  5
]


*/



// Author : SachayanthanV