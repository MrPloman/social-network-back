const mongoose = require('mongoose');
const userSchema = require('./user.model');


userSchema.statics = {
    create: (data, callback) => {
        const user = new this(data);
        user.save(callback);
    },
    get: (query, callback) => {
        this.find(query, callback);
    }
}

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;