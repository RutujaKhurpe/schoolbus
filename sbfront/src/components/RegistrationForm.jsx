//registration code with loading feature
import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Snackbar,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios"; // Import axios for making API requests

function RegistrationForm() {
  const [formData, setFormData] = useState({
    studentFirstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    STD: "",
    division: "",
    guardianName: "",
    guardianMobile: "",
    alternateMobile: "",
    pickupAddress: "",
    dropAddress: "",
    emergencyMobile: "",
    email: "",
    serviceType: "",
    routeType: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [studentID, setStudentID] = useState(null); // State for storing the student ID from the database
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("")

  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, value } = e.target;

    // Regular expression to match only alphabets and spaces
    const regex = /^[A-Za-z ]*$/;

    // Check if the input matches the regular expression
    if (name === "studentFirstName" || name === "middleName" || name === "lastName") {
      if (!regex.test(value)) {
        // If the input doesn't match, set an error
        setError(`Invalid input for ${name}. Only alphabets and spaces are allowed.`);
      } else {
        // If the input is valid, clear the error and update the form data
        setError(null);
        setFormData({ ...formData, [name]: value });
      }
    } else {
      // For other form fields, simply update the form data
      setFormData({ ...formData, [name]: value });
    }

  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!isChecked) {
      setError("Please read the notes and check the box before submitting.");
      setSnackbarOpen(true);
      return;
    }

    if (!formData.serviceType) {
      setError("Please select the service type.");
      setSnackbarOpen(true);
      return;
    }

    if (!formData.routeType) {
      setError("Please select the route type.");
      setSnackbarOpen(true);
      return;
    }

    try {
      // Set the loading state to true before sending the request
      setIsLoading(true);

      // Send form data to the backend
      const response = await axios.post("http://localhost:3001/create", formData);
      //console.log(response.data)
      const { studentID: generatedStudentID } = response.data;

      // // Update the state with the student ID from the database
      setStudentID(generatedStudentID);

      setSnackbarMessage(`Form Submitted Successfully. Your Student ID is: ${generatedStudentID}. You will receive a payment link shortly on Your Phone number and Email.`);
      //setSnackbarMessage(snackbarMessage)
      setSnackbarOpen(true)
      // Clear the form after submission
      clearForm();
    } catch (error) {
      setError("An error occurred during form submission.");
      setSnackbarOpen(true);
      console.error("Form submission error:", error);
    } finally {
      // Set the loading state to false after the request is completed
      setIsLoading(false);
    }
  };

  const clearForm = () => {
    setFormData({
      studentFirstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      STD: "",
      division: "",
      guardianName: "",
      guardianMobile: "",
      alternateMobile: "",
      pickupAddress: "",
      dropAddress: "",
      emergencyMobile: "",
      email: "",
      serviceType: "",
      routeType: "",
    });
    setIsChecked(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setError(null);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Card variant="outlined">
        <CardContent>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginBottom: "1rem", textAlign: "center" }}
          >
            Transport Requisition Form
          </Typography>
          {/* Registration Form */}
          <form onSubmit={handleSubmit} aria-label="Registration Form">
            {/* Form fields */}
            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <CircularProgress />
                <Typography variant="body1" style={{ marginLeft: "0.5rem" }}>
                  Loading...
                </Typography>
              </div>
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Student Name"
                    name="studentFirstName"
                    value={formData.studentFirstName}
                    onChange={handleChange}
                    aria-label="Student Name"
                    aria-required="true"
                  />
                  {error && (
                    <Typography variant="caption" color="error">
                      {error}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Middle Name"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="STD-label">STD</InputLabel>
                    <Select
                      labelId="STD-label"
                      label="STD"
                      name="STD"
                      value={formData.STD}
                      onChange={handleChange}
                    >
                      {[...Array(12).keys()].map((num) => (
                        <MenuItem key={num + 1} value={num + 1}>
                          {num + 1}
                        </MenuItem>
                      ))}
                      <MenuItem value="LKG">LKG</MenuItem>
                      <MenuItem value="UKG">UKG</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Division"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Guardian Name"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Guardian Mobile"
                    name="guardianMobile"
                    value={formData.guardianMobile}
                    onChange={handleChange}
                  />
                  <Typography variant="caption" style={{ marginTop: "0.5rem" }}>
                    <b>This number will be used for payment purposes.</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Alternate Mobile"
                    name="alternateMobile"
                    value={formData.alternateMobile}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Pick-up Address"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Drop Address"
                    name="dropAddress"
                    value={formData.dropAddress}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Emergency Mobile"
                    name="emergencyMobile"
                    value={formData.emergencyMobile}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-label="Email"
                  />
                  <Typography variant="caption" style={{ marginTop: "0.5rem" }}>
                    <b>This email will be used for sending the invoice.</b>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="service-type-label">
                      Service Type
                    </InputLabel>
                    <Select
                      labelId="service-type-label"
                      label="Service Type"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      aria-label="Service Type"
                      aria-required="true"
                    >
                      <MenuItem value="1-way">1-way</MenuItem>
                      <MenuItem value="2-way">2-way</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="route-type-label">Route Type</InputLabel>
                    <Select
                      labelId="route-type-label"
                      label="Route Type"
                      name="routeType"
                      value={formData.routeType}
                      onChange={handleChange}
                      aria-label="Route Type"
                      aria-required="true"
                    >
                      <MenuItem value="home-to-school">Home to School</MenuItem>
                      <MenuItem value="school-to-home">School to Home</MenuItem>
                      <MenuItem value="both">Both</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        aria-label="I have read the note"
                      />
                    }
                    label="I have read the note"
                    style={{ justifyContent: "center", display: "flex" }}
                  />
                  <Grid item xs={12}>
                    <img
                      src="src\assets\Installment.jpg"
                      alt="Note"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!isChecked || isLoading}
              style={{
                marginTop: "1.5rem",
                marginBottom: "1rem",
                background: isChecked && !isLoading ? "#404040" : undefined,
              }}
              aria-label="Submit Form"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={20000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            ContentProps={{
              style: {
                backgroundColor: "#fff",
                color: "#000",
              },
            }}
            message={
              error ? (
                error
              ) : studentID ? (
                <Typography variant="body1" align="center">
                  <span style={{ color: "green" }}>
                    Form Submitted Successfully.
                  </span>{" "}
                  Your Student ID is:{" "}
                  <strong style={{ color: "black", fontWeight: "bold" }}>
                    {studentID}
                  </strong>{" "}
                  <br />
                  You will receive a payment link shortly on Your Phone number
                  and Email.
                </Typography>
              ) : null
            }
            action={ // This adds the close icon
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegistrationForm;
