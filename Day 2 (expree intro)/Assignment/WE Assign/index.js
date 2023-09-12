const express = require('express')
const app = express()
const data = require('./db.json')


app.get('',(req, resp)=>{
    return resp.send("Hello")
})

app.get('/books',(req, resp)=>{
    return resp.send(data)
})


app.listen(3000, ()=>{
    console.log("Listening Port 3000")
})