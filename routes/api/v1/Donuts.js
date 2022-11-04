var express = require('express');
var router = express.Router();

/* GET routes for Donuts. */
router.get('/', (req, res, next) => {
  res.send('GET root donut route 🍩');
});

router.get('/:id', (req, res) => {
    res.send(`GET donut route with id of ${req.params.id} 🍩`);
});

router.post('/', (req, res) => {
    res.send('POST your homemade donut 🍩');
});

router.delete('/:id', (req, res) => {
    res.send('DELETE donut with id: ' + req.params.id + '🍩');
});

router.put('/:id', (req, res) => {
    res.send('UPDATE donut with id: ' + req.params.id + '🍩');
});



module.exports = router;