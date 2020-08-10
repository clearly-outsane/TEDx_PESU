import React from "react";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import logo from "../assets/images/tedxLogo.png";
import { navbarStyles } from "../styles/Navbar";
import { stylingConstants } from "../constants";

const Navbar = () => {
  const classes = navbarStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Grid container style={{ height: stylingConstants.NAVBAR_HEIGHT }}>
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
              onClick={() => setOpen(!open)}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon style={{ color: "white", fontSize: 32 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      {!!open && (
        <div className={classes.overlay}>
          <Container maxWidth="lg">
            <Grid container direction="column">
              <Grid container item>
                <Grid item xs></Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  justify="flex-end"
                  xs
                  style={{ height: stylingConstants.NAVBAR_HEIGHT }}
                >
                  <IconButton
                    color="white"
                    aria-label="open drawer"
                    edge="end"
                    onClick={() => setOpen(!open)}
                    className={clsx(open && classes.closeOverlay)}
                  >
                    <CloseIcon style={{ color: "white", fontSize: 32 }} />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid container item xs justify="center" alignItems="center">
                Home
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Navbar;
