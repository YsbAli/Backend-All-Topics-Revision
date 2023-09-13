// const express = require('express')
// const app = express()

// app.use(Logger1) 
// app.use(Logger2) 

// //middleware Called/invocation   ...express will call the Logger function, we do not need to call the function

// app.get("/users", (req, resp)=>{
//     console.log("Route Handler")
//     return resp.send("Users Page")

// })


// app.get("/products", (req, resp)=>{
//     console.log("products")
//     return resp.send("Products Page")
// })


// //Middleware declaration

// function Logger1 (req, resp, next){ 
//     console.log("Before MiddleWare 1")
//     next()
//     console.log("After MiddleWare 1")
// }

// function Logger2 (req, resp, next){
//     console.log("Before MiddleWare 2")
//     next()
//     console.log("After MiddleWare 2")
// }


// app.listen(3001, ()=>{
//     console.log("Hello! port 3001 is running")
// })



//Output:

// Before MiddleWare
// Route Handler
// After MiddleWare


// Now want to use middleware in a perticuler route:


// so we have to do ::::-----:::::

/*



const express = require('express')
const app = express()

app.use(GlobalLogger)

//No need to write app.use 
// app.use(Logger1) 
// app.use(Logger2) 

//middleware Called/invocation   ...express will call the Logger function, we do not need to call the function



//one middleware
app.get("/logger1-only", Logger1, (req, resp)=>{
    console.log("logger1-only Route Handler")
    return resp.send("logger1-only")

})


app.get("/logger2-only", Logger2, (req, resp)=>{
    console.log("logger2-only Route Handler")
    resp.send("logger2-only")
})


//Both Logger1 and Logger2
app.get("/boothMiddleware", Logger1, Logger2, (req,resp)=>{
     console.log("Route Handler from BothMiddleWare")
    resp.send("")
})


//Middleware declaration

function Logger1 (req, resp, next){ 
    console.log("Before MiddleWare 1")
    next()
    console.log("After MiddleWare 1")
}

function Logger2 (req, resp, next){
    console.log("Before MiddleWare 2")
    next()
    console.log("After MiddleWare 2")
}


//Global Middleware (it will work for every route)
function GlobalLogger(){
    console.log("GlobalMiddleWare")
    next()
}


app.listen(3001, ()=>{
    console.log("Hello! port 3001 is running")
})



*/


// Why do we actually  need this middleware 


/*

const express = require('express')
const app = express()


//Both Logger1 and Logger2

app.get("/boothMiddleware", Logger1, Logger2, (req,resp)=>{
    resp.send(`${req.firstName}  ${req.LastName}`)
})


//Middleware declaration

function Logger1 (req, resp, next){ 
    req.firstName = "Ishan"
    next()
}

function Logger2 (req, resp, next){
    // console.log("FirstName", firstName)    //req.firstName is already there
    req.LastName = "Ali"
    next()
}



app.listen(3001, ()=>{
    console.log("Hello! port 3001 is running")
})



*/



//  Passing Data from Middleware

const express = require('express')
const app = express()

app.get("/users", logger1("admin"), (req, res)=>{
    res.send(req.role)
})

function logger1(role){
    return function(req, res, next){
        if(role === "admin"){
            req.role = "admin"
        }
        else{
            req.role = "user"
        }  
        next()
    }
}

app.listen(3001, ()=>{
    console.log("Listening on port 3001")
})



   //Learning Topics of today: 


// 1. what is middleware
// 2. how to code execution flows in the middleware
// 3. how to use a global middleware
// 4. how to use multiple middleware
// 5. Route-level-middleware
// 6. Data pass through middleware






