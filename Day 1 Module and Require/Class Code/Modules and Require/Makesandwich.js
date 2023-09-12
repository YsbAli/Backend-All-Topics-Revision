// const MakeSandwich = ()=>{
//  console.log('I am from MakeSandwich Module')
// }

// // module.exports = MakeSandwich;       // its default export

// module.exports = {MakeSandwich}    // it is called named exports ,,, if it is in the {} then it is named object 


// // default export ==>  export without putting in object

// // named object ==> export  with putting in object





// const Name = () =>{
//     console.log('Name is Yousub')
// }

// module.exports = Name;



const name = 'Ishan';

const MakeSandwich = () =>{
    console.log(`${name} is making Sandwich`)
}

// module.exports = {MakeSandwich}
module.exports = MakeSandwich;


