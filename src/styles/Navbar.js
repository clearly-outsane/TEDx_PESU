import { makeStyles } from "@material-ui/core/styles";

const navbarStyles = makeStyles((theme) => ({
  logo: {
		/* DID JUGAAD WILL FIX PROPERLY LATER */
		objectFit: "contain",
    // width: "100%",
    height: "8vh", //not sure what height to keep this - 100% is too large
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
		padding: "1vh",
  },
  overlay: {
    height: "100vh",
    // width: "100vw",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    overflowY: "hidden",
    transition: "0.5s",
    backgroundColor: "black",
  },
  container: {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    height: "100vh",
  },
	link: {
		default: {
			color: "white",
			textDecoration: "none",
			"&:visited": {
				color: "white",
				textDecoration: "none"
			}
		},
		active: {
			color: theme.palette.primary.main,
			textDecoration: "none"
		}
	},
  whiteText: { color: "white" },
  closeOverlay: {},
}));

export { navbarStyles };
