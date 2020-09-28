import React from "react";
import { createMuiTheme, Grid, responsiveFontSizes } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import imagex from "../assets/images/speakerImages/imagex.png";
import "../styles/links.css";
import Hidden from "@material-ui/core/Hidden";

const LinksPage = () => {
  return (
    <Grid
      container
      style={{ height: "100vh", transition: "0.5s", overflow: "hidden" }}
    >
      <Hidden smDown>
        <Grid container xs={6}>
          <img src={imagex} style={{ width: "100%", objectFit: "cover" }} />
        </Grid>
      </Hidden>
      <Grid
        justify="center"
        xs={12}
        md={6}
        style={{ padding: "0 30px", transition: "0.3s" }}
      >
        <Grid item xs={12} style={{ marginTop: "100px", marginBottom: "20px" }}>
          <Typography style={{ maxWidth: "75%" }} variant="h3" gutterBottom>
            Everything in one place for your convinience
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          style={{ height: "40vh" }}
          alignContent="space-around"
        >
          <Grid container item xs={12}>
            <Grid item xs={6} md={6}>
              <Typography
                display="inline"
                style={{
                  color: "rgba(0,0,0,0.48)",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                <a
                  className="link"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc9yCsQkdIZCtXtAUQb_Ms90ppWlF_3LkXQaYIYc2gvWstdcg/viewform"
                >
                  Bare Habits - CMS Collaboration
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={6} md={6}>
              <Typography
                display="inline"
                style={{
                  color: "rgba(0,0,0,0.48)",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                <a
                  className="link"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc4XrrZTie9mvvvBilDw9tNOCHelIh4IEAop4LlqtPQttLSog/viewform"
                >
                  Green Mile Ideathon-sponsored by CIE
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={6} md={6}>
              <Typography
                display="inline"
                style={{
                  color: "rgba(0,0,0,0.48)",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                <a className="link" href="/links/jtc-upload">
                  #JoinTheCountdown Video Upload
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Button
            style={{
              height: "40px",
              padding: "0 15px",
              borderRadius: "0",
              backgroundColor: "red",
              color: "#fff",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="www.tedxpesu.com/#register"
            >
              Register for Countdown
            </a>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LinksPage;
