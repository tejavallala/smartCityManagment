import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faGasPump } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faHospital, faLandmark, faShoppingBag, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const UserDashboard = () => {
  const [userLocation, setUserLocation] = useState(null);
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const location = await getLocationName(latitude, longitude);
        setUserLocation(location);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  const getLocationName = async (latitude, longitude) => {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=6bfa24d1e9e449f7988514387ccfb172`);
    const data = await response.json();
    if (data.results.length > 0) {
      return data.results[0].formatted;
    } else {
      return "Location name not found";
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">My App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/user-parking">
                  <FontAwesomeIcon icon={faCar} /> Parking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/petrolbump">
                  <FontAwesomeIcon icon={faGasPump} /> Petrol Bump
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/atm">
                  <FontAwesomeIcon icon={faMoneyBillAlt} className="me-1" />
                  ATM
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurant">
                  <FontAwesomeIcon icon={faUtensils} className="me-1" />
                  Restaurant
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hospital">
                  <FontAwesomeIcon icon={faHospital} className="me-1" />
                  Hospitals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/police">
                  <FontAwesomeIcon icon={faLandmark} className="me-1" />
                  Police Station
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shopping">
                  <FontAwesomeIcon icon={faShoppingBag} className="me-1" />
                  Shopping Mall
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <button className="btn btn-primary" onClick={getCurrentLocation}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
          Get My Location
        </button>
        {userLocation && (
          <p className="mt-3">Hey user, this is your location: {userLocation}</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
