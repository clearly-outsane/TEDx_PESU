import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

import { stylingConstants } from "../constants";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container maxWidth="lg">
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          style={{ height: stylingConstants.NAVBAR_HEIGHT }}
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" style={{ color: "white" }}>
              Made with ❤
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} container justify="center">
            <Typography
              variant="caption"
              style={{ color: "white" }}
              align="center"
            >
              This independent TEDx event is operated under license from TED.
            </Typography>
            <br />
            <Typography
              variant="caption"
              style={{ color: "white" }}
              align="center"
            >
              Designed by Vinay Sateesh and Nimisha Vijay
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
