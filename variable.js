//variable basics

console.log("Hi Arnab");
const accountId = 1223
let accountName = "ARnab"
var accountPassword = 12345
// prefer not to use VAR bacause issue of block Scope and functional Scope 
//accountId = 1223  // change is Not Allowed with some errors
accountName = "Tanisa"
console.log(accountName)
acountPassword = 54321
console.log(accountPassword); // change is not happen 
console.table([accountId, accountName, accountPassword])


/* output

Hi Arnab
Tanisa
12345
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │   1223   │
│    1    │ 'Tanisa' │
│    2    │  12345   │
└─────────┴──────────┘


*/