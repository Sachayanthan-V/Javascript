let arr = Array.from("sachayanthanV");
console.log(arr);

let arr1 = Array.from("sachayanthan".toUpperCase());
console.log(arr1);

let arr2 = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => x * 3);
console.log(arr2);

let duplicate = ["abc", "def", "abc", "ijk", "def"];
let set = new Set(duplicate);
console.log(set); // result : { 'abc', 'def', 'ijk' }
let arrFromSet = Array.from(set); // result : ['abc', 'def', 'ijk'];
console.log(arrFromSet);

let sampleJsonObj = {
  name: "Edith",
  version: 2.0,
  owner: "TonyStark",
};

let jsonArr = Array.from(sampleJsonObj);
console.log(jsonArr); // wont create an arry with json obj. because it has a key, value pair. but. may be we can able to create a key array and value array seperately... so, ill try that one.

let jsonArrKeys = Array.from(Object.keys(sampleJsonObj));
console.log(jsonArrKeys); // [ 'name', 'version', 'owner' ]

let jsonArrValues = Array.from(Object.values(sampleJsonObj));
console.log(jsonArrValues); // [ 'Edith', 2, 'TonyStark' ]

// Finally we can do the list creation seperately for keys and values using Arrays.from seperately...
// Author : SachayanthanV
