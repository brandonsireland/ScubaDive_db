const express = require('express');
const router = express.Router({mergeParams: true});

// Use Country routes
router.use('/:addId/specific', require('./specific'));

// api/continent/id/country/id/region/id/city/id/additional
router.get('/', function(req, res) {
    //   get all countries
    res.send('these are the additionals')
});

// api/continent/id/country/id/region/id/city/id/additional/id
router.get('/:addId', function(req, res) {
//   get specific country
    res.send('this is a specific additional info with id: ' + JSON.stringify(req.params))

});

module.exports = router;