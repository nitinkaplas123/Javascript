// Reference ->https://www.geeksforgeeks.org/es6-merge-objects/


// 1)Object spread syntax 

let data={name:'Nitin',age:26,Skill:'DSA'}
let info={location:'Punjab',company:'TCS'}


// 1) spread opeartor.
data={...data,...info}
console.log(data)
// here while destrcturing both data, info object ke values bahr aa k club ho jate ha.


// O/p -:
// {
//     name: 'Nitin',
//     age: 26,
//     Skill: 'DSA',
//     location: 'Punjab',
//     company: 'TCS'
// }