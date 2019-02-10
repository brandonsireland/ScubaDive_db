const express = require('express');
const router = express.Router({mergeParams: true});

// Use city routes
router.use('/:id/city', require('./city'));

// api/continent/id/country/id/region
router.get('/', function(req, res) {
    //   get all countries
    res.send('these are the regions')
});

// api/continent/id/country/id/region/region
router.get('/:id', function(req, res) {
//   get specific country
    res.send('this is a specific region with id: ' + req.params.id)
});

module.exports = router;