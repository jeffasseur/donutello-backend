const Donut = require('../../../models/Donut.js');
const jwt = require('jsonwebtoken');

const getIdFromJWT = (req) => {
    if (req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.substring(7, req.headers.authorization.length);
    } else {
        return false;
    }

    const decoded = jwt.verify(token, "SecretWord");//config.get('jwt.secret'));
    return decoded.uid;
}

// controllers for the donuts api
getAllDonuts = (req, res) => {
    const admin = getIdFromJWT(req);
    if (!admin) {
        return res.json({
            "status": "error",
            "message": "You need to be logged in to see the donuts"
        });
    }else{
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
}

getDonutById = (req, res) => {
    //check if token
    const admin = getIdFromJWT(req);
    if (!admin) {
        return res.json({
            "status": "error",
            "message": "You need to be logged in to see the donuts"
        });
    }else{
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
}

getOrderByClient = (req, res) => {
    //check if token
    const admin = getIdFromJWT(req);
    if (!admin) {
        return res.json({
            "status": "error",
            "message": "You need to be logged in to see the donuts"
        });
    }else{
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

updateDonut = (req, res) => {
    //update donut by id

    Donut.findByIdAndUpdate(
        {_id : req.params.id},
        {status : req.body.status},
        {new: true},
        (err, donut) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "Deze id bevat geen donut."
            }
            res.json(response);
        }
        let response = {
            status: "success",
            message: "Donut status is aangepast.",
        }
        res.json(response);
    });
}

deleteDonut = (req, res) => {
    //check if token
    const admin = getIdFromJWT(req);
    if (!admin) {
        return res.json({
            "status": "error",
            "message": "You need to be logged in to see the donuts"
        });
    }else{
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
}

module.exports = {
    getIdFromJWT,
    getAllDonuts,
    getDonutById,
    createDonut,
    updateDonut,
    deleteDonut,
    getOrderByClient
}