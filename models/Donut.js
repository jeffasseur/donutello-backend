const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonutSchema = new mongoose.Schema({
    id: Number,

    //donut configuration
    name: {type: String, required: true},
    dough: {type: String, required: true},
    glase: {type: String},
    sprinkles: {type: String, required: true},
    logo: String,
    dateOfCreation: {type: Date, default: Date.now},
    email: {type: String, required: true},

    //check if order or game
    order: {type: Boolean, required: true, default: false},

    //check if it is custom or random donut
    type: {type: Boolean, required: true},

    //donuts for clients
    client: {type: String},
    amount: {type: Number, default: 0},
    description: {type: String},

});

const Donut = mongoose.model('Donut', DonutSchema);

module.exports = Donut;