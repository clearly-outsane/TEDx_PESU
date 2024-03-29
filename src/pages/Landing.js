import React, { useRef, useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import Navbar from "../components/Navbar";
import { landingStyles } from "../styles/Landing";
import { Typography } from "@material-ui/core";
import AboutTedxSection from "../components/AboutTedxLandingPage";
import AboutCountdownSection from "../components/AboutCountdownSection";
import Footer from "../components/Footer";
import Quote from "../components/fillers/Quote";
import Speakers from "../components/Speakers";
import MoreInfo from "../components/MoreInfo";
import Benefits from "../components/Benefits";
import blackCircle from "../assets/gifs/BnW.gif";

const Landing = () => {
  const classes = landingStyles();
  const formRef = useRef(null);

  return (
    <>
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
                  19.4.2021
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(classes.whiteText)}
                  display="inline"
                  style={{
                    marginBottom: 24,
                  }}
                >
                  TED Circles is a community of small groups that engage in
                  fruitful conversations encircling big ideas. It takes place
                  virtually and helps communities stay connected, which is of
                  the essence during the pandemic.
                </Typography>
              </Grid>

              <Grid
                container
                item
                xs={12}
                sm={6}
                alignItems="flex-start"
                className="gifloader"
                justify="flex-end"
                style={{
                  marginBottom: 18,
                  backgroundBlendMode: "color-dodge",
                  zIndex: 0,
                }}
              >
                <img
                  src={blackCircle}
                  alt="Earth globe gif"
                  className={classes.gif}
                  style={{ boxShadow: "0 0 4px 4px black inset" }}
                />
                {/*<GifLoader*/}
                {/*  loading={true}*/}
                {/*  imageSrc={circle}*/}
                {/*  imageStyle={{*/}
                {/*    width: "100%",*/}ss
                {/*    height: "auto",*/}
                {/*    boxShadow: "0 0 8px 8px black inset",*/}
                {/*  }}*/}
                {/*  overlayBackground="none"*/}
                {/*/>*/}
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
                "Speaker Names",
                "To be",
                "Announced Soon",
                "Stay tuned",
                "Much wow",
              ].map((name) => {
                return (
                  <Grid item className={clsx(classes.marginLeftRight32)} />
                );
              })}
            </Grid>
          </div>
        </Container>
      </div>
      <div>
        <AboutTedxSection />
        <AboutCountdownSection />
        <MoreInfo />
        <Benefits />
        <Speakers />
        <Quote />
        {/* <div ref={formRef} id='register'>
          <MailchimpForm />
        </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
