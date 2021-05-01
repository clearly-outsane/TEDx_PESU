import React from "react";
import { Container, responsiveFontSizes, Typography } from "@material-ui/core";
import { speakerStyles } from "../styles/speakers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Sliders from "./Sliders";
import { Link } from "react-router-dom";

let theme = createMuiTheme({
  typography: {
    fontFamily: "Raleway",
  },
});

theme = responsiveFontSizes(theme);

const Speakers = () => {
  const classes = speakerStyles();
  return (
    <div style={{ backgroundColor: "black", marginTop: "-125px" }}>
      <Container className={classes.Container}>
        <div>
          <Typography
            className={classes.heading}
            align="left"
            variant="h2"
            style={{ fontWeight: 400, marginTop: 124, color: "red" }}
          >
            Meet the event
          </Typography>
          <Typography
            className={classes.heading}
            align="left"
            variant="h2"
            style={{ marginBottom: 24, color: "red" }}
          >
            speakers
          </Typography>
        </div>
        <Sliders />
        <h2
          style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "0" }}
        >
          <Link to="circles" style={{ color: "red" }}>
            Intrigued to know what was discussed? click here to know!
          </Link>
        </h2>
      </Container>
    </div>
  );
};

export default Speakers;
