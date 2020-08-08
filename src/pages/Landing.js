import React, { useEffect } from "react";
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
import energy from "../assets/images/energy-placeholder.jpg";
import transport from "../assets/images/transport-placeholder.jpg";
import nature from "../assets/images/nature-placeholder.jpg";
import materials from "../assets/images/materials-placeholder.jpg";
import food from "../assets/images/food-placeholder.jpg";

const Landing = () => {

	const images = [energy, transport, nature, materials, food];

	const [currentImage, setCurrentImage] = React.useState(energy);


  const classes = landingStyles();


	useEffect(() => {
		const image = document.getElementById("contentImage");
		const energy = document.getElementById("energy");
		const transport = document.getElementById("transport");
		const materials = document.getElementById("materials");
		const food = document.getElementById("food");
		const nature = document.getElementById("nature");
    const sticky = image.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if ((window.pageYOffset > sticky) && (window.pageYOffset < (sticky + 2800))) {
				image.classList.add(classes.contentImageSticky);
				image.classList.remove(classes.contentImageDefault);
      } else {
				if (window.pageYOffset < sticky) {
					image.classList.add(classes.contentImageDefault);
					image.classList.remove(classes.contentImageSticky);
				} else {
					image.classList.add(classes.contentImageDefault);
					image.style.top = "";
					image.style.bottom = "3000px";
					image.classList.remove(classes.contentImageSticky);

				}
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);



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
						className={classes.homeContent}
          >
            <Grid container item xs={12} sm={6}>
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



			<div id="content"> 
			<Container maxWidth="lg">
				<Grid
            container
            justify="center"
            alignItems="center"
          >
						<Grid
              item
              xs={12}
              sm={6}
              alignItems="flex-start"
              justify="flex-start"
							id="contentImageX"
							className={classes.contentImageContainer}
            >
							
							{/* this div will contain the x and the changing background image 
									position of the x is fixed.
									the background images will scroll?
									overflow is hidden? no that won't work
									add scrollhandlder? change images when window.pageyoffset > something? yes ok */}
									<img id="contentImage" src={currentImage} alt="Energy" className={classes.contentImageDefault}/>
						
            </Grid>
            <Grid container item xs={12} sm={6}>
            	<Grid container item xs={12} alignItems="space-around" className={classes.content}>
							
							<Typography
								id="aboutCountdown"
                variant="body1"
                className={clsx(classes.whiteText, classes.smallText)}
                display="inline"
              >
              	<span className={clsx(classes.whiteText, classes.bigText)}> 
									About Countdown<br/>
								</span>
                Countdown is a global initiative to champion and accelerate solutions to the climate crisis, turning 
								ideas into action. The goal: To build a better future by cutting greenhouse gas emissions 
								in half by 2030 in the race to a zero-carbon world – a world that is safer, cleaner and fairer for everyone.
								<br/><span className={classes.boldText}> Countdown seeks to answer five fundamental, interconnected questions 
								that help inform a blueprint for a cleaner future:</span>
              </Typography>
							</Grid>

            	<Grid container item xs={12} className={classes.content}>
							<Typography
								id="energy"
                variant="body1"
                className={clsx(classes.whiteText, classes.smallText)}
                display="inline"
              >
              	<span className={clsx(classes.whiteText, classes.bigText)}> 
									Energy<br/>
								</span>
                Countdown is a global initiative to champion and accelerate solutions to the climate crisis, turning 
								ideas into action. The goal: To build a better future by cutting greenhouse gas emissions 
								in half by 2030 in the race to a zero-carbon world – a world that is safer, cleaner and fairer for everyone.
              </Typography>
							</Grid>

            	<Grid container item xs={12} className={classes.content}>
							<Typography
								id="transport"
                variant="body1"
                className={clsx(classes.whiteText, classes.smallText)}
                display="inline"
              >
              	<span className={clsx(classes.whiteText, classes.bigText)}> 
									Transport<br/><br/>
								</span>
                <span className={clsx(classes.whiteText), classes.boldText}>How can we upgrade the way we 
								move people and things?</span><br/>Ride your cycle, or walk! It's better for you, and better
								for the planet. Electric cars are quite in vogue too.
              </Typography>
							</Grid>

            	<Grid container item xs={12} className={classes.content}>


							<Typography
								id="materials"
                variant="body1"
                className={clsx(classes.whiteText, classes.smallText)}
                display="inline"
              >
              	<span className={clsx(classes.whiteText, classes.bigText)}> 
									Materials<br/>
								</span>
                Countdown is a global initiative to champion and accelerate solutions to the climate crisis, turning 
								ideas into action. The goal: To build a better future by cutting greenhouse gas emissions 
								in half by 2030 in the race to a zero-carbon world – a world that is safer, cleaner and fairer for everyone.
              </Typography>
							</Grid>

            	<Grid container item xs={12} className={classes.content}>
								<Typography
								id="food"
                variant="body1"
                className={clsx(classes.whiteText, classes.smallText)}
                display="inline"
              >
              	<span className={clsx(classes.whiteText, classes.bigText)}> 
									Food<br/>
								</span>
                Countdown is a global initiative to champion and accelerate solutions to the climate crisis, turning 
								ideas into action. The goal: To build a better future by cutting greenhouse gas emissions 
								in half by 2030 in the race to a zero-carbon world – a world that is safer, cleaner and fairer for everyone.
              </Typography>
							</Grid>

            	<Grid container item xs={12} className={classes.content}>
							<Typography
								id="nature"
                variant="body1"
                className={clsx(classes.whiteText, classes.smallText)}
                display="inline"
              >
              	<span className={clsx(classes.whiteText, classes.bigText)}> 
									Nature<br/>
								</span>
                Countdown is a global initiative to champion and accelerate solutions to the climate crisis, turning 
								ideas into action. The goal: To build a better future by cutting greenhouse gas emissions 
								in half by 2030 in the race to a zero-carbon world – a world that is safer, cleaner and fairer for everyone.
              </Typography>
							</Grid>
            </Grid>
            
          </Grid>

				</Container>
			</div>
			<div id="register">
			<Container maxWidth="lg" className={classes.registerContainer}>

{/* fix css ask vinay how grids work  */}
						<Typography
                variant="h4"
                className={clsx(classes.whiteText, classes.bigText)}
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
			</Container>
			</div>
    </div>
  );
};


export default Landing;
