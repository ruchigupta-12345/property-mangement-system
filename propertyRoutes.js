const express = require('express');
const router = express.Router();
const controller = require('../controllers/propertyController');

router.post('/', controller.createProperty);
router.get('/:id/details', controller.getPropertyDetails);

module.exports = router;
