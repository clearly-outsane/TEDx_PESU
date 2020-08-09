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
import energyImg from "../assets/images/energy-placeholder.jpg";
import transportImg from "../assets/images/transport-placeholder.jpg";
import natureImg from "../assets/images/nature-placeholder.jpg";
import materialsImg from "../assets/images/materials-placeholder.jpg";
import foodImg from "../assets/images/food-placeholder.jpg";

const Landing = () => {

	const currentImage = energyImg;
  const classes = landingStyles();

	// scroll effect
	// not working :/
	useEffect(() => {
		const image = document.getElementById("contentImage");
		const energyEle = document.getElementById("energy");
		const transportEle = document.getElementById("transport");
		const materialsEle = document.getElementById("materials");
		const foodEle = document.getElementById("food");
		const natureEle = document.getElementById("nature");
    const sticky = image.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if ((window.pageYOffset > window.innerHeight)) {
				image.classList.add(classes.contentImageSticky);
				image.classList.remove(classes.contentImageDefault);

				switch (true) {
					case window.pageYOffset > energyEle.offsetTop && window.pageYOffset < transportEle.offsetTop : 
						image.src = energyImg;
						break;
					case window.pageYOffset > transportEle.offsetTop && window.pageYOffset < materialsEle.offsetTop : 
						image.src = transportImg;
						break;
					case window.pageYOffset > materialsEle.offsetTop && window.pageYOffset < foodEle.offsetTop : 
						image.src = materialsImg;
						break;
					case window.pageYOffset > foodEle.offsetTop && window.pageYOffset < natureEle.offsetTop : 
						image.src = foodImg;
						break;
					case window.pageYOffset > natureEle.offsetTop :
						image.src = natureImg;
						break;
						
				}


      } else {
					image.classList.add(classes.contentImageDefault);
					image.classList.remove(classes.contentImageSticky);
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
                Countdown is a global TED initiative that aims to bring together leaders and activists in various fields, from
scientists and farmers to entrepreneurs and artists, to battle the ongoing climate crisis. It seeks to provide a
platform to educate the population, identify promising ideas, and bring about sweeping change. The ultimate
goal? To create a zero-carbon world. It is vital that we recognize our dependence on nature, and take
affirmative action to bring about a cleaner, fairer, more sustainable future. We believe that change begins with
each of us – that’s why TEDxPESU has launched its own chapter of Countdown. We will showcase the work and
ideas of local thinkers and doers to spark a discussion, and help you understand how you can make a
difference.
The plan starts with cutting greenhouse gas emissions in half by 2030, by exploring sustainability in five
fundamental, interconnected areas: energy, transport, materials, food, and nature.
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
                 <span className={clsx(classes.whiteText), classes.boldText}>How rapidly can we switch to 100% clean power?</span><br/>
Yes, fossil fuels are readily available and portable, but they also release huge amounts of carbon dioxide on
consumption, which make global temperatures rise and cause severe health issues. It’s a terrible price to pay
for a couple of decades of easy energy. Eventually, we will run out.
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
								move people and things?</span><br/>
What is the future of transportation? What can we do that makes travelling long distances just as pollution-
free as walking or cycling? Driving electric vehicles minimizes fuel demand. Carpooling and using public transit
are also great ways to reduce carbon emissions. How can we make these resources accessible to all?
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
                <span className={clsx(classes.whiteText), classes.boldText}>How can we re-imagine 
								and re-make the stuff around us?</span><br/>
								What can we use in place of the ubiquitous plastics? How can we reduce the amount of waste we generate?
								What product choices are best, ecologically speaking?
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
                <span className={clsx(classes.whiteText), classes.boldText}>How can we spark a worldwide shift to healthier food systems?</span><br/>
How does eating meat affect the environment? Is it even necessary? Will switching to a plant-based diet help
us lead healthier, more eco-friendly lives? How can we reduce our carbon footprint by sourcing organic, local
food?
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
                <span className={clsx(classes.whiteText), classes.boldText}>How do we better protect and re-green the earth?</span><br/>
Nature takes care of itself. All we have to do is protect its tools. Can we make the oceans blue again, teeming
with the life that produces a significant portion of our oxygen? How do we turn our concrete jungles into areas
where verdant vegetation can flourish alongside us?
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
							messages={{
 								sending: "Sending...",
 								success: "Thank you for registering! Make sure you check your email for updates (sometimes we end up in spam, so check that too!)",
 								error: "An unexpected internal error has occurred.",
 								empty: "You must write an e-mail.",
 								duplicate: "Too many subscribe attempts for this email address",
 								button: "Register"
							}}
       			 />
			</Container>
			</div>
    </div>
  );
};


export default Landing;
