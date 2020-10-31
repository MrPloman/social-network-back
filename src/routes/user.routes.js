const User = require('../controllers/user.controller')
module.exports = (router) => {
    router.post('/register', User.registerUser);
    router.get('/me', User.me);
}