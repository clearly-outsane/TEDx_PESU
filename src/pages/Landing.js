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
import AboutTedxSection from "../components/AboutTedxSection";
import AboutCountdownSection from "../components/AboutCountdownSection";

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
            <Grid container item xs={12} sm={6}>
              <Typography
                variant="body1"
                className={clsx(classes.whiteText, classes.boldText)}
                display="inline"
                gutterBottom
                style={{
                  fontWeight: 200,
                  marginBottom: 18,
                  fontSize: "1.25rem",
                }}
              >
                10.10.2020 10pm IST
              </Typography>
              <Typography
                variant="h4"
                className={clsx(classes.whiteText, classes.boldText)}
                display="inline"
                style={{
                  marginBottom: 36,
                }}
              >
                Help change climate change. <br />
                Join us on a countdown to a zero carbon world
              </Typography>
              <PrimaryButton style={{ marginBottom: 8 }}>
                Register
              </PrimaryButton>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={6}
              alignItems="flex-start"
              justify="flex-end"
              style={{ marginBottom: 18 }}
            >
              <img src={earth} alt="Earth globe gif" className={classes.gif} />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.marginBottom36}
          >
            {[
              "Bob Dylan",
              "Vinay Sateesh",
              "Not Prateek",
              "Nim zim",
              "Just Kidding",
            ].map((name) => {
              return (
                <Grid item className={clsx(classes.marginLeftRight32)}>
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

      <AboutTedxSection />
      <AboutCountdownSection />
    </div>
  );
};

export default Landing;
