const router = require('express').Router();

// Dive Site Controller;

const diveSiteController = require('../../../controllers/divesite.ctrl');

// Create routes
router.get('/create', diveSiteController.dive_site_create_get);
router.post('/create', diveSiteController.dive_site_create_post);

// Delete routes
router.get('/:diveSiteId/delete', diveSiteController.dive_site_delete_get);
router.post('/:diveSiteId/delete', diveSiteController.dive_site_delete_post);

// Update routes
router.get('/:diveSiteId/update', diveSiteController.dive_site_update_get);
router.post('/:diveSiteId/update', diveSiteController.dive_site_update_post);

// Get Routes
router.get('/', diveSiteController.get_all_dive_sites);

router.get('/:id', diveSiteController.get_dive_site_id);


module.exports = router;