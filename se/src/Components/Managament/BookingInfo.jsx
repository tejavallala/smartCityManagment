import React, { useState, useEffect } from "react";
import Axios from "axios";

const ViewBookingData = () => {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:4000/booking");
      setBookingData(response.data);
    } catch (error) {
      console.error("Failed to fetch booking data:", error);
    }
  };

  // Function to format date to DD/MM/YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="container mt-4">
      <h2>View Booking Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>In Date</th>
            <th>Out Date</th>
            <th>In Time</th>
            <th>Out Time</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{formatDate(booking.InDate)}</td>
              <td>{formatDate(booking.OutDate)}</td>
              <td>{booking.InTime}</td>
              <td>{booking.OutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookingData;
