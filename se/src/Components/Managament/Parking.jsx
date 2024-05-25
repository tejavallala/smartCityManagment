import React, { useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const AddParkingForm = () => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [distance, setDistance] = useState("");
  const [status, setStatus] = useState("Available"); // Default status

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post("http://localhost:4000/parking/add", {
        name,
        area,
        distance,
        status, 
      });
      if (response.status === 200) {
        alert("Parking added successfully");
 
        setName("");
        setArea("");
        setDistance("");
        setStatus("Available"); // Reset status to default
      }
    } catch (error) {
      alert("Failed to add parking");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">
                <FontAwesomeIcon icon={faCar} /> Add Parking
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Parking Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="area" className="form-label">
                    Area
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="distance" className="form-label">
                    Distance
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="distance"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    pattern="[0-9]*" // Accepts only numbers
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Status:</label><br />
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="available"
                      value="Available"
                      checked={status === "Available"}
                      onChange={() => setStatus("Available")}
                    />
                    <label className="form-check-label" htmlFor="available">Available</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="not-available"
                      value="Not Available"
                      checked={status === "Not Available"}
                      onChange={() => setStatus("Not Available")}
                    />
                    <label className="form-check-label" htmlFor="not-available">Not Available</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Parking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddParkingForm;
