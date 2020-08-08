import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import Mailchimp from 'react-mailchimp-form';

import Navbar from "../components/Navbar";
import { AboutStyles } from "../styles/AboutStyles";

import { Typography } from "@material-ui/core";
import theme, { ContrastTextField, PrimaryButton, } from "../styles/theme";

const AboutPage = () => {
  const classes = AboutStyles();
  return (
    <div className={classes.blackBackground}>
      <Container maxWidth="lg" className={classes.homeContainer}>
        <div>
          <Navbar />
        </div>
        <div>
          <Grid
            container
            justify="center"
            alignItems="center"
						display="block"
						className={classes.contentContainer}
          >
              <Typography
                variant="h4"
                className={clsx(classes.whiteText, classes.boldText, classes.bigText)}
                gutterBottom
              >
                About TEDx 
              </Typography>
							<Typography
                variant="h6"
                className={clsx(classes.whiteText, classes.boldText, classes.smallText)}
              >
                x = independently organized event
              </Typography>
              <Typography
                variant="body1"
                className={clsx(classes.whiteText, classes.smallText)}
              >
                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events 
								that bring people together to share a TED-like experience. At a TEDx event, TED Talks video 
								and live speakers combine to spark deep discussion and connection. These local, self-organized 
								events are branded TEDx, where x = independently organized TED event. The TED Conference provides 
								general guidance for the TEDx program, but individual TEDx events are self-organized. 
								(Subject to certain rules and regulations.)
              </Typography>
							<Typography
                variant="h4"
                className={clsx(classes.whiteText, classes.boldText, classes.bigText)}
                gutterBottom
              >
                About TED
              </Typography>
              <Typography
                variant="body1"
                className={clsx(classes.whiteText, classes.smallText)}
                display="inline"
              >
                TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, 
								TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers 
								and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included 
								Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan 
								and Daniel Kahneman.<br/><br/>The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives 
								include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as 
								translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a 
								collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or 
								groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators 
								from around the globe to amplify the impact of their remarkable projects and activities.<br/><br/>Follow TED on 
								<a href="http://twitter.com/TEDTalks" target="_blank" style={{ color: theme.palette.primary.main, textDecoration: "none"}}> Twitter</a> or on 
								<a href=" http://www.facebook.com/TED" target="_blank"style={{ color: theme.palette.primary.main, textDecoration: "none"}}> Facebook </a>.
              </Typography>
          </Grid>
        </div>



         { // WE DON'T HAVE SPEAKERS YET  //
				 /*<div>
          <Grid container justify="center" alignItems="center">
            {[
              "Bob Dylan",
              "Vinay Sateesh",
              "Not Prateek",
              "Nim Zim",
              "Just Kidding",
            ].map((name) => {
              return (
                <Grid
                  item
                  className={clsx(
                    classes.marginLeftRight32,
                    classes.marginBottom36
                  )}
                >
                  <Typography
                    variant="body1"
                    className={clsx(classes.whiteText, classes.boldText)}
                    display="inline"
                  >
                    {name.split(" ")[0]}
                  </Typography>
                  {/* Don't forget the space in between /}` `
                  <Typography
                    variant="body1"
                    className={clsx(classes.whiteText, classes.marginBottom18)}
                    display="inline"
                  >
                    {name.split(" ")[1]}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </div> */}
      </Container>

    </div>
  );
};

export default AboutPage;
