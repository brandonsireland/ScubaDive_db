const router = require('express').Router();

// type Controller;
const typeController = require('../../../controllers/types.ctrl');

// Create routes
router.get('/create', typeController.type_create_get);
router.post('/create', typeController.type_create_post);

// Delete routes
router.get('/:typeId/delete', typeController.type_delete_get);
router.post('/:typeId/delete', typeController.type_delete_post);

// Update routes
router.get('/:typeId/update', typeController.type_update_get);
router.post('/:typeId/update', typeController.type_update_post);

// Get Routes
// api/type
router.get('/', typeController.get_all_types);

// api/type/:id
router.get('/:typeId', typeController.get_type_id);

module.exports = router;