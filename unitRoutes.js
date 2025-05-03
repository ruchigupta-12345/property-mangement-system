const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitControllers');

router.post('/', unitController.createUnit);
router.put('/:id/book', unitController.bookUnit);
router.get('/available', unitController.getAvailableUnits);

module.exports = router;
