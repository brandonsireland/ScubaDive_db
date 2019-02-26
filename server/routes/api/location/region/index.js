const express = require('express');
const router = express.Router({mergeParams: true});

const regionController = require('../../../../controllers/region.ctrl');

router.get('/', regionController.get_all_regions);

router.get('/:regionId', regionController.get_region_id);

module.exports = router;