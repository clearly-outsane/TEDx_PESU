import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import logo from "../assets/images/tedxLogo.png";
import { navbarStyles } from "../styles/Navbar";
import { stylingConstants } from "../constants";
import { Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const classes = navbarStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    !!open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    return () => (document.body.style.overflow = "unset");
  }, [open]);

  return (
    <div>
      <Grid container style={{ height: stylingConstants.NAVBAR_HEIGHT }}>
        <Grid container item xs alignItems="center">
          <Grid
            justify="flex-start"
            container
            item
            xs
            // style={{ backgroundImage: `url(${logo})` }}
          >
            <a href="/">
              <img src={logo} alt="TEDxPESU" className={classes.logo} />
            </a>
          </Grid>
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
            <Grid container direction="column" className={classes.container}>
              <Grid container item>
                <Grid item xs></Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  justify="flex-end"
                  xs
                  style={{
                    height: stylingConstants.NAVBAR_HEIGHT,
                  }}
                >
                  <IconButton
                    color="white"
                    aria-label="open drawer"
                    edge="end"
                    onClick={() => setOpen(!open)}
                    className={clsx(open && classes.closeOverlay)}
                  >
                    <CloseIcon
                      style={{
                        color: "white",
                        fontSize: 32,
                      }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs
                justify="center"
                alignItems="center"
                direction="column"
              >
                <Typography variant="h3" gutterBottom>
                  <Link href="/" className={classes.whiteText}>
                    Home
                  </Link>
                </Typography>
                {/* <Typography variant="h3" gutterBottom>
                  <Link href="/links" className={classes.whiteText}>
                    Links
                  </Link>
                </Typography> */}

                <Typography variant="h3" gutterBottom>
                  <Link href="/takeaways" className={classes.whiteText}>
                    Takeaways
                  </Link>
                </Typography>
                <Typography variant="h3" gutterBottom>
                  <Link href="/about" className={classes.whiteText}>
                    About
                  </Link>
                </Typography>
              </Grid>
              <Grid container item xs justify="center" alignItems="center">
                <Typography
                  variant="body1"
                  className={clsx(classes.whiteText)}
                  gutterBottom
                >
                  Brought to you by TEDxPESU
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Navbar;
