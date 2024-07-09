let digit = "3a";
console.log(typeof(digit));
let changeInNumber = Number(digit);
console.log(typeof(changeInNumber));
console.log(changeInNumber);

/*
Output
-----------

string
number
NaN          //something wrong assiging variable (Not A Number)
*/

let booleanislogin = 1;
let loggedin = Boolean(booleanislogin)
console.log(booleanislogin);

let booleanisloggedin = "yes";
let loggedin1 = Boolean(booleanisloggedin)
console.log(loggedin1);

let booleanisloggedin1 = "";
let loggedin2 = Boolean(booleanisloggedin1)
console.log(loggedin2);

/* 
Output
-------------
1
false
true


*/