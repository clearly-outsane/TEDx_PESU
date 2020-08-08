import React from "react";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "../assets/images/tedxLogo.png";
import { navbarStyles } from "../styles/Navbar";

const Navbar = () => {
  const classes = navbarStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Grid container className={classes.navBar}>
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
        <Grid container item xs>
          <Grid container justify="flex-end" alignItems="center">
            <IconButton
              color="white"
              aria-label="open drawer"
              edge="end"
              // onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon style={{ color: "white", fontSize: 32 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
