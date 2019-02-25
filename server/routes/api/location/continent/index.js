const express = require('express');
const router = express.Router();

const continentController = require('../../../../controllers/continent.ctrl');

// Use Country routes
router.use('/:continentId/country', require('./country'));

// Create routes
router.get('/create', continentController.continent_create_get);
router.post('/create', continentController.continent_create_post);

// Delete routes
router.get('/:continentId/delete', continentController.continent_delete_get);
router.post('/:continentId/delete', continentController.continent_delete_post);

// Update routes
router.get('/:continentId/update', continentController.continent_update_get);
router.post('/:continentId/update', continentController.continent_update_post);

// Get
// get all continents
router.get('/', continentController.get_all_continents);

// get one continent
router.get('/:continentId', continentController.get_continent_id);


module.exports = router;