const propertyService = require('../services/propertyService');

exports.createProperty = async (req, res) => {
  try {
    const { name, address } = req.body;
    if (!name || !address) return res.status(400).json({ error: 'Name and address required' });

    const result = await propertyService.createProperty(name, address);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPropertyDetails = async (req, res) => {
  try {
    const result = await propertyService.getPropertyDetails(req.params.id);
    if (!result) return res.status(404).json({ error: 'Property not found' });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
