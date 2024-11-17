import React, { useEffect, useState } from 'react';
import './CarPage.css';
import CarCard from '../../components/CarCard/CarCard';
import axios from 'axios';

const CarPage = () => {
  const [carData, setCarData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/mycars', {"headers": {"authorization": localStorage.getItem('token')}})
    .then(response => {
      setCarData(response.data.data.cars)
    })
    .catch(error => console.log(error))
  },[])
  return (
    <div className="car-page">
      <h1 className="car-page-title">Car Listings</h1>
      <div className="car-cards-container">
        {carData.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarPage;
