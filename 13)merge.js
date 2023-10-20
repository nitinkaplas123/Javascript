let data={name:'Nitin',age:26,Skill:'DSA'}
let info={location:'Punjab',company:'TCS'}

data={data,...info}

console.log(data)

// o/p-:
// {
//     data: { name: 'Nitin', age: 26, Skill: 'DSA' },
//     location: 'Punjab',
//     company: 'TCS'
// }