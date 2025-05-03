// services/propertyServices.js
const pool = require('../db');

exports.createProperty = async (name, address) => {
  const result = await pool.query(
    'INSERT INTO properties (name, address) VALUES ($1, $2) RETURNING *',
    [name, address]
  );
  return result.rows[0];
};

exports.getPropertyDetails = async (id) => {
  const propertyResult = await pool.query(
    'SELECT * FROM properties WHERE id = $1',
    [id]
  );

  const floorResult = await pool.query(
    'SELECT * FROM floors WHERE property_id = $1',
    [id]
  );

  const floors = floorResult.rows;

  for (let floor of floors) {
    const unitResult = await pool.query(
      'SELECT * FROM units WHERE floor_id = $1',
      [floor.id]
    );
    floor.units = unitResult.rows;
  }

  const property = propertyResult.rows[0];
  property.floors = floors;

  return property;
};
