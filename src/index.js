//imports
const app = require('./app');
const properties = require('./config/properties')

//functions
async function init() {
    await app.listen(properties.PORT, () => {
        console.log(`Server is running on ${properties.PORT}`)
    });
}

//server init
init()