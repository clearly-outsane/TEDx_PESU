import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";

import Navbar from "../components/Navbar";
import { landingStyles } from "../styles/Landing";
import { Typography } from "@material-ui/core";
import { ContrastTextField, PrimaryButton } from "../styles/theme";
import earth from "../assets/gifs/earth.gif";

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
            style={{ height: "100%" }}
          >
            <Grid container item xs>
              <Typography
                variant="h4"
                className={clsx(classes.whiteText, classes.boldText)}
                display="inline"
                style={{
                  fontWeight: 400,
                  marginBottom: 48,
                  fontSize: "2.5rem",
                }}
              >
                Help change climate change. <br />
                Join us on a countdown to a zero carbon world
              </Typography>
              <PrimaryButton>Register</PrimaryButton>
            </Grid>
            <Grid
              container
              item
              xs={6}
              alignItems="flex-start"
              style={{ marginBottom: 18 }}
            >
              <img src={earth} alt="Earth globe gif" className={classes.gif} />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            {[
              "Bob Dylan",
              "Vinay Sateesh",
              "Not Prateek",
              "Nim zim",
              "Just Kidding",
            ].map((name) => {
              return (
                <Grid
                  item
                  className={clsx(
                    classes.marginLeftRight32,
                    classes.marginBottom36
                  )}
                >
                  <Typography
                    variant="body1"
                    className={clsx(classes.whiteText, classes.boldText)}
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
