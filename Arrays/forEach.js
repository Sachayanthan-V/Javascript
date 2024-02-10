let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// arr.forEach(element => {
//     console.log(element*3);
// });

async function sum2num (n1, n2) {
    return await n1 + n2;
}

let sum = 0;
arr.forEach(async ele => {
    sum = await sum2num(sum, ele);
    // await console.log(sum);
});

console.log(sum);



// Author : SachayanthanV