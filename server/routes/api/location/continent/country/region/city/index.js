const express = require('express');
const router = express.Router({mergeParams: true});

// Use Country routes
router.use('/:cityId/additional', require('./additional'));

// api/continent/id/country/id/region/id/city
router.get('/', function(req, res) {
    //   get all countries
    res.send('these are the cities')
});

// api/continent/id/country/id/region/id/city/id
router.get('/:cityId', function(req, res) {
//   get specific country
    res.send('this is a specific city with id: ' + req.params.cityId)
});

module.exports = router;