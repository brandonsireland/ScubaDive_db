const express = require('express');
const router = express.Router();

// api/continent
router.use('/continent', require('./continent'));

// api/country
router.use('/countries',require('./country'));

//  api/regions
router.use('/regions', require('./region'));

//  api/cities
router.use('/cities', require('./city'));

// api/additionals
router.use('/additionals', require('./additional'));

// api/specifics
router.use('/specifics', require('./specific'));


router.get('/', function(req, res) {
    //   redirect to continent for the moment
    res.redirect('/api/location/continent');
});

module.exports = router;