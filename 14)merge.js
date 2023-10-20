let data={name:'Nitin',age:26,Skill:'DSA'}
let info={location:'Punjab',Skill:'React'}

data={...data,...info};
console.log(data)

// here at starting compiling Skill ->DSA now when go to info Skill is update to React 


// o/p-:
// { name: 'Nitin', age: 26, Skill: 'React', location: 'Punjab' }