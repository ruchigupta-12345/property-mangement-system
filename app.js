const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const propertyRoutes = require('./routes/propertyRoutes');
const floorRoutes = require('./routes/floorRoutes');
const unitRoutes = require('./routes/unitRoutes');

app.use(bodyParser.json());

app.use('/properties', propertyRoutes);
app.use('/floors', floorRoutes);
app.use('/units', unitRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
