const express = require('express');
const router = express.Router({mergeParams: true});

const specificController = require('../../../../../../../../../controllers/specific.ctrl');

// api/continent/id/country/id/region/id/city/id/additional/id/additonal2
router.get('/', specificController.get_all_specific);

// api/continent/id/country/id/region/id/city/id/additional/idadditonal2/id
router.get('/:specificId', specificController.get_specific_id);

module.exports = router;