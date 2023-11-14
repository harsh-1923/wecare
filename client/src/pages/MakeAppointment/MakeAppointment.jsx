import React, { useEffect } from "react";
import "./MakeAppointment.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import StepButton from "@mui/material/StepButton";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FamilyMemberDetailBanner from "../../components/FamilyMemberDetailBanner/FamilyMemberDetailBanner";
import MAP from "../../assets/MAP.png";
const MakeAppointment = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [selectedDay, setSelectedDay] = React.useState(0);
  const [selectedMonth, setSelectedMonth] = React.useState("");
  const [chosenDay, updateChosenDay] = React.useState("");

  useEffect(() => {
    const currentDate = new Date();
    setSelectedMonth((currentDate.getMonth() + 1).toString().padStart(2, "0"));
    updateChosenDay(currentDate.getDate().toString().padStart(2, "0"));
  }, []);

  const days = [
    {
      label: "Mon",
      idx: 0,
      addLabel: "Apollo Kolkata",
      fullAdd: "123 Example Street, Kolkata, 700001",
      addLink: "https://maps.app.goo.gl/fPWDs7vo9zsinUPd7",
    },
    {
      label: "Tue",
      idx: 1,
      addLabel: "XYZ Clinic",
      fullAdd: "456 Sample Road, City, 700002",
      addLink: "https://maps.app.goo.gl/fPWDs7vo9zsinUPd7",
    },
    {
      label: "Wed",
      idx: 2,
      addLabel: "City Health Center",
      fullAdd: "789 Test Boulevard, City, 700003",
      addLink: "https://maps.app.goo.gl/fPWDs7vo9zsinUPd7",
    },
    {
      label: "Thu",
      idx: 3,
      addLabel: "Greenfield Hospital",
      fullAdd: "101 Green Avenue, Town, 700004",
      addLink: "https://maps.app.goo.gl/fPWDs7vo9zsinUPd7",
    },
    {
      label: "Fri",
      idx: 4,
      addLabel: "Sunrise Clinic",
      fullAdd: "202 Sunrise Street, City, 700005",
      addLink: "https://maps.app.goo.gl/fPWDs7vo9zsinUPd7",
    },
    {
      label: "Sat",
      idx: 5,
      addLabel: "Maple Hospital",
      fullAdd: "303 Maple Lane, Town, 700006",
      addLink: "https://maps.app.goo.gl/fPWDs7vo9zsinUPd7",
    },
    {
      label: "Sun",
      idx: 6,
      addLabel: "Sunset Hospital",
      fullAdd: "404 Sunset Avenue, City, 700007",
      addLink: "https://maps.app.goo.gl/fPWDs7vo9zsinUPd7",
    },
  ];
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [relation, setRelation] = React.useState("");
  const steps = ["Patient Details", "Select Date", "Finish"];
  const totalSteps = () => {
    return steps.length;
  };

  let familyMembers = [
    { label: "Lucy", age: 34, relation: "Mother" },
    { label: "James", age: 38, relation: "Father" },
  ];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const handleDayChange = (e) => {
    updateChosenDay(e.target.value);
  };

  //MODAL

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
  };

  const addNewFamily = (name, age, relation) => {
    let newMembers = { label: name, age, relation };
    familyMembers.push(newMembers);
    console.log(familyMembers);
    handleClose();
    //make sure to update the family list
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    console.log(activeStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleStep = (step) => () => {
  //   setActiveStep(step);
  // };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <div className="appointment-wrapper">
      <Box className="stepper-wrapper" sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <p style={{ fontWeight: "bold" }}>{label}</p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <React.Fragment>
        {activeStep === 0 ? (
          <div className="div">
            <div>
              <h2 className="apt-1-tag">Select a Family Member</h2>
              <div onClick={handleOpen} className="apt-1-help">
                <small>Add a New Family Member?</small>
              </div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={familyMembers}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    id="outlined-basi"
                    {...params}
                    label="Family Member"
                  />
                )}
              />
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <h2 className="modal-title">New Family Member</h2>
                <small className="modal-details">
                  Helps in tracking the health of your family
                </small>
                <TextField
                  style={{ marginBottom: "10px" }}
                  className="modal-tf"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  style={{ marginBottom: "10px" }}
                  className="modal-tf"
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  onChange={(e) => setAge(e.target.value)}
                />

                <TextField
                  style={{ marginBottom: "10px" }}
                  className="modal-tf"
                  id="outlined-basic"
                  label="Relation"
                  variant="outlined"
                  onChange={(e) => setRelation(e.target.value)}
                />
                <Button
                  onClick={() => addNewFamily(name, age, relation)}
                  variant="contained"
                >
                  Add Member
                </Button>
              </Box>
            </Modal>
            <FamilyMemberDetailBanner />
          </div>
        ) : activeStep === 1 ? (
          <div className="div">
            <h2 className="apt-1-tag">Choose a slot</h2>
            <div className="slot-selector-wrapper">
              {/* <label htmlFor="monthSelector">Select a Month:</label> */}
              <div className="selector-wrapper">
                <select
                  className="monthSelector selector"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                >
                  <option value="">Select a month</option>
                  {months.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>

                <div>
                  {/* <label htmlFor="daySelector">Select a Day:</label> */}
                  <select
                    className="selector"
                    id="daySelector"
                    value={chosenDay}
                    onChange={handleDayChange}
                  >
                    <option value="">Select a day</option>
                    {[
                      ...Array(
                        getDaysInMonth(
                          Number(selectedMonth),
                          new Date().getFullYear()
                        )
                      ).keys(),
                    ].map((day) => (
                      <option key={day + 1} value={day + 1}>
                        {day + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedMonth && (
                <p>
                  Selected Month:{" "}
                  {months.find((month) => month.value === selectedMonth).label}
                </p>
              )}

              {selectedMonth && chosenDay && (
                <p>
                  Selected Date:{" "}
                  {months.find((month) => month.value === selectedMonth).label}{" "}
                  {chosenDay}
                </p>
              )}
            </div>
            <div className="day-wrapper">
              {days.map((day) => (
                <div
                  key={day.idx}
                  onClick={() => setSelectedDay(day.idx)}
                  className="d-wrapper"
                >
                  <p
                    className={`${
                      selectedDay === day.idx
                        ? "selected-day"
                        : "not-selected-day"
                    }`}
                  >
                    {day.label}
                  </p>
                </div>
              ))}
            </div>
            <div
              style={{
                backgroundImage: `url(${MAP})`,
              }}
              className="add-wrapper"
            >
              <p className="add-details">{days[selectedDay].fullAdd}</p>
              <Link
                className="map-button"
                to={days[selectedDay].addLink}
                target="_blank"
              >
                Check Location
              </Link>
            </div>
          </div>
        ) : activeStep === 2 ? (
          <div className="div"></div>
        ) : null}
        <div className="btn-wrapper">
          {activeStep != 0 ? (
            <button onClick={handleBack} className="prev-btn">
              <KeyboardDoubleArrowLeftIcon />
            </button>
          ) : null}
          <button onClick={handleNext} className="next">
            Next
          </button>
        </div>
        <div className="btn-wrapper">
          {/* <KeyboardDoubleArrowLeftIcon
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                // backgroundColor: "blue",
                // color: "white",
              }}
              onClick={handleBack}
            /> */}
          {/* <div className="next-btn">Next</div> */}
          {/* <KeyboardDoubleArrowLeftIcon
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                // backgroundColor: "blue",
                // color: "white",
              }}
              onClick={handleNext}
            ></KeyboardDoubleArrowLeftIcon> */}
        </div>
      </React.Fragment>
    </div>
  );
};

export default MakeAppointment;

// {
//   /* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: "1 1 auto" }} />
//             <Button onClick={handleNext} sx={{ mr: 1 }}>
//               Next
//             </Button>
//             {activeStep !== steps.length &&
//               (completed[activeStep] ? (
//                 <Typography variant="caption" sx={{ display: "inline-block" }}>
//                   Step {activeStep + 1} already completed
//                 </Typography>
//               ) : (
//                 <Button onClick={handleComplete}>
//                   {completedSteps() === totalSteps() - 1
//                     ? "Finish"
//                     : "Complete Step"}
//                 </Button>
//               ))}
//           </Box> */
// }
