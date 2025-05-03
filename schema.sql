CREATE TABLE properties2 (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE floors2 (
  id SERIAL PRIMARY KEY,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  floor_number INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE units2 (
  id SERIAL PRIMARY KEY,
  floor_id INTEGER REFERENCES floors(id) ON DELETE CASCADE,
  unit_number VARCHAR(20),
  status VARCHAR(20) DEFAULT 'Available',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
