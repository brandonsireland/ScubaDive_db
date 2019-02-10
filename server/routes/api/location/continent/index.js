const express = require('express');
const router = express.Router();
const DiveSite = require('../../../../models/DiveSite')

const locationController = require('../../../../controllers/location.ctrl');

// Use Country routes
router.use('/:continentId/country', require('./country'));

// api/continent
router.get('/', function(req, res) {

    // get all continents
    res.send('these are the continents');
    // DiveSite.find({}, 'continent', (err, continents ) => {
    //     if(err){
    //         res.send(err);
    //     };
    //     res.json(continents)
    // })
});

// api/continent/:id
router.get('/:continentId', function(req, res) {

    // get specific continent
    res.send('this is a specific continent with continentId : ' + req.params.continentId)
});

// router.get(locationController.get_all_continents)

module.exports = router;