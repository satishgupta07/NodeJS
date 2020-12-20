const fs = require('fs')

fs.writeFile(
    'Hello.txt',
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