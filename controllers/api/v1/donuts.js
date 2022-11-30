const Donut = require('../models/Donut');

// controllers for the donuts api
getAllDonuts = (req, res) => {
    res.send('GET root donut route 🍩');
    Donut.find({}, (err, donuts) => {
        if (err) { 
            console.log(err)
            let response = {
                status: "error",
                message: "No donuts found"
            }
            res.json(response);
        }
        let response = {
            status: "success",
            message: "GETTING all donuts",
            data: donuts
        }
        res.json(response);
    });
}

getDonutById = (req, res) => {
    res.send(`GET donut route with id of ${req.params.id} 🍩`);
}

createDonut = (req, res) => {
    res.send('POST your homemade donut 🍩');
}

updateDonut = (req, res) => {
    res.send('UPDATE donut with id: ' + req.params.id + '🍩');
}

deleteDonut = (req, res) => {
    res.send('DELETE donut with id: ' + req.params.id + '🍩');
}

module.exports = {
    getAllDonuts,
    getDonutById,
    createDonut,
    updateDonut,
    deleteDonut
}