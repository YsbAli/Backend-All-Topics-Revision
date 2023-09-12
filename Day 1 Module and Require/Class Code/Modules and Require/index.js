// console.log('hello')
// function HelloWorld (){
//     console.log('Hello World from HelloWorld Function')

// }
// HelloWorld()


//Import from another files



// const Sandwich = require("./Makesandwich")

// Sandwich()

// require("./Makesandwich")()      //We can do like this also but this is not undarstable


// for named export   :--- 

// const Sandwich = require('./Makesandwich')

// console.log(Sandwich)     // besically it returs as an object,,, { MakeSandwich: [Function: MakeSandwich] }

// // So to getting answare we have to do ...

// // Sandwich.MakeSandwich()                 // I am from MakeSandwich Module



// For Name Function 


// const Name_funtion = require("./Makesandwich")

// console.log(Name_funtion())      //Name is Yousub      // undefined

// Name_funtion()    //Name is Yousub


//Passes by value 

// function something(a){
//     a=2;
//     return a;
// }

// let a = 1;
// console.log(something(a))       //2
// console.log(a)                 //1



// passed by reference 


// function something (a) {

//     a = {name:'ishan'}
//     return a;
// }
  
// let a = {name:'Yousub'}                 

//  console.log(something(a))        // a = {name:'ishan'}
// console.log(a)                      // a = {name:'Yousub'}



// const Sandwich = require('./Makesandwich')    //for named exports

// const MakeSandwich = require('./Makesandwich')     

// // Sandwich.MakeSandwich()    // Ishan is making Sandwich           //for named exports
   

// MakeSandwich()           // Ishan is making Sandwich















// There are 4 ways of exporting module 

// number 1   (default exports)

// const MakeCoffe = require('./MakeCoffe1')

// const Result = MakeCoffe()
  
// console.log(Result)    // Ishan is making coffe


//Number 2   (named exports)


// const Named_exports = require('./MakeCoffe2')

// const result = Named_exports.MakeCoffe2()         //Ishan is making coffe

// console.log(result)     //Ishan is making Coffe2




// number 3 


// const Exports_Dot = require('./MakeCoffe3')

// const Res = Exports_Dot.MakeCoffe3
// console.log(Res)              // [Function: MakeCoffe3]

// const Res2 = Exports_Dot.MakeCoffe3()
// console.log(Res2)            //Ishan is making Coffe3





// Number 4 :  just import the fuction and export it

// const Direct_exports = require('./MakeCoffe4')


// Direct_exports()                  //Ishan is making Coffe4 / Tea

// console.log(Direct_exports())    // Ishan is making Coffe4 / Tea






// For Multiple Exports 

// const MultipleExport = require('./MultipleFuncExport')

// MultipleExport.MakeChiecken()    //  Ishan is making Chicken


// MultipleExport.MakeRice()    //   Ishan is making Rice





