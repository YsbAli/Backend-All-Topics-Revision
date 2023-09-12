// const express = require('express')
// // console.log("express",express)


// const app = express()                                 //--> express() --> it will return the entire express application
// // console.log(app)

// app.listen(2345, function (){
//     console.log("listening on port 2345")           // listening on port 2345   ------>  app(port,callback)  app() takes two params one port and second one callback function
// })



/*
HTTP VERBS: 

GET ,
POST,
PUT,
PATCH,
DELETE

*/

// // Now write Get API 

// app.get("path", callback(req, res) => {
//     return res.send('Hello/ send is a func of res obj')

// })



// app.get("", (req, resp) =>{
//     return resp.send("Hello")
// })




const Data = [
    { name: "Yousub Ali", age: 22, city: "cob" },
    { name: "Ishan Ali", age: 23, city: "Kolkata" },
    { name: "Shan Tech", age: 24, city: "Cooch Behar" }
]



//Fresh Code

const express = require('express')
const app = express()
const Users = require('./users.json')



//Get Api

app.get('/', (req, resp) => {
    return resp.send("Hello from Get API")
})

app.get('/users', (req, resp) => {
    return resp.send("All users from users")
})

app.get('/product', (req, resp) => {
    return resp.send('Product page')
})

//Now return json data 

app.get("/details", (req, resp) => {
    return resp.send([
        { name: "Yousub Ali", age: 22, city: "Cob" },
        { name: "Ishan Ali", age: 23, city: "Kolkata" }
    ])
})


//can take the data from variable also

app.get('/data', (req, res) => {
    let result = res.send(Data)
    return result
    // console.log(result)
})

//Now write how to pass data  

app.get('/usersdata', (req, res) => {
    let result = res.send(Users)
    return result
    // console.log(result)
})






app.listen(2345, () => {
    console.log("Listening to the port 2345")
})









