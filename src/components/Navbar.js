import React from "react";
import { Grid } from "@material-ui/core";

import logo from "../assets/images/tedxLogo.png";
import { navbarStyles } from "../styles/Navbar";

const Navbar = () => {
  const classes = navbarStyles();

  return (
    <div>
      <Grid container style={{ height: 84 }}>
        <Grid container item xs alignItems="center">
          <Grid
            justify="flex-start"
            container
            item
            xs
            className={classes.logo}
            style={{ backgroundImage: `url(${logo})` }}
          ></Grid>
        </Grid>
        <Grid container item xs></Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
