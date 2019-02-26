const express = require('express');
const router = express.Router({mergeParams: true});

const countryController = require('../../../../../controllers/country.ctrl');

// Use region routes
router.use('/:countryId/region', require('./region'));

// Create routes
router.get('/create', countryController.country_create_get);
router.post('/create', countryController.country_create_post);

// Delete routes
router.get('/:countryId/delete', countryController.country_delete_get);
router.post('/:countryId/delete', countryController.country_delete_post);

// Update routes
router.get('/:countryId/update', countryController.country_update_get);
router.post('/:countryId/update', countryController.country_update_post);

// Get
// get all countries from continent
router.get('/', countryController.get_all_countries_from_continent);
// get one country
router.get('/:countryId', countryController.get_country_id);


module.exports = router;