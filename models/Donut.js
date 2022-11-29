const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonutSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    dough: String,
    glase: String,
    sprinkles: String,
    logo: String,
});

const Donut = mongoose.model('Donut', DonutSchema);

module.exports = Donut;