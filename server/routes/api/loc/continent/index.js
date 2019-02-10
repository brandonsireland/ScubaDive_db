const express = require('express');
const router = express.Router();

// Use Country routes
router.use('/:id/country', require('./country'));

// api/continent
router.get('/', function(req, res) {

    // get all continents
    res.send('these are the continents')
});

// api/continent/:id
router.get('/:id', function(req, res) {

    // get specific continent
    res.send('this is a specific continent with id: ' + req.params.id)
});

module.exports = router;