import React, { useState } from 'react';

const ATMPage = () => {
  const [atmLocations, setATMLocations] = useState([
    {
      name: 'State Bank of India ATM',
      area: 'Downtown',
      distance: 5,
      image: 'https://example.com/atm1.jpg',
    },
    {
      name: 'ICICI Bank ATM',
      area: 'Suburb',
      distance: 10,
      image: 'https://example.com/atm2.jpg',
    },
    {
      name: 'HDFC Bank ATM',
      area: 'City Center',
      distance: 8,
      image: 'https://example.com/atm3.jpg',
    },
    {
      name: 'Axis Bank ATM',
      area: 'Business District',
      distance: 12,
      image: 'https://example.com/atm4.jpg',
    },
    {
      name: 'Punjab National Bank ATM',
      area: 'Industrial Area',
      distance: 15,
      image: 'https://example.com/atm5.jpg',
    },
    {
      name: 'Bank of Baroda ATM',
      area: 'Residential Zone',
      distance: 7,
      image: 'https://example.com/atm6.jpg',
    },
    {
      name: 'Canara Bank ATM',
      area: 'Shopping Complex',
      distance: 9,
      image: 'https://example.com/atm7.jpg',
    },
    {
      name: 'Union Bank of India ATM',
      area: 'Highway',
      distance: 20,
      image: 'https://example.com/atm8.jpg',
    },
    {
      name: 'Indian Bank ATM',
      area: 'Tourist Spot',
      distance: 25,
      image: '',
    },
    {
      name: 'Bank of India ATM',
      area: 'Park',
      distance: 3,
      image: 'https://example.com/atm10.jpg',
    },
    // Add more ATM locations here
  ]);

  const [sortOrder, setSortOrder] = useState(1);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder % 2) + 1);
  };

  const sortByDistance = () => {
    let sortedLocations;
    if (sortOrder === 1) {
      sortedLocations = [...atmLocations].sort((a, b) => a.distance - b.distance);
    } else if (sortOrder === 2) {
      sortedLocations = [...atmLocations].sort((a, b) => b.distance - a.distance);
    }
    setATMLocations(sortedLocations);
    toggleSortOrder();
  };

  return (
    <div className="container mt-4">
      <h2>ATM Locations</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={sortByDistance}>
          Sort by Distance
        </button>
      </div>
      <div className="row">
        {atmLocations.map((location, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={location.image}
                className="card-img-top"
                alt={location.name}
                style={{ height: '200px', width: '100%', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{location.name}</h5>
                <p className="card-text">
                  <strong>Area:</strong> {location.area}
                  <br />
                  <strong>Distance:</strong> {location.distance} km
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ATMPage;
