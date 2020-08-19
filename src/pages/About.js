import React, { useRef } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import { ReactComponent as AboutSvg } from "../assets/svg/AboutWhite.svg";

import Navbar from "../components/Navbar";
import { landingStyles } from "../styles/Landing";
import { Typography } from "@material-ui/core";
import { ContrastTextField, PrimaryButton } from "../styles/theme";
import MailchimpForm from "../components/MailchimpForm";
import Footer from "../components/Footer";
import AboutTEDxAboutPage from "../components/AboutTEDxAboutPage";
import AboutTED from "../components/AboutTED";
import { aboutPageStyles } from "../styles/Sections";

const About = () => {
  const classes = aboutPageStyles();
  const formRef = useRef(null);
  return (
    <div className={classes.blackBackground}>
		{/* // <div> */}
      <Container maxWidth="lg">
        <div>
          <Navbar />
        </div>
      </Container>
				<AboutTEDxAboutPage />
				<AboutTED />
      {/* should we keep this or nah
			<div ref={formRef} id="mailchimpForm">
        <MailchimpForm />
      </div> */}
      <Footer />
    </div>
  );
};

export default About;
