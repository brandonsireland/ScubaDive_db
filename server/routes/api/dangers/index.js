const router = require('express').Router();

// danger Controller;
const dangerController = require('../../../controllers/dangers.ctrl');

// Create routes
router.get('/create', dangerController.danger_create_get);
router.post('/create', dangerController.danger_create_post);

// Delete routes
router.get('/:dangerId/delete', dangerController.danger_delete_get);
router.post('/:dangerId/delete', dangerController.danger_delete_post);

// Update routes
router.get('/:dangerId/update', dangerController.danger_update_get);
router.post('/:dangerId/update', dangerController.danger_update_post);

// Get Routes
// api/danger
router.get('/', dangerController.get_all_dangers);

// api/danger/:id
router.get('/:dangerId', dangerController.get_danger_id);

module.exports = router;