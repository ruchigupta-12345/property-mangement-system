import axios from 'axios';
const API_URL = 'http://localhost:3000/units';

const createUnit = async (unit) => (await axios.post(API_URL, unit)).data;

const getAvailableUnits = async () => (await axios.get(`${API_URL}/available`)).data;

const bookUnit = async (id) => (await axios.patch(`${API_URL}/${id}/book`)).data;

export default { createUnit, getAvailableUnits, bookUnit };
