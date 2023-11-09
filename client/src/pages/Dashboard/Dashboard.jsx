import React from "react";
import "./Dashboard.css";
import Banner from "../../components/Banner/Banner";
import AppointmentBanner from "../../components/AppointmentBanner/AppointmentBanner";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Banner
        primaryTitle="Avail Early Bird Discount"
        secondaryTitle="Upto 20% off"
      />

      <div className="dashboard-welcome-wrapper">
        <h3 className="welcome-title">Good evening,</h3>
        <h1 className="user-name">Sahil Kakar!</h1>
      </div>

      <div className="appointment-schedule-wrapper">
        <p className="appointment-title">Upcoming appointments</p>
        <AppointmentBanner />
        <AppointmentBanner />

        <div className="appointment-list">
          <p className="list-text">Previous appointments</p>
        </div>

        <div className="appointment-btn-wrapper">Make an Appointment</div>
      </div>
    </div>
  );
};

export default Dashboard;
