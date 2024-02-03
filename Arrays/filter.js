let array = [1,2,3,4,5,6,7,8,,,9,10]

let filtered = array.filter( (ele) =>
    ele != undefined 
);

console.log(array);
console.log(filtered);

let words = ['sachin', 'robot', 'friday' ,'jarvis', 'edith'];
let filteredWords = words.filter( (word) => word.length > 5 );
console.log(filteredWords);