import React from "react";
import "./MakeAppointment.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import StepButton from "@mui/material/StepButton";
import Modal from "@mui/material/Modal";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const MakeAppointment = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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
      <Box sx={{ width: "100%" }}>
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

      {allStepsCompleted() ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
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

              <div className="btn-wrapper">
                <KeyboardDoubleArrowLeftIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    // backgroundColor: "blue",
                    color: "white",
                  }}
                  //   onClick={handleNext}
                />
                <KeyboardDoubleArrowRightIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    // backgroundColor: "blue",
                    // color: "white",
                  }}
                  onClick={handleNext}
                />
              </div>
            </div>
          ) : activeStep === 1 ? (
            <div className="div">
              <h2 className="apt-1-tag">Choose a slot</h2>
              <div className="day-wrapper">
                {days.map((day) => (
                  <div className="d-wrapper">
                    <p>{day}</p>
                  </div>
                ))}
              </div>
              <div className="btn-wrapper">
                <KeyboardDoubleArrowLeftIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    // backgroundColor: "blue",
                    // color: "white",
                  }}
                  onClick={handleBack}
                />
                <KeyboardDoubleArrowRightIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    // backgroundColor: "blue",
                    // color: "white",
                  }}
                  onClick={handleNext}
                />
              </div>
            </div>
          ) : activeStep === 2 ? (
            <div className="div">
              <div className="btn-wrapper">
                <KeyboardDoubleArrowLeftIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    // backgroundColor: "blue",
                    // color: "white",
                  }}
                  onClick={handleBack}
                />
                <KeyboardDoubleArrowRightIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    // backgroundColor: "blue",
                    // color: "white",
                  }}
                  onClick={handleNext}
                />
              </div>
            </div>
          ) : null}
          {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} sx={{ mr: 1 }}>
              Next
            </Button>
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <Typography variant="caption" sx={{ display: "inline-block" }}>
                  Step {activeStep + 1} already completed
                </Typography>
              ) : (
                <Button onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1
                    ? "Finish"
                    : "Complete Step"}
                </Button>
              ))}
          </Box> */}
        </React.Fragment>
      )}
    </div>
  );
};

export default MakeAppointment;
