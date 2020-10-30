const mongoose = require('mongoose');
const userSchema = require('./user.model');


userSchema.statics = {
    create: function(data, callback) {
        const user = new this(data);
        user.save(callback);
    },
    get: function(query, callback) {
        this.find(query, callback);
    },
    update: function(query, callback) {

    }
}

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;