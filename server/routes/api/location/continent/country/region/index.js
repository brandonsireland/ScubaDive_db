const express = require('express');
const router = express.Router({mergeParams: true});

// Use city routes
router.use('/:regionId/city', require('./city'));

// api/continent/id/country/id/region
router.get('/', function(req, res) {
    //   get all countries
    res.send('these are the regions')
});

// api/continent/id/country/id/region/region
router.get('/:regionId', function(req, res) {
//   get specific country
    res.send('this is a specific region with regionId : ' + req.params.regionId)
});

module.exports = router;