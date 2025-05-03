import React, { useEffect, useState } from 'react';
import unitService from '../services/unitService';
import styles from './AddProperty.module.css';

const BookUnit = () => {
  const [units, setUnits] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    unitService.getAvailableUnits().then(setUnits);
  }, []);

  const handleBook = async () => {
    if (!selectedId) return;
    await unitService.bookUnit(selectedId);
    alert('Unit booked!');
  };

  return (
    <div className={styles.form}>
      <h2>Book Available Unit</h2>
      <select onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Select Unit</option>
        {units.map(unit => (
          <option key={unit.id} value={unit.id}>
            Unit {unit.unit_number} (Floor {unit.floor_id})
          </option>
        ))}
      </select>
      <button onClick={handleBook}>Book Unit</button>
    </div>
  );
};

export default BookUnit;
