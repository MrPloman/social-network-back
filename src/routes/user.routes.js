const User = require('./user.controller')
module.exports = (router) => {
    router.post('/register', User.createUser);
    router.get('/login', User.getUser);
}