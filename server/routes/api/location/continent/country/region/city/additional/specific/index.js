const express = require('express');
const router = express.Router({mergeParams: true});

// api/continent/id/country/id/region/id/city/id/additional/id/additonal2
router.get('/', function(req, res) {
    //   get all countries
    res.send('these are the additionals')
});

// api/continent/id/country/id/region/id/city/id/additional/idadditonal2/id
router.get('/:specificId', function(req, res) {
//   get specific country
    res.send('this is a specific additional info with specificId: ' + JSON.stringify(req.params))

});

module.exports = router;