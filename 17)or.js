// here empty string is not +ve value
let data=null || false || ''
console.log(data)  // empty string 

// question is if empty string is not +ve then how we get o/p as empty string 
// this is because if in or case if nothing they get +ve value then by default it take last value.


let data2=null || '' || false;
console.log(data2)  // false

// here it take last value.

// if all the values are -ve then it always take last value.