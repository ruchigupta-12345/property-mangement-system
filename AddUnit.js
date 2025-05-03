import React, { useEffect, useState } from 'react';
import propertyService from '../services/propertyService';
import unitService from '../services/unitService';
import styles from './AddProperty.module.css';

const AddUnit = () => {
  const [propertyId, setPropertyId] = useState('');
  const [floorList, setFloorList] = useState([]);
  const [floorId, setFloorId] = useState('');
  const [unitNumber, setUnitNumber] = useState('');

  useEffect(() => {
    propertyService.getAllProperties().then(setFloorList); // You may modify to get floors from backend
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await unitService.createUnit({ floor_id: floorId, unit_number: unitNumber });
    alert('Unit added!');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add Unit</h2>
      <input placeholder="Floor ID" value={floorId} onChange={(e) => setFloorId(e.target.value)} />
      <input placeholder="Unit Number" value={unitNumber} onChange={(e) => setUnitNumber(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUnit;
