const db = require('../db');

exports.createProperty = async (name, address) => {
  const result = await db.query(
    'INSERT INTO properties (name, address) VALUES ($1, $2) RETURNING *',
    [name, address]
  );
  return result.rows[0];
};

exports.getPropertyDetails = async (id) => {
  const result = await db.query('SELECT * FROM properties WHERE id = $1', [id]);
  return result.rows[0];
};
