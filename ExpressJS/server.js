const express = require('express')
const path = require('path')
const app = express()

let todo = []

app.get('/addtodo', (req,res) => {
    todo.push(req.query.task)
    res.send('Success')
})

app.get('/gettodo', (req,res)=> {
    res.send(todo)
})

 
app.listen(4444,()=> {
    console.log(`server started at http://localhost:4444`)
})