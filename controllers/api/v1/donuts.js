const Donut = require('../../../models/Donut.js');

// controllers for the donuts api
getAllDonuts = (req, res) => {
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
    //create donut
    let name = req.body.name;
    let description = req.body.description;
    let dough = req.body.dough;
    let glase = req.body.glase;
    let sprinkles = req.body.sprinkles;
    let logo = req.body.logo;

    let donut = new Donut({
        name: name,
        description: description,
        dough: dough,
        glase: glase,
        sprinkles: sprinkles,
        logo: logo
    });

    donut.save((err, donut) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "Error creating donut"
            }
            res.json(response);
        }
        let response = {
            status: "success",
            message: "Donut created",
            data: donut
        }
        res.json(response);
    });
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