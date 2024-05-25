import React, { useState } from "react";
import Axios from "axios";
const HospitalPage = () => {
  const [hospitals] = useState([
    {
      name: "City Hospital",
      area: "Colaba",
      distance: 2,
      rating: 4.5,
      specialization: "General Medicine",
    },
    {
      name: "Ocean View Hospital",
      area: "Colaba",
      distance: 1.5,
      rating: 4.2,
      specialization: "Pediatrics",
    },
    {
      name: "Sunrise Hospital",
      area: "Ballard Estate",
      distance: 3,
      rating: 4.8,
      specialization: "Orthopedics",
    },
    {
      name: "St. John's Hospital",
      area: "Powai",
      distance: 5,
      rating: 4.3,
      specialization: "Cardiology",
    },
    {
      name: "Holy Cross Hospital",
      area: "Andheri",
      distance: 4,
      rating: 4.7,
      specialization: "Oncology",
    },

    {
      name: "Green Park Hospital",
      area: "Bandra",
      distance: 3.5,
      rating: 4.1,
      specialization: "Neurology",
    },
    {
      name: "Mount View Hospital",
      area: "Dadar",
      distance: 2.7,
      rating: 4.6,
      specialization: "Gynecology",
    },
    {
      name: "Rainbow Hospital",
      area: "Thane",
      distance: 6,
      rating: 4.9,
      specialization: "Dermatology",
    },
    {
      name: "Silverline Hospital",
      area: "Vashi",
      distance: 7,
      rating: 4.4,
      specialization: "ENT",
    },
    {
      name: "Rosewood Hospital",
      area: "Goregaon",
      distance: 5.5,
      rating: 4.0,
      specialization: "Urology",
    },
  ]);

  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSpecialization, setFilterSpecialization] = useState("");
  const [showModal, setShowModal] = useState("");
  const [formData, setFormData] = useState({
    patientName: "",
    AppointmentDate: "",
    AppointmentTime: "",
    Problem: "",
  });

  const toggleSortBy = (criteria) => {
    setSortBy(criteria === sortBy ? "" : criteria);
  };
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const filteredHospitals = hospitals.filter((hospital) => {
    if (
      filterSpecialization &&
      hospital.specialization !== filterSpecialization
    ) {
      return false;
    }
    if (
      searchQuery &&
      !hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const sorted = [...filteredHospitals].sort((a, b) => {
    if (sortBy === "distance") {
      return a.distance - b.distance;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://localhost:4000/hospital/add",
        formData
      );
      console.log("Appointment added successfully:", response.data);
      alert("Appointment added successfully!");
      setShowModal(false);
    } catch (error) {
      console.error("Failed to add appointment:", error);
      alert("Failed to add appointment");
    }
  };
  return (
    <div className="container mt-4">
      <h2>Hospitals</h2>
      <div className="mb-3 w-50 ">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search by hospital name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="form-control"
          value={filterSpecialization}
          onChange={(e) => setFilterSpecialization(e.target.value)}
        >
          <option value="">All Specializations</option>
          <option value="General Medicine">General Medicine</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>
      </div>
      <div className="btn-group mb-3">
        <button
          className={`btn btn-primary ${sortBy === "distance" ? "active" : ""}`}
          onClick={() => toggleSortBy("distance")}
          style={{ marginRight: "30px" }}
        >
          Sort by Distance
        </button>

        <button
          className={`btn btn-primary ${sortBy === "rating" ? "active" : ""}`}
          onClick={() => toggleSortBy("rating")}
        >
          Sort by Rating
        </button>
        <div
          className="modal"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book Appointment</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="patientName" className="form-label">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="patientName"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="AppointmentDate" className="form-label">
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="AppointmentDate"
                      name="AppointmentDate"
                      value={formData.AppointmentDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Problem" className="form-label">
                      Problem
                    </label>
                    <textarea
                      className="form-control"
                      id="Problem"
                      name="Problem"
                      value={formData.Problem}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {sorted.map((hospital, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{hospital.name}</h5>
                <p className="card-text">
                  <strong>Area:</strong> {hospital.area}
                  <br />
                  <strong>Distance:</strong> {hospital.distance} km
                  <br />
                  <strong>Rating:</strong> {hospital.rating}
                  <br />
                  <strong>Specialization:</strong> {hospital.specialization}
                </p>
                <button
                  className="btn btn-primary mb-3"
                  onClick={() => setShowModal(true)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalPage;
