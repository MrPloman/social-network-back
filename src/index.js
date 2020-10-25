const { Router } = require('express');
const express = require('express');
const morgan = require('morgan');
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
app.use(require('./routes/index'))

//server
app.listen(app.get('port'), () => console.log(`listening on http://localhost:${app.get('port')}`));