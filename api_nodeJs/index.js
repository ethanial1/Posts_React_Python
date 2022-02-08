const express = require('express')

const app = express()

// settings
app.set('port', process.env.PORT || 5000)

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

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el purto ', app.get('port'))
})