import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

import { aboutSection } from "../styles/Sections";
import { ReactComponent as AboutSvg } from "../assets/svg/AboutWhite.svg";
import theme from "../styles/theme";

const AboutTEDxAboutPage = () => {
  const classes = aboutSection();
  return (
		<>
      <Container maxWidth="lg">
          <AboutSvg
            style={{
							position: "absolute",
              width: "90%",
              height: "22vw",
							opacity: 0.3
            }}
            fill="white"
          />
        {/* <Container maxWidth="lg" > */}
          <Grid
            container
            justify="flex-start"
            alignItems="flex-start"
						direction="column"
            style={{ marginTop: 50 }}
          >
            <Typography
              variant="h2"
              className={clsx(classes.whiteText)}
            >
              About TEDx
            </Typography>
						<Typography
              variant="h5"
              className={clsx(classes.whiteText)}
            >
              x = independently organized TED event
            </Typography>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container justify="center" style={{ height: "100%" }}>
            <Grid
              container
              item
              xs={12}
              sm={7}
              alignItems="flex-start"
              style={{ marginTop: 48 }}
            >
              <Typography variant="h6" className={clsx(classes.whiteText)}>
                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized 
								events that bring people together to share a TED-like experience. At a TEDx event, 
								TED Talks video and live speakers combine to spark deep discussion and connection. 
								These local, self-organized events are branded TEDx, where x = independently organized 
								TED event. The TED Conference provides general guidance for the TEDx program, but 
								individual TEDx events are self-organized. (Subject to certain rules and regulations.)
              </Typography>
            </Grid>
          </Grid>
        {/* </Container> */}

      </Container>
			</>
  );
};

export default AboutTEDxAboutPage;
