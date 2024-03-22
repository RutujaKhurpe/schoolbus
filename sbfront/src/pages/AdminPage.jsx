import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PaymentIcon from "@material-ui/icons/Payment";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useNavigate } from "react-router-dom";
import StudentDetails from "./StudentDetails";
import PaymentDetails from "./PaymentDetails";

const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#404040', // Light color for better visibility
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const AdminPage = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState("student");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const navigate = useNavigate();
  const logoutFn = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open
      >
        <List>
          <Tooltip
            title={
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Student Details
              </span>
            }
            placement="right"
          >
            <ListItem
              button
              className={classes.listItem}
              onClick={() => handleOptionClick("student")}
            >
              <ListItemIcon>
                <AccountCircleIcon style={{ color: '#FFFFFF' }}/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip
            title={
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Payment Details
              </span>
            }
            placement="right"
          >
            <ListItem
              button
              className={classes.listItem}
              onClick={() => handleOptionClick("payment")}
            >
              <ListItemIcon>
                <PaymentIcon  style={{ color: '#FFFFFF' }} />
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip
            title={
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Bus Details
              </span>
            }
            placement="right"
          >
            <ListItem
              button
              className={classes.listItem}
              onClick={() => handleOptionClick("bus")}
            >
              <ListItemIcon>
                <DirectionsBusIcon  style={{ color: '#FFFFFF' }}/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip
            title={
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Logout
              </span>
            }
            placement="right"
          >
            <ListItem
              button
              className={classes.listItem}
              onClick={logoutFn}
            >
              <ListItemIcon>
                <ExitToAppIcon style={{ color: '#FFFFFF' }}/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Typography variant="h5" gutterBottom>
          {selectedOption.charAt(0).toUpperCase() +
            selectedOption.slice(1) +
            " Details"}
        </Typography>
        {selectedOption === "student" && <StudentDetails />}
        {selectedOption === "payment" && <PaymentDetails />}
      </main>
    </div>
  );
};

export default AdminPage;