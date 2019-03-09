const router = require('express').Router();

const geoJSONController = require('../../../controllers/geojson.ctrl');

// Get GEO 
router.get('/geo',geoJSONController.get_all_geo);

router.get('/geo/:geoId', geoJSONController.get_geo_id);

// Create routes
router.get('/create', geoJSONController.geo_create_get);
router.post('/create', geoJSONController.geo_create_post);

// Delete routes
router.get('/:diveSiteId/delete', geoJSONController.geo_delete_get);
router.post('/:diveSiteId/delete', geoJSONController.geo_delete_post);

// Update routes
router.get('/:diveSiteId/update', geoJSONController.geo_update_get);
router.post('/:diveSiteId/update', geoJSONController.geo_update_post);

module.exports = router;