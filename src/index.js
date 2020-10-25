const express = require('express');
const morgan = require('morgan');

const properties = require('./config/properties')
const db = require('./config/database')
db();
const app = express();
//const www = process.env.WWW || './';
//app.use(express.static(www));

//config
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/routes'))

//server
app.listen(properties.PORT, () => {
    console.log(`Server is running on ${properties.PORT}`)
});
//app.listen(app.get('port'), () => console.log(`listening on http://localhost:${app.get('port')}`));