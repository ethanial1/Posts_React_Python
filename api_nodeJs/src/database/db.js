const { Sequelize, Op } = require('sequelize')
const modelPost = require('../models/post')

// conection uri
// "postgres://someuser:pass@db-endpoint:5432/people";
const sequelize = new Sequelize('postgres://ethan:@localhost:5432/postgres', {
    logging: false,
    native: false,
});

// sequelize.authenticate()
// .then(() => {
//     console.log('Conectado')
// })
// .catch(err => {
//     console.log('No se conecto')
// })
modelPost(sequelize)

module.exports = {
    ...sequelize.models,
    db: sequelize,
    Op
}