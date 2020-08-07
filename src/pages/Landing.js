import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";

import Navbar from "../components/Navbar";
import { landingStyles } from "../styles/Landing";
import { Typography } from "@material-ui/core";
import { ContrastTextField, PrimaryButton } from "../styles/theme";

const Landing = () => {
  const classes = landingStyles();
  return (
    <div className={classes.blackBackground}>
      <Container maxWidth="lg" className={classes.container}>
        <div>
          <Navbar />
        </div>
        <div>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            style={{ height: "100%" }}
          >
            <Grid item>
              <Typography
                variant="h6"
                className={clsx(classes.whiteText)}
                align="center"
              >
                {/* 10pm IST */}
              </Typography>
              <Typography
                variant="h3"
                className={clsx(classes.whiteText)}
                align="center"
              >
                10.10.2020
              </Typography>
              <Typography
                variant="h6"
                className={clsx(classes.whiteText)}
                align="center"
              >
                Countdown to a Zero-carbon world
              </Typography>
            </Grid>
            <Grid
              container
              item
              justify="center"
              className={clsx(classes.marginTop4)}
            >
              {/* <form
                className={clsx(classes.form)}
                noValidate
                autoComplete="off"
              > */}
              <ContrastTextField
                id="hero-email"
                label="Enter Email"
                variant="outlined"
                InputProps={{
                  className: classes.whiteText,
                }}
                InputLabelProps={{
                  className: classes.whiteText,
                }}
              />
              {/* </form> */}
              <PrimaryButton variant="contained" style={{ marginLeft: 18 }}>
                Register
              </PrimaryButton>
            </Grid>
            <Grid item xs={3} container alignItems="flex-end" justify="center">
              <Typography
                variant="h6"
                className={clsx(classes.whiteText, classes.marginBottom1)}
              >
                #JoinTheCountdown
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            {[
              "Bob Dylan",
              "Speaker Name",
              "Speaker Name",
              "Speaker Name",
              "Speaker Name",
            ].map((name) => {
              return (
                <Grid
                  item
                  className={clsx(
                    classes.marginLeftRight32,
                    classes.marginBottom18
                  )}
                >
                  <Typography
                    variant="body1"
                    className={clsx(
                      classes.whiteText,

                      classes.boldText
                    )}
                    display="inline"
                  >
                    {name.split(" ")[0]}
                  </Typography>
                  {/* Don't forget the space in between */}` `
                  <Typography
                    variant="body1"
                    className={clsx(classes.whiteText, classes.marginBottom18)}
                    display="inline"
                  >
                    {name.split(" ")[1]}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Landing;
