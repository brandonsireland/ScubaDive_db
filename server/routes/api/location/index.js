const express = require('express');
const router = express.Router();

// api/continent
router.use('/continent', require('./continent'));

// api/country
router.use('/country',require('./country'));

router.get('/', function(req, res) {
    //   redirect to continent for the moment
    res.redirect('/api/location/continent');
});

module.exports = router;