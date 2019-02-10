const express = require('express');
const router = express.Router();

router.use('/divesite', require('./divesite'));
router.use('/location', require('./location'));

module.exports = router;