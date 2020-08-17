import { makeStyles } from "@material-ui/core/styles";

const navbarStyles = makeStyles((theme) => ({
  logo: {
    height: "56%", //not sure what height to keep this - 100% is too large
    width: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
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
