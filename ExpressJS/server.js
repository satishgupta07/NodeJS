const express = require('express')
const server = express()

server.get('/',(req,res)=> {
    res.send('Hello World!')
})
 
server.listen(4444,()=> {
    console.log(`server started at http://localhost:4444`)
})