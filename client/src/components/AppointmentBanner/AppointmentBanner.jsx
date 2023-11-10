import React from "react";
import "./AppointmentBanner.css";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";

const AppointmentBanner = ({ details }) => {
  return (
    <div className="appointment-banner-wrapper">
      <DatePresenter
        month={details.month}
        date={details.date}
        slot={details.slot}
      />
      <div className="appointment-details-wrapper">
        <div className="doc-detail-wrapper">
          <h3 className="doc-name">{details.docName}</h3>
          <small className="doc-spec">{details.docSpec}</small>
        </div>
        <Divider />
        <div className="doc-add-wrapper">
          <div className="add-details">
            <p className="doc-description">{details.add}</p>
            <Link to={details.locationLink} target="_blank">
              <small className="doc-add-nav">Navigate to clinic</small>
            </Link>
          </div>
          <Link to={details.locationLink} target="_blank">
            <NearMeIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

const DatePresenter = ({ month, date, slot }) => {
  return (
    <div className="date-presenters-wrapper">
      <p className="date-presenters-month">{month}</p>
      <h1 className="date-presenters-date">{date}</h1>
      <p className="date-presenters-slot">{slot}</p>
    </div>
  );
};

export default AppointmentBanner;
