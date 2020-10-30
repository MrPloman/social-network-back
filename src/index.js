//imports
const express = require('express');
const morgan = require('morgan');
const properties = require('./config/properties')
const db = require('./config/database')
const userRoutes = require('./routes/user.routes')
const appRoutes = require('./routes/app.routes')

//DB amd SERVER
db();
const app = express();

//config
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
const router = express.Router();
app.use('/api', router);
userRoutes(router);

//server
app.listen(properties.PORT, () => {
    console.log(`Server is running on ${properties.PORT}`)
});