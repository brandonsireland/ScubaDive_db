const express = require('express');
const router = express.Router({mergeParams: true});

const cityController = require('../../../../controllers/city.ctrl');

router.get('/', cityController.get_all_cities);

router.get('/:cityId', cityController.get_city_id);

module.exports = router;