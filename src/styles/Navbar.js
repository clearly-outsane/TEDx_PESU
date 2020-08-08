import { makeStyles } from "@material-ui/core/styles";

const navbarStyles = makeStyles((theme) => ({
  navBar: {
		padding: "2rem",
		height: "84",
		[theme.breakpoints.down('md')]: {
			padding: "1rem",
// sticky header for mobile gives issues!
		}
	},
	
	logo: {
    height: "80%", //not sure what height to keep this - 100% is too large
    width: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
}));

export { navbarStyles };
