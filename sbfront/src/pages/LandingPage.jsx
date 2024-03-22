import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import Navbar from "../components/Navbar";
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container spacing={3} justifyContent="center">
        {/* Left Section */}
        <Grid item xs={12} sm={3}>
          <div className={classes.imageContainer}>
            <img
              src="src\assets\Bus.JPG"
              alt="School Bus"
              className={classes.image}
            />
          </div>
          {/* Contact Details */}
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              <PhoneIcon /> Phone number: 9766987118
            </Typography>
          </Paper>
        </Grid>
        {/* Middle Section */}
        <Grid item xs={12} sm={6}>
          <RegistrationForm />
        </Grid>
        {/* Right Section */}
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Please Note:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="1. Payment for 11 months will be taken." />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. 1st Instalment April to Aug. (Paid in March 15th-31st)." />
              </ListItem>
              <ListItem>
                <ListItemText primary="3. 2nd Instalment Sept. to Dec. (Paid in Aug. 15th-31st)." />
              </ListItem>
              <ListItem>
                <ListItemText primary="4. 3rd Instalment Jan. to March. (Paid in Dec 15th-31st)." />
              </ListItem>
              <ListItem>
                <ListItemText primary="5. Payment to be done to Aaradhya Transport." />
              </ListItem>
              <ListItem>
                <ListItemText primary="6. All RTO guidelines will be followed including GPS, CCTV Camera, lady Attendant, etc." />
              </ListItem>
              <ListItem>
                <ListItemText primary="7. Parents are requested to pay the fees according to the provided rate table in the form." />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;