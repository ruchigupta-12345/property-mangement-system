import React, { useEffect, useState } from 'react';
import propertyService from '../services/propertyService';
import styles from './AddProperty.module.css';

const ViewProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    propertyService.getAllProperties().then(setProperties);
  }, []);

  return (
    <div className={styles.form}>
      <h2>Properties</h2>
      {properties.map(p => (
        <div key={p.id}>
          <strong>{p.name}</strong><br />
          {p.address}
        </div>
      ))}
    </div>
  );
};

export default ViewProperty;
