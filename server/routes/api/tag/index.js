const router = require('express').Router();

// Tag Controller;
const tagController = require('../../../controllers/tags.ctrl');

// Create routes
router.get('/create', tagController.tag_create_get);
router.post('/create', tagController.tag_create_post);

// Delete routes
router.get('/:tagId/delete', tagController.tag_delete_get);
router.post('/:tagId/delete', tagController.tag_delete_post);

// Update routes
router.get('/:tagId/update', tagController.tag_update_get);
router.post('/:tagId/update', tagController.tag_update_post);

// Get Routes
// api/tag
router.get('/', tagController.get_all_tags);

// api/tag/:id
router.get('/:tagId', tagController.get_tag_id);

module.exports = router;