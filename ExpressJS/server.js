const express = require('express')
const path = require('path')
const app = express()

let todos = []
app.use('/site',express.static(path.join(__dirname,'static')))

app.get('/addtask',(req,res)=>{
    todos.push(req.query.task)
    res.send('success')
})

app.get('/gettodos',(req,res)=>{
    res.send(todos)
})


app.listen(4444,()=> {
    console.log(`server started at http://localhost:4444`)
})