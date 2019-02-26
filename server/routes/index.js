const express = require('express');
const router = express.Router();

const index = require('../controllers/index.ctrl')

router.use('/api', require('./api'));

router.get('/', index.get_index);

// Deals with all other routes.
router.use('*', function(req, res){
    res.redirect('/');
});

module.exports = router;