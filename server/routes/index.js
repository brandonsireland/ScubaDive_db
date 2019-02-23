const express = require('express');
const router = express.Router();

const index = require('../controllers/index.ctrl')

router.use('/api', require('./api'));

router.get('/', index.get_index);

module.exports = router;