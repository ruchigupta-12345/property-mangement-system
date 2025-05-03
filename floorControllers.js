const floorService = require('../services/floorServices');

exports.createFloor = async (req, res) => {
  try {
    const { property_id, floor_number } = req.body;
    const result = await floorService.createFloor(property_id, floor_number);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
