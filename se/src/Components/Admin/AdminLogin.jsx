import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/adminRoute/login",
        { email, password }
      );
      if (response.status === 200) {
        alert("Login successful");
        navigate("/admin-dashboard"); 
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-4">
          <h2 className="mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <div className="mt-3 text-center">
            <Link to="/admin-account-create" className="btn btn-link">
              Create Admin Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
