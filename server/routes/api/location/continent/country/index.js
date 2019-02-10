const express = require('express');
const router = express.Router({mergeParams: true});

// Use region routes
router.use('/:id/region', require('./region'));

// api/continent/country
router.get('/', function(req, res) {
    //   get all countries
    res.send('these are the countries')
});

// api/continent/id/country/id
router.get('/:id', function(req, res) {
//   get specific country
    res.send('this is a specific country with id: ' + req.params.id)
});

module.exports = router;