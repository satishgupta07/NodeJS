const express = require('express')
const app = express()
const route = 
{
    index : require('./routes/index'),
    teacher : require('./routes/teacher')
} 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',route.index)
app.use('/teacher',route.teacher)

app.listen(4444,()=>{
    console.log('Server Started at http://localhost:4444')
})