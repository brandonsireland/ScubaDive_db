var router = require('express').Router();

// api/divesite
router.get('/', function(req, res) {
    //   get all dive sites
    res.send('get all dive sites')
});

// api/divesite/:id
router.get('/:id', function(req, res) {
//   get specific divesite
    res.send('get this specific dive site: ' + req.params.id)
});

module.exports = router;