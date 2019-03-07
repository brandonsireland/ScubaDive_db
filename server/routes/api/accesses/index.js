const router = require('express').Router();

// access Controller;
const accessController = require('../../../controllers/accesses.ctrl');

// Create routes
router.get('/create', accessController.access_create_get);
router.post('/create', accessController.access_create_post);

// Delete routes
router.get('/:accessId/delete', accessController.access_delete_get);
router.post('/:accessId/delete', accessController.access_delete_post);

// Update routes
router.get('/:accessId/update', accessController.access_update_get);
router.post('/:accessId/update', accessController.access_update_post);

// Get Routes
// api/access
router.get('/', accessController.get_all_accesses);

// api/access/:id
router.get('/:accessId', accessController.get_access_id);

module.exports = router;