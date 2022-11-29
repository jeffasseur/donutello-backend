const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonutSchema = new mongoose.Schema({
    id: Number,
    name: {type: String, required: true},
    description: String,
    dough: {type: String, required: true},
    glase: {type: String, required: true},
    sprinkles: {type: String, required: true},
    logo: String,
});

const Donut = mongoose.model('Donut', DonutSchema);

module.exports = Donut;