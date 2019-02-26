const express = require('express');
const router = express.Router({mergeParams: true});

const regionController = require('../../../../../../controllers/region.ctrl');

// Use city routes
router.use('/:regionId/city', require('./city'));

// Create routes
router.get('/create', regionController.region_create_get);
router.post('/create', regionController.region_create_post);

// Delete routes
router.get('/:regionId/delete', regionController.region_delete_get);
router.post('/:regionId/delete', regionController.region_delete_post);

// Update routes
router.get('/:regionId/update', regionController.region_update_get);
router.post('/:regionId/update', regionController.region_update_post);

// Get
// get all regions from continent
router.get('/', regionController.get_all_regions_from_country);
// get one region
router.get('/:regionId', regionController.get_region_id);

module.exports = router;
