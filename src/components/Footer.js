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
          <Typography ariant="caption" style={{ color: "white" }}>
            Made with ❤
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
