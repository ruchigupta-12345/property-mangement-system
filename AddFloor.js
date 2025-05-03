import React, { useEffect, useState } from 'react';
import propertyService from '../services/propertyService';
import floorService from '../services/floorServices';
import styles from './AddProperty.module.css';

const AddFloor = () => {
  const [propertyId, setPropertyId] = useState('');
  const [floorNumber, setFloorNumber] = useState('');
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    propertyService.getAllProperties().then(setProperties);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await floorService.createFloor({ property_id: propertyId, floor_number: floorNumber });
    alert('Floor added!');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add Floor</h2>
      <select onChange={(e) => setPropertyId(e.target.value)} required>
        <option value="">Select Property</option>
        {properties.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
      <input type="number" placeholder="Floor Number" value={floorNumber} onChange={(e) => setFloorNumber(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddFloor;
