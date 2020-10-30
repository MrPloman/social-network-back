const mongoose = require('mongoose');
const chalk = require('chalk');
const dbURL = require('./properties').DB;

//CUSTOM CONSOLE
const connected = chalk.bold.cyan;
const error = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = () => {
    mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(connected('MongoDB Connected on', dbURL)))
        .catch(err => console.log(error("Connection Failed")))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Moongose disconnected')
            process.exit = 0;
        })
    })
}