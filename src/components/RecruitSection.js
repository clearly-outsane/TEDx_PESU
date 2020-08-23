import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { LargePrimaryButton } from "../styles/theme";

const Quote = () => {
  return (
    <div
      style={{
        minHeight: "100vh",

        display: "grid",
        placeItems: "center",
      }}
    >
      <Container maxWidth="lg" style={{ height: "100%" }}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h1"
              align="left"
              gutterBottom
              style={{ fontWeight: 600 }}
            >
              Here's your chance to work with us!
            </Typography>
            <Grid container item xs>
              <Grid
                item
                xs={12}
                lg={2}
                md={2}
                container
                justify="center"
                style={{ marginTop: 18, marginBottom: 18 }}
              >
                <LargePrimaryButton>Join the team</LargePrimaryButton>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                md={5}
                container
                justify="center"
                style={{ marginTop: 18, marginBottom: 18 }}
              >
                <LargePrimaryButton>Perform on the show</LargePrimaryButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="left" gutterBottom>
              Contact us at:
            </Typography>
            <Typography
              variant="h4"
              align="left"
              gutterBottom
              style={{ fontWeight: 600 }}
            >
              contact @tedxpesu.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Quote;
