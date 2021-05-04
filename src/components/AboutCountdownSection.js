import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import ScrollAnimation from "react-animate-on-scroll";
import { aboutSection } from "../styles/Sections";
// import { ReactComponent as AboutSvg } from "../assets/svg/Countdown.svg";
// import theme from "../styles/theme";
// import AboutCountdownImage from "../assets/svg/circle1.jpeg";
// import { Translate } from "@material-ui/icons";

const AboutSection = () => {
  const classes = aboutSection();
  const [offset, setoffset] = useState();

  const handleScroll = () => setoffset(window.pageYOffset);
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <div
        className={classes.container}
        id="horizontal"
        style={{
          // background: '#393939',
          minWidth: "100%",
          minHeight: "55vh",
          backgroundColor: "black",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            style={{ marginTop: 40 }}
          >
            <Typography
              variant="h2"
              className={clsx(classes.whiteText)}
              gutterBottom
              style={{ color: "red", fontWeight: "bold" }}
            >
              What is TED circles?
            </Typography>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid
            container
            justify="center"
            // style={{ height: '100%', marginLeft: offset * 0.015 - 20 + '%' }}
          >
            <Grid
              container
              item
              xs={12}
              sm={7}
              alignItems="flex-start"
              style={{ marginTop: 48 }}
            >
              <Grid item xs={12}>
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  // duration='2s'
                  // scrollableParentSelector='#scrolly-div'
                >
                  <Typography variant="h6" className={clsx(classes.whiteText)}>
                    {/*<a*/}
                    {/*  href='https://countdown.ted.com/'*/}
                    {/*  target='_blank'*/}
                    {/*  rel='noopener noreferrer'*/}
                    {/*  style={{*/}
                    {/*    color: 'red',*/}
                    {/*    textDecoration: 'none',*/}
                    {/*    color: 'white',*/}
                    {/*  }}*/}
                    {/*>*/}
                    {/*  /!* TED Circles *!/*/}
                    {/*</a>*/}
                    TED Circles is a community of small groups that engage in
                    fruitful conversations encircling big ideas. It takes place
                    virtually and helps communities stay connected, which is of
                    the essence during the pandemic.
                  </Typography>
                </ScrollAnimation>
                <br />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default AboutSection;
