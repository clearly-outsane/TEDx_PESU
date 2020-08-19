import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

import { aboutSection, aboutPageStyles } from "../styles/Sections";
import { ReactComponent as AboutSvg } from "../assets/svg/About.svg";

const AboutTED = () => {
  const classes = aboutPageStyles();
  return (
		<>
      <div className={clsx(classes.container, classes.whiteBackground)}>
          <AboutSvg
            style={{
							position: "absolute",
              width: "90%",
              height: "22vw",
							opacity: 0.4
            }}
          />
					<Container maxWidth="lg">
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            style={{ marginTop: 50 }}
          >
            <Typography
              variant="h2"
              gutterBottom
            >
              About TED
            </Typography>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container justify="center" >
            <Grid
              container
              item
              xs={12}
              sm={7}
              alignItems="flex-start"
              style={{ margin: "50 0" }}
            >
              <Typography variant="h6" gutterBottom>
                TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day 
								conference in California 30 years ago, TED has grown to support its mission with multiple 
								initiatives. The two annual TED Conferences invite the world's leading thinkers and doers 
								to speak for 18 minutes or less. Many of these talks are then made available, free, at 
								TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir 
								Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and 
								Daniel Kahneman.<br/><br/>
								The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's
								media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, 
								which provides subtitles and interactive transcripts as well as translations from 
								volunteers worldwide; the educational initiative TED-Ed. TED has established The 
								Audacious Project that takes a collaborative approach to funding ideas with the potential 
								to create change at thrilling scale; TEDx, which supports individuals or groups in hosting 
								local, self- organized TED-style events around the world, and the TED Fellows program, 
								helping world-changing innovators from around the globe to amplify the impact of their 
								remarkable projects and activities. 
              </Typography>
            </Grid>
          </Grid>
        </Container>
				</div>
		</>
  );
};

export default AboutTED;
