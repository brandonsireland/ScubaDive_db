const express = require('express');
const router = express.Router({mergeParams: true});

const additionalController = require('../../../../controllers/additional.ctrl');

router.get('/', additionalController.get_all_additionals);

router.get('/:cityId', additionalController.get_additional_id);

module.exports = router;