const express = require('express');
const router = express.Router({mergeParams: true});

const specificController = require('../../../../controllers/specific.ctrl');

router.get('/', specificController.get_all_specifics);

router.get('/:cityId', specificController.get_specific_id);

module.exports = router;