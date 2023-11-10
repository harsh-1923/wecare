import React from "react";
import "./Dashboard.css";
import AppointmentBanner from "../../components/AppointmentBanner/AppointmentBanner";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import PrevAppointmentBabber from "../../components/PrevAppointmentBanner/PrevAppointmentBabber";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

const Dashboard = () => {
  const appointmentList = [
    {
      date: "13",
      month: "September",
      year: "2015",
      slot: "8-9 PM",
      docName: "Dr. Vinutha Arunachalam",
      docSpec: "General Physician",
      locationLink: "https://maps.app.goo.gl/d5x8qEXcQnCcosYQ8",
      add: "Appollo Kolkata",
    },
  ];

  const prevAppointment = [
    {
      date: "13",
      month: "September",
      year: "2015",
      slot: "8-9 PM",
      docName: "Dr. Vishal Sinha",
      docSpec: "General Physician",
      locationLink: "https://maps.app.goo.gl/d5x8qEXcQnCcosYQ8",
      add: "Appollo Kolkata",
    },
    {
      date: "13",
      month: "September",
      year: "2015",
      slot: "8-9 PM",
      docName: "Dr. Vishal Sinha",
      docSpec: "General Physician",
      locationLink: "https://maps.app.goo.gl/d5x8qEXcQnCcosYQ8",
      add: "Appollo Kolkata",
    },
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="user-welcome-wrapper">
        <h1>
          Welcome <br /> Harsh!
        </h1>
      </div>

      <div className="appointment-list-wrapper">
        <h4 className="appointment-list-title">Upcoming appointments</h4>
        {appointmentList.map((appointment) => (
          <AppointmentBanner details={appointment} />
        ))}
      </div>

      <h4 className="history-list-title">History</h4>
      <div className="history-wrapper">
        {prevAppointment.map((app) => (
          <PrevAppointmentBabber details={app} />
        ))}
      </div>

      <Box
        style={{
          position: "fixed",
          bottom: "10px",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fab
          size="secondary"
          style={{
            backgroundColor: "black",
            color: "white",
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          variant="extended"
        >
          New Appointment
        </Fab>
        <Fab
          size="secondary"
          style={{
            marginLeft: "10px",
            backgroundColor: "black",
            color: "white",
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          variant="extended"
        >
          <FamilyRestroomIcon />
        </Fab>
      </Box>
    </div>
  );
};

export default Dashboard;
