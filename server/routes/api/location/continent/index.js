const express = require('express');
const router = express.Router();

const locationController = require('../../../../controllers/location.ctrl');

// Use Country routes
router.use('/:continentId/country', require('./country'));

// api/continent
router.get('/', locationController.get_all_continents)

// api/continent/:id
router.get('/:continentId', locationController.get_continentId)

module.exports = router;