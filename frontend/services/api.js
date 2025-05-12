// api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Función para obtener los datos acústicos
export const fetchAcousticData = async () => {
  const response = await axios.get(`${API_URL}/acoustics`);
  return response.data;
};
