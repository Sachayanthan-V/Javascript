const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
const studentMarks = [ 56, 76, 87, 53, 100 ];
const studentDataBase = [
    {name : 'sachin', marks : 100 } ,
    {name : 'friday', marks : 80 } ,
    {name : 'edith', marks : 90 } ,
    {name : 'robot', marks : 45 } ,
    {name : 'jarvis', marks : 89 } ,
]


const isAllPassed = function(element, index, array) {
    console.log(element, index, array);
    return element >= 35;
}

const isAllStudentPassed = function(element, index, array) {
    console.log(element, element.name, element.marks ,index);
    return element.marks >= 35;
}

console.log(studentMarks.every(isAllPassed));
console.log(studentDataBase.every(isAllStudentPassed));
console.log(studentDataBase.every(isAllStudentPassed), ()=>{
    console.log("Yes all students are passed")}
);

const dict = {
    "one": 1,
    "two": 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6
}

const isNotNegative = function(element, index, array) {
    return element !== null
}

// console.log(dict.every(isNotNegative))
// console.log(array1.every(isBelowThreshold));
// Expected output: true

function printIncomingElement (element, index, array) {
    console.log(element);
    return true
}

var tripleIT = (element, index, array) => {
    console.log( element.length * 3);
    return true
}

let PracEvery = ['sachin', 'robot', 'friday' ,'jarvis', 'edith'];

PracEvery.every(printIncomingElement);
PracEvery.every(tripleIT);


// Author : SachayanthanV
