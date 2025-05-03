const express = require('express');
const router = express.Router();
const floorController = require('../controllers/floorControllers');

router.post('/', floorController.createFloor);

module.exports = router;
