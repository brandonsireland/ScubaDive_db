const express = require('express');
const router = express.Router({mergeParams: true});

// Use Country routes
router.use('/:id/additional', require('./additional'));

// api/continent/id/country/id/region/id/city
router.get('/', function(req, res) {
    //   get all countries
    res.send('these are the cities')
});

// api/continent/id/country/id/region/id/city/id
router.get('/:id', function(req, res) {
//   get specific country
    res.send('this is a specific city with id: ' + req.params.id)
});

module.exports = router;