import React from "react";
import Grid from "@material-ui/core/Grid";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const SocialMedia = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs>
        <a
          href="https://www.instagram.com/tedxpesu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            color="primary"
            style={{ marginLeft: "18", marginRight: "18" }}
          />
        </a>
      </Grid>
      <Grid item xs>
        <a
          href="https://www.facebook.com/tedxpesu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            color="primary"
            style={{ marginLeft: "18", marginRight: "18" }}
          />
        </a>
      </Grid>
      <Grid item xs>
        <a
          href="https://www.linkedin.com/company/tedxpesu/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: 0 }}
        >
          <LinkedInIcon
            color="primary"
            style={{ marginLeft: "18", marginRight: "18" }}
          />
        </a>
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
