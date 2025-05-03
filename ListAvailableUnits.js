import React, { useEffect, useState } from 'react';
import unitService from '../services/unitService';
import styles from './AddProperty.module.css';

const ListAvailableUnit = () => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    unitService.getAvailableUnits().then(setUnits);
  }, []);

  return (
    <div className={styles.form}>
      <h2>Available Units</h2>
      <ul>
        {units.map(unit => (
          <li key={unit.id}>
            Unit {unit.unit_number} on Floor {unit.floor_id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAvailableUnit;
