const express = require('express');
const router = express.Router();

const continentController = require('../../../../controllers/continent.ctrl');

// Use Country routes
router.use('/:continentId/country', require('./country'));

// api/continent
router.get('/', continentController.get_all_continents)

// api/continent/:id
router.get('/:continentId', continentController.get_continent_id)

module.exports = router;