const express = require('express');
const router = express.Router({mergeParams: true});

const specificController = require('../../../../../../../../../controllers/specific.ctrl');

// Create routes
router.get('/create', specificController.specific_create_get);
router.post('/create', specificController.specific_create_post);

// Delete routes
router.get('/:specificId/delete', specificController.specific_delete_get);
router.post('/:specificId/delete', specificController.specific_delete_post);

// Update routes
router.get('/:specificId/update', specificController.specific_update_get);
router.post('/:specificId/update', specificController.specific_update_post);

// Get
// Get all specific
router.get('/', specificController.get_all_specifics);
// get specific Ids
router.get('/:specificId', specificController.get_specific_id);

module.exports = router;