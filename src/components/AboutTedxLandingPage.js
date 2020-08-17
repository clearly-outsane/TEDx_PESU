import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

import { aboutSection } from "../styles/Sections";
import { ReactComponent as AboutSvg } from "../assets/svg/About.svg";

const AboutSection = () => {
  const classes = aboutSection();
  return (
    <>
      <div className={classes.container}>
        <Container maxWidth="lg">
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            style={{ marginTop: 124 }}
          >
            <Typography
              variant="h2"
              className={clsx(classes.boldText)}
              gutterBottom
            >
              About TEDx
            </Typography>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container justify="center" style={{ height: "100%" }}>
            <Grid
              container
              item
              xs={12}
              sm={7}
              alignItems="flex-start"
              style={{ marginTop: 48 }}
            >
              <Typography variant="h6" gutterBottom>
                In the spirit of ideas worth spreading, TED has created a
                program called TEDx. TEDx is a program of local, self-organized
                events that bring people together to share a TED-like
                experience. Our event is called TEDxPESU, where x =
                independently organized TED event. At our TEDxPESU event, TED
                Talks video and live speakers will combine to spark deep
                discussion and connection in a small group. The TED Conference
                provides general guidance for the TEDx program, but individual
                TEDx events, including ours, are self-organized.
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <div className={classes.backgroundText}>
          <AboutSvg
            style={{
              width: "100%",
              transform: "translate(0,4vw)",
              height: "22vw",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
