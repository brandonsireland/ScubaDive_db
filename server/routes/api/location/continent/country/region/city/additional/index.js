const express = require('express');
const router = express.Router({mergeParams: true});

const additionalController = require('../../../../../../../../controllers/additional.ctrl');

// Use Country routes
router.use('/:addId/specific', require('./specific'));

// Create routes
router.get('/create', additionalController.additional_create_get);
router.post('/create', additionalController.additional_create_post);

// Delete routes
router.get('/:addId/delete', additionalController.additional_delete_get);
router.post('/:addId/delete', additionalController.additional_delete_post);

// Update routes
router.get('/:addId/update', additionalController.additional_update_get);
router.post('/:addId/update', additionalController.additional_update_post);

// Get
// Get all additionals
router.get('/', additionalController.get_all_additionals_from_city);
// get one additional
router.get('/:addId', additionalController.get_additional_id);

module.exports = router;