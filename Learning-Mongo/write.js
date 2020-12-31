const {MongoClient} = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL,(err,client)=>{
    if(err) throw err
    // Create a database
    const testdb = client.db('testdb')
    // console.log(testdb)
    
    // Create a collection inside database
    const people = testdb.collection('people')
    
})