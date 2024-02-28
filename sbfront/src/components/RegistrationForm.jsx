import React, { useState } from "react";
import axios from "axios";
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
} from "@material-ui/core";

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
  });

  const [studentID, setStudentID] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the backend
      const response =  axios.post('http://localhost:3001/create', formData);
      console.log(response.data); // Log response from the server
      // Clear the form data after successful submission
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
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  // Handle form submission logic here, e.g., send data to backend
  //console.log(formData);
  


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
          <form onSubmit={handleSubmit}>
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
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
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
                  label="Date of Birth (DD/MM/YYYY)"
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
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  select
                  label="Class"
                  name="STD"
                  value={formData.STD}
                  onChange={handleChange}
                >
                  {[...Array(12).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                </TextField>
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
                  fullWidth
                  label="Emergency Mobile"
                  name="emergencyMobile"
                  value={formData.emergencyMobile}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "1.5rem", marginBottom: "1rem" }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegistrationForm;
