const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonutSchema = new mongoose.Schema({
    id: Number,

    //donut configuration
    donut:{
        dough: {type: String, default: "Normaal"},
        icing: {type: String, default:"Suiker"},
        topping: {type: String, required: true},
        logo: {type: String},
        dateOfCreation: {type: Date, default: Date.now},    
    },
   
    client:{
        email: {type: String, required: true},
        name: {type: String, required: true},
    },

    order:{
        amount: {type: Number, default: 0},
        description: {type: String},
        status: {type: String, default: "Wachten tot opstart ..."},    
    }
});

const Donut = mongoose.model('Donut', DonutSchema);

module.exports = Donut;