import { makeStyles } from "@material-ui/core/styles";
import PrimaryButton from "./theme"
import theme from "./theme"

//Donot remove as we need these import for some styles to take effect

const AboutStyles = makeStyles((theme) => ({
  blackBackground: { backgroundColor: "black", overflowY: 'auto' },
  homeContainer: {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",

  },
	contentContainer: {
		padding: "0 4rem 4rem 4rem",
		display: "block",
		[theme.breakpoints.down("md")]: {
			padding: "0 2rem 4rem 2rem"
		}
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
		marginTop: 40,
 		fontWeight: 400,
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


}));

export { AboutStyles };
