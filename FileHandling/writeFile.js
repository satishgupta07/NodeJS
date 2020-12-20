const fs = require('fs')
const path = require('path')

fs.writeFile(
    path.join(__dirname,"Hello.txt"),
    'We are writing hello',
    {
        encoding : 'utf-8',
        flag : 'w'
    },
    (err)=>{
        if(err) throw err
        console.log('File written successfully')
    }
)