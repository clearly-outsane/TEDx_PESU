import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Background from "../assets/svg/TiledXBackground.svg";

const JoinTheCountdown = () => {
  return (
    <div
      style={{
        // backgroundImage: `url(${Background})`,
        paddingTop: 64,
        paddingBottom: 64,
      }}
    >
      <Grid container justify="center" alignItems="center" direction="column">
        <Typography variant="body1" align="center">
          #JoinTheCountdown
        </Typography>
        <Typography variant="h2" gutterBottom align="center">
          Sign up for our next event
        </Typography>
      </Grid>
    </div>
  );
};

export default JoinTheCountdown;
