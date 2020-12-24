const models = require('../src/models/db')

async function seed() {

   try {
    await models.db.sync({force: true})
    
    await models.User.bulkCreate([
        {username: 'firstuser', password: 'firstpass'},
        {username: 'seconduser', password: 'secondpass'}
    ])

    await models.Article.bulkCreate([
        {
            title: 'Creativity',
            content: 'The creative process is the act of making new connections between old ideas or recognizing relationships between concepts. ',
            authorId: 1
        },
        {
            title: 'Decision Making',
            content: 'Decision making is just what it sounds like: the action or process of making decisions. ',
            authorId: 1
        },
        {
            title: 'Focus',
            content: 'In order to concentrate on one thing you must, by default, ignore many other things.',
            authorId: 2
        },
        {
            title: 'Habits',
            content: 'Habits are the small decisions you make and actions you perform every day. ',
            authorId: 2
        }
    ])

   } catch (error) {
       throw error
   }
}

seed()