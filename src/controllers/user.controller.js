const User = require('../models/user/user.dao');
const jwt = require('jsonwebtoken');
const config = require('../config/properties');


exports.registerUser = (req, res, next) => {
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
        level: req.body.level
    })
    User.create(user, async(err, userData) => {
        if (err) res.json({ error: err });
        token = await user.generateToken(userData);
        userData.password = await user.encryptPassword(userData.password);
        res.json({
            message: 'User Created Successfully',
            user: userData,
            token: token
        });
    });
}

exports.me = (req, res, next) => {
    User.me(async(err, user) => {
        const accessToken = await req.headers['x-access-token'];
        if (err) res.json({ error: err });
        if (!accessToken) {
            res.json({ error: err })
        } else {
            const decoded = jwt.verify(accessToken, config.SECRET)
            const getUser = await User.findById(decoded.id);
            if (!getUser) {
                return ErrorEvent;
            } else {
                res.json({ User: getUser });
            }

        }

    })
}