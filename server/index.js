const express = require('express');
const app = express();
const morgan = require('morgan'); ///midelware nos ayuda  a las peticiones y a la srespuestas
const cors = require('cors'); //midelware es pra seguridad para ver a quien de ja entrar
const { mongoose } = require('./database'); //paquete que permite conectarnos a mongodb

// Settings
app.set('port', 3000);

//Middlewares
app.use(morgan('dev')); //modo desarrollador
app.use(express.json());
app.use(cors({ origin: 'http://localhost:8100' }));

//Routes
// se crean para tener mas organizado el codigo

app.use('/api/users', require('./routes/users.routes'));
app.use('/api/productToy', require('./routes/productToy.routes'));
app.use('/api/productVenta', require('./routes/productVenta.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on port " + app.get('port'));
});