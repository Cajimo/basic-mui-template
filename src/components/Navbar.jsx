import React from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarStyles from "../theme/NavbarStyles";

const Navbar = () => {
  const classes = NavbarStyles();
  return (
    <Grid container className={classes.gridContainer}>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Plantilla MUI Theme AMOM
          </Typography>
          <MenuItem>Item1</MenuItem>
          <MenuItem>Item2</MenuItem>
          <MenuItem>Item3</MenuItem>
          <MenuItem>Item4</MenuItem>
          <Button size="medium" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Grid item></Grid>
    </Grid>
  );
};

export default Navbar;
