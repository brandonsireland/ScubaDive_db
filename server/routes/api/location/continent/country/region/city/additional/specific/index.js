const express = require('express');
const router = express.Router({mergeParams: true});

const locationController = require('../../../../../../../../../controllers/location.ctrl');

// api/continent/id/country/id/region/id/city/id/additional/id/additonal2
router.get('/', locationController.get_all_specific);

// api/continent/id/country/id/region/id/city/id/additional/idadditonal2/id
router.get('/:specificId', locationController.get_specificId);

module.exports = router;