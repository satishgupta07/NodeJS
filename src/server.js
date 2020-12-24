const express = require('express')
const path = require('path')

const app = express()

app.use('/',express.static(path.join(__dirname,'../public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send("Hello World !")
})

app.listen(3333, ()=> {
    console.log(`Server started on http://localhost:3333`)
})