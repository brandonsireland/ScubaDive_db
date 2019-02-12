const express = require('express');
const router = express.Router({mergeParams: true});

const locationController = require('../../../../../../controllers/location.ctrl');

// Use city routes
router.use('/:regionId/city', require('./city'));

// api/continent/id/country/id/region
router.get('/', locationController.get_all_regions);

// api/continent/id/country/id/region/region
router.get('/:regionId', locationController.get_regionId);

module.exports = router;