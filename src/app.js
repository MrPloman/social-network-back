const express = require('express');
const app = express();
const router = express.Router();
const db = require('./config/database');
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes')

//routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);
userRoutes(router);

//init DB
db();

//config
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));

module.exports = app;