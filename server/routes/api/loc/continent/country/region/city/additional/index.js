const express = require('express');
const router = express.Router({mergeParams: true});

// api/continent/id/country/id/region/id/city/id/additional
router.get('/', function(req, res) {
    //   get all countries
    res.send('these are the additionals')
});

// api/continent/id/country/id/region/id/city/id/additional/id
router.get('/:id', function(req, res) {
//   get specific country
    res.send('this is a specific additional info with id: ' + req.params.id)
});

module.exports = router;