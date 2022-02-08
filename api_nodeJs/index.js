const express = require('express')
const { db } = require('./src/database/db')

const app = express()

// middlewares
app.use(express.json())

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use(require('./src/routes/posts'))

// servidor
db.sync({force: false}).then(() => {
    app.listen(3001, () => {
        console.log('Servidor corriendo en el purto 3001')
    })
})