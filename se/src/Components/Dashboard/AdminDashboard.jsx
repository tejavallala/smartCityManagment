import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faSquareParking, faHospitalUser } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/parking">
                <FontAwesomeIcon icon={faCar} className="me-1" />
                Add Parking
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view-parking">
                <FontAwesomeIcon icon={faCar} className="me-1" />
                View Parking
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booking">
                <FontAwesomeIcon icon={faSquareParking} className="me-1" />
                Booking Info
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/appointmentInfo">
                <FontAwesomeIcon icon={faHospitalUser} className="me-1" />
                Appointment Info
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminDashboard;
