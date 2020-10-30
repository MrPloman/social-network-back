const User = require('./user.dao');

exports.createUser = (req, res, next) => {
    const user = {
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country
    }
    User.create(user, (err, user) => {
        if (err) res.json({ error: err });
        res.json({ message: 'Customer Created Successfully' });
    });
}

exports.getUser = (req, res, next) => {
    User.get({ email: req.body.email }, (err, user) => {
        if (err) res.json({ error: err });
        res.json({ User: user });
    })
}