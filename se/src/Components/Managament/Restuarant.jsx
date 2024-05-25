import React, { useState } from 'react';

const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState([
    {
      name: 'The Taj Mahal Palace',
      cuisine: 'Indian, Continental',
      area: 'Colaba',
      distance: 2,
      rating: 4.5,
    },
    {
      name: 'Leopold Cafe',
      cuisine: 'Indian, Continental',
      area: 'Colaba',
      distance: 1.5,
      rating: 4.2,
    },
    {
      name: 'Britannia & Co.',
      cuisine: 'Parsi, Continental',
      area: 'Ballard Estate',
      distance: 3,
      rating: 4.8,
    },
  ]);

  const [sortBy, setSortBy] = useState('');

  const toggleSortBy = (criteria) => {
    setSortBy(criteria === sortBy ? '' : criteria);
  };

  const sortedRestaurants = [...restaurants].sort((a, b) => {
    if (sortBy === 'distance') {
      return a.distance - b.distance;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="container mt-4">
      <h2>Restaurants</h2>
      <div className="btn-group mb-3">
        <button
          className={`btn btn-primary ${sortBy === 'distance' ? 'active' : ''}`}
          onClick={() => toggleSortBy('distance')}
        >
          Sort by Distance
        </button>
        
        <button
          className={`btn btn-primary ${sortBy === 'rating' ? 'active' : ''}`}
          onClick={() => toggleSortBy('rating')}
        >
          Sort by Rating
        </button>
        
      </div>
      <div className="row">
        {sortedRestaurants.map((restaurant, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-img-container">
                {/* Use inline style to set a fixed height for the image container */}
                <img 
                  src={restaurant.image} 
                  className="card-img-top" 
                  alt={restaurant.name}
                  style={{ objectFit: 'cover', height: '150px' }} 
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">
                  <strong>Cuisine:</strong> {restaurant.cuisine}
                  <br />
                  <strong>Area:</strong> {restaurant.area}
                  <br />
                  <strong>Distance:</strong> {restaurant.distance} km
                  <br />
                  <strong>Rating:</strong> {restaurant.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
