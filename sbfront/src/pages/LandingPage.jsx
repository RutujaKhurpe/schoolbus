import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import Navbar from "../components/Navbar";
import { Grid, Typography, Paper, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#f5f5f5", // Light gray background color
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={3}>
          {/* Image at the left side */}
          <img src="src\assets\Bus.JPG" alt="School Bus Left" style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Registration form in the middle */}
          <RegistrationForm />
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* Notes at the right side */}
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Please Note:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Transport fees are non-refundable and non-adjustable." />
              </ListItem>
              <ListItem>
                <ListItemText primary="We will try to give you the nearest pick up point, need not necessarily be the building gate." />
              </ListItem>
              <ListItem>
                <ListItemText primary="If the lane is narrow or road repair work is going on then you will have to come further from your stop and drop & pick up tie child to the bus." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Payment for 11 months (term is 2 term in year) will be taken:" />
                <List>
                  <ListItem>
                    <ListItemText primary="1st - 21st March to 31st March." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="2nd - 1st August to 31st August." />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText primary="All RTO guidelines will be followed:" />
                <List>
                  <ListItem>
                    <ListItemText primary="GPS" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Lady Attendant" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="CCTV Camera etc." />
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
