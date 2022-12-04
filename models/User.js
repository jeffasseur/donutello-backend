//make connection with mongoDB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

    const userSchema = new Schema({
        id: Number,
        username:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;