const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','hbs')

let todos = []

app.get('/todos',(req,res)=>{
    res.render('tasks',{
        title:'My Page',
        todos
    })
})

app.post('/todos',(req,res)=>{
    todos.push({
        name:req.body.name,
        marks:req.body.marks,
        age:req.body.age
    })
    res.redirect('/todos')
})

app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})