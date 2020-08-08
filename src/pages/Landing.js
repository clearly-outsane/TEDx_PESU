import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import Mailchimp from 'react-mailchimp-form';

import Navbar from "../components/Navbar";
import { landingStyles } from "../styles/Landing";
import { Typography } from "@material-ui/core";
import { spacing } from '@material-ui/system';
import { ContrastTextField, PrimaryButton } from "../styles/theme";
import earth from "../assets/gifs/earth.gif";
import earthCropped from "../assets/gifs/earth-cropped.gif";

const Landing = () => {
  const classes = landingStyles();
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
            style={{ height: "100%" }}
          >
            <Grid container item xs={12} sm={6} style={{padding: "3rem"}}>
              <Typography
                variant="body1"
                className={clsx(classes.whiteText, classes.boldText, classes.smallText)}
                display="inline"
                gutterBottom
              >
                10.10.2020 10pm IST
              </Typography>
              <Typography
                variant="h4"
                className={clsx(classes.whiteText, classes.bigText)}
                display="inline"
              >
                Help change climate change. <br />
                Join us on a countdown to a zero carbon world
              </Typography>
              <PrimaryButton style={{ marginBottom: 8 }}>
                Register
              </PrimaryButton>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              alignItems="flex-start"
              justify="flex-end"
              style={{ marginBottom: 18 }}
            >
              <img src={earth} alt="Earth globe gif" className={classes.gif} />
              {/* <img src={earthCropped} alt="Earth globe gif" className={classes.gif} /> */}
            </Grid>
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



			<div id="aboutCountdown"> 
			<Container maxWidth="lg">
				<Grid
            container
            justify="center"
            alignItems="center"
          >
						<Grid
              container
              item
              xs={12}
              sm={6}
              alignItems="flex-start"
              justify="flex-end"
              style={{ marginBottom: 18 }}
            >
							{/* this div will contain the x and the changing background image 
									position of the x is fixed.
									the background images will scroll?
									overflow is hidden? no that won't work
									add scrollhandlder? change images when window.pageyoffset > something? yes ok */}
							<div> 
              {/* <img src={earth} alt="Earth globe gif" className={classes.x} /> */}
							</div>
            </Grid>
            <Grid container item xs={12} sm={6} style={{padding: "3rem"}}>
              <Typography
                variant="h4"
                className={clsx(classes.whiteText, classes.bigText)}
                display="inline"
                
              >
                About Countdown
              </Typography>
							<Typography
                variant="body1"
                className={clsx(classes.whiteText, classes.smallText)}
                display="inline"
                
              >
                Countdown is a global initiative to champion and accelerate solutions to the climate crisis, turning 
								ideas into action. The goal: To build a better future by cutting greenhouse gas emissions 
								in half by 2030 in the race to a zero-carbon world – a world that is safer, cleaner and fairer for everyone.
              </Typography>
            </Grid>
            
          </Grid>

				</Container>
			</div>
			<div id="register">
			<Container maxWidth="lg" className={classes.registerContainer}>

				{/* fix css ask vinay how grids work  */}
				<Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: "100%", display: "block" }}
          >
						<Typography
                variant="h4"
                className={clsx(classes.whiteText, classes.bigText)}
                display="inline" 
							>
								#JoinTheCountdown
						</Typography>
						
						{/* mailchimp material ui?? ask vinay */}
						<Mailchimp
							action='https://tedxpesu.us17.list-manage.com/subscribe/post?u=ba7804f5c0145f0050fc88bd4&amp;id=f7a8682e3a'
							className={classes.register}
        			fields={[{
            		name: 'EMAIL',
           			placeholder: 'Email',
           			type: 'email',
           			required: true
          		}, 
							{
								name: 'FNAME',
								placeholder: 'Name',
								type: 'text',
								required: true
							}
        			]}
       			 />
					</Grid>
			</Container>
			</div>
    </div>
  );
};

export default Landing;
