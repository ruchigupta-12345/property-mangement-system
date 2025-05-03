const pool = require('../db'); 


exports.createFloor = async (property_id, floor_number) => {
  const result = await pool.query(
    'INSERT INTO floors (property_id, floor_number) VALUES ($1, $2) RETURNING *',
    [property_id, floor_number]
  );
  return result.rows[0];
};
