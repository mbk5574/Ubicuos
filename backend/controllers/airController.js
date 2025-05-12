const AirData = require('../models/AirData');

// Obtener todo
const getAllAirData = async (req, res) => {
  try {
    const data = await AirData.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllAirData };
