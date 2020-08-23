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
            <Grid container>
              <Grid item container xs>
                <Typography
                  variant="h3"
                  align="left"
                  gutterBottom
                  style={{ fontWeight: 600 }}
                >
                  Here's your chance to work with us!
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  gutterBottom
                  style={{ fontWeight: 400 }}
                >
                  Whether you are a developer or a content creator, show us your
                  valuable skills.
                </Typography>
              </Grid>
              <Grid container item xs direction="column" alignItems="center">
                <Grid
                  item
                  xs={12}
                  container
                  justify="center"
                  style={{ marginTop: 18, marginBottom: 18 }}
                >
                  <LargePrimaryButton>Join the team</LargePrimaryButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  justify="center"
                  style={{ marginTop: 18, marginBottom: 18 }}
                >
                  <LargePrimaryButton>Perform on the show</LargePrimaryButton>
                </Grid>
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
