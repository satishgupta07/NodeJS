const {MongoClient} = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL,async (err,client)=>{
    if(err) throw err
    
    const testdb = await client.db('testdb')
    
    const people = await testdb.collection('people')

    // await people.find({}).toArray((err, result) => {
    //     if(err) throw err
    //     console.log(result)
    // })

    let cursor = await people.find({})
    let counter = 0
    // cursor.skip(3)
    while(await cursor.hasNext() && counter<4){
        console.log(await cursor.next())
        counter++
    }

    client.close()

})