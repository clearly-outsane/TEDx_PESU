import { makeStyles } from "@material-ui/core/styles";

//Donot remove as we need these import for some styles to take effect

const landingStyles = makeStyles((theme) => ({
  blackBackground: { backgroundColor: "black", height: "100vh" },
  container: {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    height: "100vh",
  },
  whiteText: { color: "white" },
  marginBottom1: { marginBottom: 8 },
  marginBottom18: { marginBottom: 18 },
  marginBottom36: { marginBottom: 36 },
  marginRight1: { marginRight: 8 },
  marginLeftRight32: { marginRight: 32, marginLeft: 32 },
  marginTop4: { marginTop: 36 },
  boldText: { fontWeight: "600" },
  gif: { height: "auto", width: "100% " },
}));

export { landingStyles };
