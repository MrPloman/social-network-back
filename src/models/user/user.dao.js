const mongoose = require('mongoose');
const userSchema = require('./user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/properties');



userSchema.statics = {
    create: async function(data, callback) {
        const user = new this(data);
        await user.save(callback);
    },
    me: function(query, callback) {
        this.find(query, callback);
    },
    update: function(query, callback) {

    }
}
userSchema.methods.generateToken = async(user) => {
    const token = await jwt.sign({ id: user._id }, config.SECRET, { expiresIn: 60 * 60 * 24 })
    return token;
}
userSchema.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;