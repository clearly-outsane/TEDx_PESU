import React from "react";
import Grid from "@material-ui/core/Grid";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialMedia = () => {
	return (
		<Grid 
			container item
			// spacing={12} // what is spacing how to increase
			justify="space-around"
			alignItems="center">
			<Grid xs={4}><a href="https://www.instagram.com/tedxpesu/" target="_blank"><InstagramIcon color="primary" style={{margin: "1vw"}}/></a></Grid>
			<Grid xs={4}><a href="https://www.facebook.com/tedxpesu" target="_blank"><FacebookIcon color="primary" style={{margin: "1vw"}}/></a></Grid>
			<Grid xs={4}><a href="https://www.linkedin.com/company/tedxpesu/" target="_blank"><LinkedInIcon color="primary" style={{margin: "1vw"}}/></a></Grid>
		</Grid>
	);

}

export default SocialMedia