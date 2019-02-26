const express = require('express');
const router = express.Router({mergeParams: true});

const cityController = require('../../../../../../../controllers/city.ctrl');

// Use Country routes
router.use('/:cityId/additional', require('./additional'));

// Create routes
router.get('/create', cityController.city_create_get);
router.post('/create', cityController.city_create_post);

// Delete routes
router.get('/:cityId/delete', cityController.city_delete_get);
router.post('/:cityId/delete', cityController.city_delete_post);

// Update routes
router.get('/:cityId/update', cityController.city_update_get);
router.post('/:cityId/update', cityController.city_update_post);

// Get
// get all cities
router.get('/', cityController.get_all_cities_from_region);

// get one city
router.get('/:cityId', cityController.get_city_id);

module.exports = router;