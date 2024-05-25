import React, { useState } from 'react';
const ShoppingMallPage = () => {
  const [malls] = useState([
    {
      name: 'Mall of America',
      location: 'Bloomington, Minnesota, USA',
      stores: 500,
      rating: 4.8,
      floors: 4,
      parking: '5000+ spaces',
      entertainment: 'Theme Park, Aquarium, Mini Golf',
    },
    {
      name: 'West Edmonton Mall',
      location: 'Edmonton, Alberta, Canada',
      stores: 800,
      rating: 4.5,
      floors: 5,
      parking: '10,000+ spaces',
      entertainment: 'Indoor Water Park, Ice Rink, Roller Coaster',
    },
    {
      name: 'Dubai Mall',
      location: 'Dubai, United Arab Emirates',
      stores: 1200,
      rating: 4.9,
      floors: 3,
      parking: '14,000+ spaces',
      entertainment: 'Dubai Aquarium, Ice Rink, VR Park',
    },
    {
      name: 'SM Megamall',
      location: 'Mandaluyong, Metro Manila, Philippines',
      stores: 1000,
      rating: 4.7,
      floors: 6,
      parking: '7000+ spaces',
      entertainment: 'Movie Theaters, Bowling Alley, Food Court',
    },
    {
      name: 'CentralWorld',
      location: 'Bangkok, Thailand',
      stores: 1000,
      rating: 4.6,
      floors: 7,
      parking: '6000+ spaces',
      entertainment: 'Cinema, Kids Zone, Ice Skating Rink',
    },
    {
      name: 'Mall of the Emirates',
      location: 'Dubai, United Arab Emirates',
      stores: 700,
      rating: 4.7,
      floors: 3,
      parking: '8000+ spaces',
      entertainment: 'Ski Dubai, Vox Cinemas, Magic Planet',
    },
    {
      name: 'Chadstone Shopping Centre',
      location: 'Melbourne, Victoria, Australia',
      stores: 550,
      rating: 4.6,
      floors: 3,
      parking: '10,000+ spaces',
      entertainment: 'Hoyts Cinema, Legoland Discovery Centre',
    },
    {
      name: 'Mall of Scandinavia',
      location: 'Solna, Stockholm, Sweden',
      stores: 224,
      rating: 4.5,
      floors: 3,
      parking: '4500+ spaces',
      entertainment: 'Arenastaden, Skyview, OLearys Bowling & Gokart',
    },
    {
      name: 'Lotte World Mall',
      location: 'Seoul, South Korea',
      stores: 1200,
      rating: 4.7,
      floors: 5,
      parking: '7000+ spaces',
      entertainment: 'Lotte World Aquarium, Lotte World Adventure',
    },
  ]);

  const [sortBy, setSortBy] = useState('');

  const toggleSortBy = (criteria) => {
    setSortBy(criteria === sortBy ? '' : criteria);
  };

  const sortedMalls = [...malls].sort((a, b) => {
    if (sortBy === 'stores') {
      return b.stores - a.stores;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="container mt-4">
      <h2>Shopping Malls</h2>
      <div className="btn-group mb-3">
  <button
    className={`btn btn-primary ${sortBy === 'stores' ? 'active' : ''}`}
    onClick={() => toggleSortBy('stores')}
    style={{ marginRight: '30px' }}
  >
    Sort by Stores
  </button>
  <button
    className={`btn btn-primary ${sortBy === 'rating' ? 'active' : ''}`}
    onClick={() => toggleSortBy('rating')}
  >
    Sort by Rating
  </button>
</div>

      <div className="row">
        {sortedMalls.map((mall, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{mall.name}</h5>
                <p className="card-text">
                  <strong>Location:</strong> {mall.location}
                  <br />
                  <strong>Stores:</strong> {mall.stores}
                  <br />
                  <strong>Floors:</strong> {mall.floors}
                  <br />
                  <strong>Parking:</strong> {mall.parking}
                  <br />
                  <strong>Entertainment:</strong> {mall.entertainment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingMallPage;
