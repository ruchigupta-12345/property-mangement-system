import axios from 'axios';
const API_URL = 'http://localhost:3000/properties';

const getAllProperties = async () => (await axios.get(API_URL)).data;

const createProperty = async (property) => (await axios.post(API_URL, property)).data;

const getPropertyDetails = async (id) => (await axios.get(`${API_URL}/${id}/details`)).data;

export default { getAllProperties, createProperty, getPropertyDetails };
