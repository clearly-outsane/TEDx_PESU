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
				backgroundColor: "white",
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
          <Grid item xs={12} container>
            <Grid item container xs={12} lg={6} md={6}>
              <Typography
                variant="h2"
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
								Whether you want to work behind the scenes or take centre stage,
								there's a role for you.
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={6}
              lg={6}
              direction="column"
              alignItems="center"
            >
              <Grid
                item
                xs
                container
                justify="center"
                style={{ marginTop: 18, marginBottom: 18 }}
              >
                <a
                  href="https://forms.gle/aNPffu6HLJoKftCF7"
                  style={{ textDecoration: "none" }}
                >
                  <LargePrimaryButton>Join the team</LargePrimaryButton>
                </a>
              </Grid>
              <Grid
                item
                xs
                container
                justify="center"
                style={{ marginTop: 18, marginBottom: 18 }}
              >
                <a
                  href="https://forms.gle/j7mVCHbk7DaQbb846"
                  style={{ textDecoration: "none" }}
                >
                  <LargePrimaryButton>Perform on the show</LargePrimaryButton>
                </a>
              </Grid>
            </Grid>
          </Grid>
{/* 
          <Grid item xs={12}>
          {/* <Grid item xs={12}>
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
        	</Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Quote;
