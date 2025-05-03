import React from 'react';
import AddProperty from './pages/AddProperty';
import AddFloor from './pages/AddFloor';
// Import other pages similarly

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🏢 Property Management</h1>
      <AddProperty />
      <AddFloor />
      {/* Add routing later if needed */}
    </div>
  );
};

export default App;
