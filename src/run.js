const {app} = require('./server')
const {db} = require('./models/db')

async function run() {
    await db.sync()
    console.log('Database is ready')
    app.listen(3333, ()=> {
        console.log(`Server started on http://localhost:3333`)
    })
}

run()