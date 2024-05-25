import React, { useState } from "react";

const PoliceStationPage = () => {
  const [policeStations] = useState([
    {
      name: 'City Police Station',
      area: 'Colaba',
      distance: 2,
    },
    {
      name: 'Ocean View Police Station',
      area: 'Colaba',
      distance: 1.5,
    },
    {
      name: 'Sunrise Police Station',
      area: 'Ballard Estate',
      distance: 3,
    },
    {
      name: 'St. John\'s Police Station',
      area: 'Powai',
      distance: 5,
    },
    {
      name: 'Holy Cross Police Station',
      area: 'Andheri',
      distance: 4,
    },
    {
      name: 'Green Park Police Station',
      area: 'Bandra',
      distance: 3.5,
    },
    {
      name: 'Mount View Police Station',
      area: 'Dadar',
      distance: 2.7,
    },
    {
      name: 'Rainbow Police Station',
      area: 'Thane',
      distance: 6,
    },
    {
      name: 'Silverline Police Station',
      area: 'Vashi',
      distance: 7,
    },
    {
      name: 'Rosewood Police Station',
      area: 'Goregaon',
      distance: 5.5,
    },
  ]);

  const [sortBy, setSortBy] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSortBy = (criteria) => {
    setSortBy(criteria === sortBy ? '' : criteria);
  };

  const filteredPoliceStations = policeStations.filter(station => {
    if (searchQuery && !station.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const sorted = [...filteredPoliceStations].sort((a, b) => {
    if (sortBy === 'distance') {
      return a.distance - b.distance;
    }
    return 0;
  });

  return (
    <div className="container mt-4">
      <h2>Police Stations</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search by police station name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="btn-group mb-3">
        <button
          className={`btn btn-primary ${sortBy === 'distance' ? 'active' : ''}`}
          onClick={() => toggleSortBy('distance')}
        >
          Sort by Distance
        </button>
      </div>
      <div className="row">
        {sorted.map((station, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{station.name}</h5>
                <p className="card-text">
                  <strong>Area:</strong> {station.area}
                  <br />
                  <strong>Distance:</strong> {station.distance} km
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PoliceStationPage;
