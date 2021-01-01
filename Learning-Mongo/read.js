const {MongoClient} = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL, (err,client)=>{
    if(err) throw err
    
    const testdb = client.db('testdb')
    
    const people = testdb.collection('people')

    // people.find({}).toArray((err, result) => {
    //     if(err) throw err
    //     console.log(result)
    // })

    // let cursor = await people.find({})
    // let counter = 0
    // // cursor.skip(3)
    // while(await cursor.hasNext() && counter<4){
    //     console.log(await cursor.next())
    //     counter++
    // }

    people.find({
        $and :[
            {
                age:{
                    // $eq:21
                    $lt:20
                }
            },
            {
                city:'Delhi'
            }
        ]
        })
          .toArray((err,result)=>{
        if(err) throw err
        console.log(result)
    })

    client.close()

})