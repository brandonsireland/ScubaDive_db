const express = require('express');
const router = express.Router({mergeParams: true});

const countryController = require('../../../../controllers/country.ctrl');

// api/continent/country
router.get('/', countryController.get_all_countries);

// api/continent/id/country/id
router.get('/:countryId', countryController.get_country_id);

module.exports = router;