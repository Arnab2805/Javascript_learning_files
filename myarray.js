// Basic array decleration
const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[2]);

/*
Output:-
---------------

[ 1, 2, 3, 4, 5 ]
3

*/

// ARRAY METHODS (Important)

arr.push(9);
console.log(arr);           // Output ->   [ 1, 2, 3, 4, 5, 9 ]

arr.pop();
console.log(arr);            // Output ->   [ 1, 2, 3, 4, 5 ]   (pop out the last element)

arr.unshift(8);
console.log(arr);            // Output ->   [ 8, 1, 2, 3, 4, 5 ] 

arr.shift();
console.log(arr);            // Output ->   [ 1, 2, 3, 4, 5 ]


//Slice and Splice

const arr1 = arr.slice(2,4);
console.log(arr);
console.log(arr1);

/*
Output:-
---------------
[ 1, 2, 3, 4, 5 ]
[ 3, 4 ]

*/

const arr2 = arr.splice(2,4);
console.log(arr);
console.log(arr2);

/*
Output:-
---------------
[ 1, 2 ]
[ 3, 4, 5 ]
*/