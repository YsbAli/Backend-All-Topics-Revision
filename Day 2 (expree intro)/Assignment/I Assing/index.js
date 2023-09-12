const express = require('express')
const app = express()
const Data = require('./data.json')

app.get("/", (req, resp) =>{
    return resp.send("Hello from Home Page! this is Assignment 1/Day 2")

})

app.get("/books", (req, resp) =>{
    return resp.send(Data)
})

app.listen(3000, ()=>{
    console.log("Listhening Port 3000")
})