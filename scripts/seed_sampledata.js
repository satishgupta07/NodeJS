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

    await models.Comment.bulkCreate([
        {
            title: 'nice article',
            message: 'really nice written article, thanks!',
            userId: 1,
            articleId: 1
        },
        {
            title: 'good article',
            message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
            userId: 1,
            articleId: 1
        },
        {
            title: 'could be better',
            message: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
            userId: 1,
            articleId: 2
        },
        {
            title: 'thanks for writin this',
            message: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
            userId: 2,
            articleId: 3
        },
        {
            title: 'did not like your article',
            message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            userId: 1,
            articleId: 1
        },
        {
            title: 'really bad article',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            userId: 2,
            articleId: 4
        }
    ])

   } catch (error) {
       throw error
   }
}

seed()