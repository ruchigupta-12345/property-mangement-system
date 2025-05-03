import React, { useState } from 'react';
import propertyService from '../services/propertyService';
import styles from './AddProperty.module.css';

const AddProperty = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await propertyService.createProperty({ name, address });
    alert('Property added!');
    setName('');
    setAddress('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add Property</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddProperty;
