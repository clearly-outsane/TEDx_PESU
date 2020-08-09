import { makeStyles } from "@material-ui/core/styles";
import PrimaryButton from "./theme"
import theme from "./theme"

//Donot remove as we need these import for some styles to take effect

const landingStyles = makeStyles((theme) => ({
  blackBackground: { backgroundColor: "black", overflowY: 'auto' },
  homeContainer: {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    height: "100vh",
  },
	homeContent: {
		padding: "0 3rem",
		[theme.breakpoints.down("md")]: {
			padding: "0 1rem",
			height: "75vh" // don't know what's going on here
		}
	},
	registerContainer: {
    height: "100vh",
		[theme.breakpoints.down("md")]: {
			height: "50vh",
		}
  },

	register: {
		"& input": {
			// input form styles		
		},
		"& button": {
				// fontFamily: 
				color: "white",
  		  backgroundColor: theme.palette.primary.main,
    		width: 124,
    		"&:hover": {
     			boxShadow: "0 0  24px rgba(230, 43, 30,0.48)",
      		backgroundColor: theme.palette.primary.main,
				},
    },
	},
	smallText: {
    fontWeight: 200,
    marginBottom: 18,
    fontSize: "1.25rem",
		[theme.breakpoints.down('md')]: {
			fontSize: "1rem"
		}
	},
	bigText: {
 		fontWeight: 400,
 		marginBottom: 36,
 		fontSize: "2.5rem",
		[theme.breakpoints.down('md')]: {
			fontSize: "1.5rem"
		}
	},
  whiteText: { color: "white" },
  marginBottom1: { marginBottom: 8 },
  marginBottom18: { marginBottom: 18 },
  marginBottom36: { marginBottom: 36 },
  marginRight1: { marginRight: 8 },
  marginLeftRight32: { marginRight: 32, marginLeft: 32 },
  marginTop4: { marginTop: 36 },
  boldText: { fontWeight: "600" },
  gif: { height: "100%", width: "100%", padding: "10%" },

	content: {
		margin: "25vh 3rem",
		[theme.breakpoints.down("md")]: {
			margin: "12.5vh 2rem"
		}
	},

	contentImageContainer: {
		width: "100%",
		height: "100%",
		background: "none",
	},

	contentImageDefault: {
		position: "absolute",
		top: "125%",
  	clip: "rect(50px, 400px, 400px, 50px)", // svg something? 
		// transition: "all 0.3s",
		[theme.breakpoints.down("md")]: {
			// mobile default position
		}
	},
	contentImageBottom: {
		position: "absolute",
		top: "500%",
  	clip: "rect(50px, 400px, 400px, 50px)", // svg something? 
		// transition: "all 0.3s",
		[theme.breakpoints.down("md")]: {
			// mobile default position
		}
	},

	contentImageSticky: {
		position: "fixed",
		top: "20%",
		// transition: "all 0.3s",
  	clip: "rect(50px, 400px, 400px, 50px)", // svg something? 
		[theme.breakpoints.down("md")]: {
			// mobile sticky position
		}
	},
}));

export { landingStyles };
