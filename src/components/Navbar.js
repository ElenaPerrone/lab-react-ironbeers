import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" style={{ color: "#FFF" }}>
              <HomeRoundedIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/auth/signup" style={{ color: "#FFF" }}>
              Sign Up
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/auth/login" style={{ color: "#FFF" }}>
              Log In
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/auth/logout" style={{ color: "#FFF" }}>
              Log Out
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
