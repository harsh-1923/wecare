import React from "react";
import "./AppointmentBanner.css";
import { MapPinIcon } from "@heroicons/react/24/outline";

const AppointmentBanner = () => {
  return (
    <div className="appointment-banner-wrapper">
      <h2 className="banner-doc-name">Dr. Vinutha Arunachalam</h2>
      <div className="doc-details">
        <p>Cardiologist * 23 years experience</p>
      </div>
      <div className="visit-details-wrapper">
        <div className="date-wrapper">23rd Aug, 23 * 5-7 pm</div>
        <div className="location-wrapper">Chinsurah</div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
