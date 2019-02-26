const express = require('express');
const router = express.Router();

router.use('/divesite', require('./divesite'));
router.use('/location', require('./location'));
router.use('/tags', require('./tag'));
router.use('/types', require('./type'));

module.exports = router;