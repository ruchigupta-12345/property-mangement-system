# property-mangement-system
IT is an full stack website in whic i havve use react.js in frontend for the backend i have used node.js exppress and for the databse postgresql.
## Setup Instructions

1. Clone the repository.
2. Run npm install in /backend.
3. Create PostgreSQL DB named property_management.
4. Run the SQL script in create_tables.sql.
5. Start the server: node app.js.

## Database Schema Overview

- properties(id, name, address)
- floors(id, property_id, floor_number)
- units(id, floor_id, unit_number, status)

## API Endpoints

### Properties
- POST /api/properties - Create property
- GET /api/properties/:id - Get property details

### Floors
- POST /api/floors - Create floor

### Units
- POST /api/units - Create unit
- PUT /api/units/book/:id - Book unit
- GET /api/units/available - List available units
