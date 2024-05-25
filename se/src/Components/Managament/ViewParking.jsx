import React, { useState, useEffect } from "react";
import Axios from "axios";

const ViewParkingPage = () => {
  const [parkingData, setParkingData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    area: "",
    distance: "",
    status: "" 
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

  const handleDelete = async (id) => {
    try {
      await Axios.delete(`http://localhost:4000/parking/delete/${id}`);
      fetchData();
    } catch (error) {
      console.error("Failed to delete parking data:", error);
    }
  };

  const handleEdit = (parking) => {
    setEditId(parking._id);
    setFormData({
      name: parking.name,
      area: parking.area,
      distance: parking.distance,
      status: parking.status 
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setFormData({ name: "", area: "", distance: "", status: "" });
  };

  const handleSaveEdit = async (id) => {
    try {
      await Axios.put(`http://localhost:4000/parking/edit/${id}`, formData);
      setEditId(null);
      setFormData({ name: "", area: "", distance: "", status: "" });
      fetchData();
    } catch (error) {
      console.error("Failed to save parking data:", error);
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
                {editId === parking._id ? (
                  <form>

                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Parking Name
                      </label>
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
                      <label htmlFor="area" className="form-label">
                        Area
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="area"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
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
                        name="distance"
                        value={formData.distance}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Radio button for status */}
                    <div className="mb-3">
                      <label>Status:</label>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="available"
                          name="status"
                          value="Available"
                          checked={formData.status === "Available"}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="available">
                          Available
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="not-available"
                          name="status"
                          value="Not Available"
                          checked={formData.status === "Not Available"}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="not-available">
                          Not Available
                        </label>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary mr-2"
                      onClick={() => handleSaveEdit(parking._id)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  // Display existing parking data
                  <>
                    <h5 className="card-title">{parking.name}</h5>
                    <p className="card-text">
                      <strong>Area:</strong> {parking.area}
                      <br />
                      <strong>Distance:</strong> {parking.distance} km
                    </p>
                    <strong>Status:</strong> {parking.status}
                    <br></br>
                    <div className="btn-group mt-2" role="group" aria-label="Parking Actions">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleEdit(parking)}
                        style={{ marginRight: "30px" }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(parking._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewParkingPage;
