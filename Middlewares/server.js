const express = require('express')
const app = express()

app.use(f1) 
app.use(f2) 
app.use(f3)

function f1(req,res,next){
    console.log('running f1')
    next()
}

function f2(req,res,next){
    console.log('running f2')
    next()
}

function f3(req,res,next){
    console.log('running f3')
    next()
}

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})