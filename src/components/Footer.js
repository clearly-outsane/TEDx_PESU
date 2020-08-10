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
          style={{ height: stylingConstants.NAVBAR_HEIGHT * 2 }}
        >
          <Grid item xs={12} sm={2}>
            <Typography
              variant="body2"
              style={{ color: "white" }}
              align="center"
            >
              Made with ❤
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            container
            justify="center"
            direction="column"
          >
            <Typography
              variant="body2"
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
              Website designed by Vinay Sateesh and Nimisha Vijay
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
