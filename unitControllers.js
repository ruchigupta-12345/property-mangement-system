const unitService = require('../services/unitServices');

exports.createUnit = async (req, res) => {
  try {
    const { floor_id, unit_number } = req.body;
    const result = await unitService.createUnit(floor_id, unit_number);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.bookUnit = async (req, res) => {
  try {
    const result = await unitService.bookUnit(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAvailableUnits = async (req, res) => {
  try {
    const result = await unitService.getAvailableUnits();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
