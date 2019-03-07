const express = require('express');
const router = express.Router();

router.use('/divesite', require('./divesite'));
router.use('/location', require('./location'));
router.use('/tags', require('./tag'));
router.use('/types', require('./type'));
router.use('/accesses', require('./accesses'));
router.use('/experiencelvls', require('./explevels'));
router.use('/dangers', require('./dangers'))

module.exports = router;