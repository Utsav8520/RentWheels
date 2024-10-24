import React, { useState } from 'react';
import axios from 'axios';

const VehicleUploadForm = ({ isOpen, onClose }) => {
  const [vehicleData, setVehicleData] = useState({
    name: '',
    type: '',
    seater: '',
    transmission: '',
    pricePerDay: '',
    driverAvailable: false,
    available: true,
  });
  const [vehicleImage, setVehicleImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVehicleData({
      ...vehicleData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setVehicleImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('vehicleImage', vehicleImage);
    Object.keys(vehicleData).forEach((key) => {
      formData.append(key, vehicleData[key]);
    });

    try {
      const response = await axios.post('/vehicles/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Vehicle added:', response.data);
      onClose();
    } catch (error) {
      console.error('Error uploading vehicle:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed w-full h-full inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white px-8 py-2 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Vehicle</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1" htmlFor="name">Vehicle Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter vehicle name"
              value={vehicleData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1" htmlFor="type">Vehicle Type</label>
            <input
              type="text"
              name="type"
              id="type"
              className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="E.g. SUV, Sedan, etc."
              value={vehicleData.type}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1" htmlFor="seater">Seater Capacity</label>
            <input
              type="number"
              name="seater"
              id="seater"
              className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Number of seats"
              value={vehicleData.seater}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1" htmlFor="transmission">Transmission</label>
            <input
              type="text"
              name="transmission"
              id="transmission"
              className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Automatic or Manual"
              value={vehicleData.transmission}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="pricePerDay">Price Per Day</label>
            <input
              type="number"
              name="pricePerDay"
              id="pricePerDay"
              className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter price per day"
              value={vehicleData.pricePerDay}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block text-gray-700 mr-2" htmlFor="driverAvailable">Driver Available</label>
            <input
              type="checkbox"
              name="driverAvailable"
              id="driverAvailable"
              checked={vehicleData.driverAvailable}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="block text-gray-700 mr-2" htmlFor="available">Available</label>
            <input
              type="checkbox"
              name="available"
              id="available"
              checked={vehicleData.available}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1" htmlFor="vehicleImage">Upload Vehicle Image</label>
            <input
              type="file"
              name="vehicleImage"
              id="vehicleImage"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Upload Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleUploadForm;
