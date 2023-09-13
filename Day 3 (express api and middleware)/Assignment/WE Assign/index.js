const express = require('express')
const app = express()



app.use(MiddleWare1)
app.use(MiddleWare2)

app.get("/users",(req, res)=>{
    console.log("Users Route Handler")
    res.send("Hello From users route")
})

app.get("/products",(req, res)=>{
    console.log("products Route Handler")
    res.send("Hello From products route")
})


app.get("/contact",(req, res)=>{
    console.log("contact Route Handler")
    res.send("Hello From contact route")
})


//middleware

function MiddleWare1 (req, res, next){
    console.log("After MiddleWare 1")
    next()
    console.log("Before MiddleWare 1")
}


function MiddleWare2 (req, res, next){
    console.log("After MiddleWare 2")
    next()
    console.log("Before MiddleWare 2")
}


app.listen(3002,()=>{
    console.log("Listening Port 3002")
})


/*

//Output

Listening Port 3002
After MiddleWare 1
After MiddleWare 2
Users Route Handler
Before MiddleWare 2
Before MiddleWare 1

*/