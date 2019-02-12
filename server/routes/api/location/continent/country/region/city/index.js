const express = require('express');
const router = express.Router({mergeParams: true});

const locationController = require('../../../../../../../controllers/location.ctrl');

// Use Country routes
router.use('/:cityId/additional', require('./additional'));

// api/continent/id/country/id/region/id/city
router.get('/', locationController.get_all_cities);

// api/continent/id/country/id/region/id/city/id
router.get('/:cityId', locationController.get_cityId);

module.exports = router;