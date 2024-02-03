const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1);

// console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// Expected output: Array [1, "b"]

// console.log(iterator1.next().value);
// Expected output: Array [2, "c"]

// console.log(iterator1.next().value);
// Expected output: undefined

var counter = 0;

while (true) {
    counter ++ ;
    val = iterator1.next();
    // val = iterator1.next().value;
    // val = iterator1.next().done;
    console.log( val!==undefined ? val:'' );
    if (counter>10) break;
}

/*
{ value: [ 0, 'a' ], done: false }
{ value: [ 1, 'b' ], done: false }
{ value: [ 2, 'c' ], done: false }
{ value: undefined, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/

