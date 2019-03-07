const router = require('express').Router();

// explevel Controller;
const explevelController = require('../../../controllers/explevels.ctrl');

// Create routes
router.get('/create', explevelController.explevel_create_get);
router.post('/create', explevelController.explevel_create_post);

// Delete routes
router.get('/:explevelId/delete', explevelController.explevel_delete_get);
router.post('/:explevelId/delete', explevelController.explevel_delete_post);

// Update routes
router.get('/:explevelId/update', explevelController.explevel_update_get);
router.post('/:explevelId/update', explevelController.explevel_update_post);

// Get Routes
// api/explevel
router.get('/', explevelController.get_all_explevels);

// api/explevel/:id
router.get('/:explevelId', explevelController.get_explevel_id);

module.exports = router;