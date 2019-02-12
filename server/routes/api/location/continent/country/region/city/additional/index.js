const express = require('express');
const router = express.Router({mergeParams: true});

const locationController = require('../../../../../../../../controllers/location.ctrl');

// Use Country routes
router.use('/:addId/specific', require('./specific'));

// api/continent/id/country/id/region/id/city/id/additional
router.get('/', locationController.get_all_additionals);

// api/continent/id/country/id/region/id/city/id/additional/id
router.get('/:addId', locationController.get_additionalId);

module.exports = router;