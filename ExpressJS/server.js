const express = require('express')
const server = express()

server.get('/',(req,res)=> {
    res.send(`Hello Everyone !!`)
})

server.get('/hello/:name',(req,res)=> {
    res.send(`Hello World ! ${req.params.name}`)
})

server.get('/bye',(req,res)=> {
    res.send(`Good Bye ! ${req.query.name} ${req.query.age}`)
})

server.get('/hey',(req,res)=> {
    res.sendFile(__dirname+'/index.html')
})
 
server.listen(4444,()=> {
    console.log(`server started at http://localhost:4444`)
})