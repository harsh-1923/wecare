import React from "react";
import "./PrevAppointmentBabber.css";
import { Divider } from "@mui/material";

const PrevAppointmentBabber = ({ details }) => {
  return (
    <div className="prev-app-banner-wrapper">
      <DatePres month={details.month} date={details.date} slot={details.slot} />

      <div className="appointment-details-wrapper">
        <div className="doc-detail-wrapper">
          <h3 className="doc-name">{details.docName}</h3>
          <small className="doc-spec">{details.docSpec}</small>
        </div>
        <Divider />
        <div className="doc-add-wrapper">
          <div className="add-details">
            <h6>GENERAL CONSULATION</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const DatePres = ({ month, date, slot }) => {
  return (
    <div className="prev-date-pres-wrapper">
      <p className="prev-date-presenters-month">{month}</p>
      <h1 className="prev-date-presenters-date">{date}</h1>
      {/* <p className="date-presenters-slot">{slot}</p> */}
    </div>
  );
};

export default PrevAppointmentBabber;
