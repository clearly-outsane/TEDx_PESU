import React, { useRef } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import { Link, animateScroll as scroll } from "react-scroll";

import Navbar from "../components/Navbar";
import { landingStyles } from "../styles/Landing";
import { Typography } from "@material-ui/core";
import { ContrastTextField, PrimaryButton } from "../styles/theme";
import earth from "../assets/gifs/earth.gif";
import AboutTedxSection from "../components/AboutTedxLandingPage";
import AboutCountdownSection from "../components/AboutCountdownSection";
import MailchimpForm from "../components/MailchimpForm";
import Footer from "../components/Footer";
import Quote from "../components/fillers/Quote";
import RecruitSection from "../components/RecruitSection";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

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
                  10.10.2020 10pm IST
                </Typography>
                <Typography
                  variant="h3"
                  className={clsx(classes.whiteText)}
                  display="inline"
                  style={{
                    marginBottom: 24,
                  }}
                >
                  Join us on a countdown to a zero carbon world
                </Typography>
                <Link
                  activeClass="active"
                  to="mailchimpForm"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <PrimaryButton style={{ marginBottom: 8 }} size="large">
                    Register
                  </PrimaryButton>
                </Link>
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
                <img
                  src={earth}
                  alt="Earth globe gif"
                  className={classes.gif}
                />
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
                  <Grid item className={clsx(classes.marginLeftRight32)}>
                    {/* 
                  <Typography
                    variant="body1"
                    className={clsx(classes.whiteText, classes.boldText)}
                    display="inline"
                  >
                    {name.split(" ")[0]}
                  </Typography>
                  ` `
                  <Typography
                    variant="body1"
                    className={clsx(classes.whiteText, classes.marginBottom18)}
                    display="inline"
                  >
                    {name.split(" ")[1]}
                  </Typography> 
                  */}
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Container>
      </div>
      <div>
        <AboutTedxSection />
        <AboutCountdownSection />

        <div ref={formRef} id="mailchimpForm">
          <MailchimpForm />
        </div>
        <Quote />
        <RecruitSection />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
