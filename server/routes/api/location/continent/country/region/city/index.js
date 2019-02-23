const express = require('express');
const router = express.Router({mergeParams: true});

const cityController = require('../../../../../../../controllers/city.ctrl');

// Use Country routes
router.use('/:cityId/additional', require('./additional'));

// api/continent/id/country/id/region/id/city
router.get('/', cityController.get_all_cities);

// api/continent/id/country/id/region/id/city/id
router.get('/:cityId', cityController.get_city_id);

module.exports = router;