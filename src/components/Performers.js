import React from "react";
import { Container, responsiveFontSizes, Typography } from "@material-ui/core";
import { speakerStyles } from "../styles/speakers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import Sliders from "./Sliders";
import PerformersSliders from "./PerformersSliders";

let theme = createMuiTheme({
  typography: {
    fontFamily: "Raleway",
  },
});

theme = responsiveFontSizes(theme);

const Performers = () => {
  const classes = speakerStyles();
  return (
    <Container className={classes.Container}>
      <div>
        <Typography
          className={classes.heading}
          align="left"
          variant="h2"
          style={{ fontWeight: 400, marginTop: 124 }}
        >
          Meet the event
        </Typography>
        <Typography
          className={classes.heading}
          align="left"
          variant="h2"
          style={{ marginBottom: 24 }}
        >
          speakers
        </Typography>
      </div>
      <PerformersSliders />
    </Container>
  );
};

export default Performers;
