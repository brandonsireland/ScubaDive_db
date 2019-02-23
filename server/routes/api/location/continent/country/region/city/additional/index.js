const express = require('express');
const router = express.Router({mergeParams: true});

const additionalController = require('../../../../../../../../controllers/additional.ctrl');

// Use Country routes
router.use('/:addId/specific', require('./specific'));

// api/continent/id/country/id/region/id/city/id/additional
router.get('/', additionalController.get_all_additionals);

// api/continent/id/country/id/region/id/city/id/additional/id
router.get('/:addId', additionalController.get_additional_id);

module.exports = router;