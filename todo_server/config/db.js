const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('todo','postgres','1234', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize