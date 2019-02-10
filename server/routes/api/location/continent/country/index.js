const express = require('express');
const router = express.Router({mergeParams: true});

// Use region routes
router.use('/:countryId/region', require('./region'));

// api/continent/country
router.get('/', function(req, res) {
    //   get all countries
    res.send('these are the countries')
});

// api/continent/id/country/id
router.get('/:countryId', function(req, res) {
//   get specific country
    res.send('this is a specific country with countryId: ' + req.params.countryId)
});

module.exports = router;