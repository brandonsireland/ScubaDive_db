const express = require('express');
const router = express.Router({mergeParams: true});

const regionController = require('../../../../../../controllers/region.ctrl');

// Use city routes
router.use('/:regionId/city', require('./city'));

// api/continent/id/country/id/region
router.get('/', regionController.get_all_regions);

// api/continent/id/country/id/region/region
router.get('/:regionId', regionController.get_region_id);

module.exports = router;