import React, { useState, useEffect } from "react";
import Axios from "axios";

const ViewParkingPage = () => {
  const [parkingData, setParkingData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    InDate: "",
    OutDate: "",
    InTime: "",
    OutTime: "",
    cost: 0
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:4000/parking");
      setParkingData(response.data);
    } catch (error) {
      console.error("Failed to fetch parking data:", error);
    }
  };

  const handleBook = (id) => {
    setShowModal(true);
    setFormData({ ...formData, _id: id });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateCost = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set the cost in the form data
      const cost = calculateCost();
      setFormData({ ...formData, cost });

      const response = await Axios.post("http://localhost:4000/booking/add", formData);
      console.log("Booking added successfully:", response.data);
      fetchData();
      setShowModal(false);

      const updatedParkingData = parkingData.map((parking) => {
        if (parking._id === formData._id) {
          return { ...parking, status: "Booked" };
        }
        return parking;
      });
      setParkingData(updatedParkingData);

      // Show success message
      alert("Booking successfully added!");
    } catch (error) {
      console.error("Failed to add booking:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>View Parking</h2>
      <div className="row">
        {parkingData.map((parking) => (
          <div className="col-md-4 mb-4" key={parking._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{parking.name}</h5>
                <p className="card-text">
                  <strong>Area:</strong> {parking.area}
                  <br />
                  <strong>Distance:</strong> {parking.distance} km
                  <br />
                  <strong>Status:</strong> {parking.status}
                </p>
                {parking.status === "Available" && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleBook(parking._id)}
                  >
                    Book
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book Parking Slot</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InDate" className="form-label">In Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="InDate"
                      name="InDate"
                      value={formData.InDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="OutDate" className="form-label">Out Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="OutDate"
                      name="OutDate"
                      value={formData.OutDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InTime" className="form-label">In Time</label>
                    <input
                      type="time"
                      className="form-control"
                      id="InTime"
                      name="InTime"
                      value={formData.InTime}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="OutTime" className="form-label">Out Time</label>
                    <input
                      type="time"
                      className="form-control"
                      id="OutTime"
                      name="OutTime"
                      value={formData.OutTime}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cost" className="form-label">Cost</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cost"
                      name="cost"
                      value={formData.cost}
                      readOnly
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default ViewParkingPage;
