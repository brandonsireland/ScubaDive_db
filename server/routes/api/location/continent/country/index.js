const express = require('express');
const router = express.Router({mergeParams: true});

const locationController = require('../../../../../controllers/location.ctrl');

// Use region routes
router.use('/:countryId/region', require('./region'));

// api/continent/country
router.get('/', locationController.get_all_countries);

// api/continent/id/country/id
router.get('/:countryId', locationController.get_countryId);

module.exports = router;