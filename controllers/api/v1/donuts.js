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
    //get donut by id
    let donutId = req.params.id;
    Donut.findById(donutId, (err, donut) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "No donut found"
            }
            res.json(response); 
    }
        let response = {
            status: "success",
            message: "GETTING donut by id",
            data: donut
        }
        res.json(response);
        });
}

getOrderByClient = (req, res) => {
    //get order by client
    let client = req.params.client;
    Donut.find({client: client}, (err, donut) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "No orders found by this client"
            }
            res.json(response);
        }
        let response = {
            status: "success",
            message: "GETTING orders by client",
            data: donut
        }
        res.json(response);
    });
}

createDonut = (req, res) => {
    //create donut
    /*
    let name = req.body.name;
    let dough = req.body.dough;
    let glase = req.body.glase;
    let sprinkles = req.body.sprinkles;
    let logo = req.body.logo;
    let dateOfCreation = req.body.dateOfCreation;
    let email = req.body.email;
    let order = req.body.order;
    let type = req.body.type;
    let client = req.body.client;
    let amount = req.body.amount;
    let description = req.body.description;
    let status = req.body.status;

    let donut = new Donut({
        name: name,
        description: description,
        dough: dough,
        glase: glase,
        sprinkles: sprinkles,
        logo: logo,
        dateOfCreation: dateOfCreation,
        email: email,
        order: order,
        type: type,
        client: client,
        amount: amount,
        description: description,
        status: status
    }); */

    Donut.create(req.body , (err, donut) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "Error creating donut",
            }
            res.status(404).json(response);
        }
        res.status(200).json({
            status: "success",
            message: "Donut created",
            data: donut
        });
    });
}



deleteDonut = (req, res) => {
    //delete donut by id
    let donutId = req.params.id;
    Donut.findByIdAndRemove(donutId, (err, donut) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "Error deleting donut"
            }
            res.json(response);
        }
        let response = {
            status: "success",
            message: "Donut deleted",
            data: donut
        }
        res.json(response);
    });

}

module.exports = {
    getAllDonuts,
    getDonutById,
    createDonut,
    updateDonut,
    deleteDonut,
    getOrderByClient
}