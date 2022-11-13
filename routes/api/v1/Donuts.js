var express = require('express');
var router = express.Router();

// import controller
var donutsController = require('./../../../controllers/api/v1/Donuts');

/* GET ROUTES */
/* GET routes for Donuts. */
    router.get('/', donutsController.getAllDonuts);

    router.get('/:id', donutsController.getDonutById);

/* POST ROUTES */
    router.post('/', donutsController.createDonut);

/* PUT ROUTES */
    router.put('/:id', donutsController.updateDonut);

/* DELETE ROUTES */
    router.delete('/:id', donutsController.deleteDonut);


module.exports = router;