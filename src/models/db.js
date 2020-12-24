const Sequelize = require('sequelize')
const {DataTypes} = Sequelize

const db = new Sequelize(
    'sampleblogdb', 'samplebloguser', 'sampleblogpass',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

const User = db.define('user', {
    username : {type: DataTypes.STRING(30), unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: true }
})

const Article = db.define('article', {
    title: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    content: {
        type : DataTypes.STRING
    }
})

const Comment = db.define('comment', {
    title: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    message: {
        type : DataTypes.STRING
    }
})

Article.belongsTo(User, {as: 'author'})
User.hasMany(Article, {as: 'author'})

Comment.belongsTo(Article)
Article.hasMany(Comment)

Comment.belongsTo(User)
User.hasMany(Comment)

module.exports = {
    db,
    User,
    Article,
    Comment
}