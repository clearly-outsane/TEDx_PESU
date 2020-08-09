import { makeStyles } from "@material-ui/core/styles";

const aboutSection = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    height: "100vh",
  },
  backgroundText: {
    zIndex: 0,
    display: "block",
    overflowY: "hidden",
    overflowX: "hidden",

    margin: 0,
  },
}));

export { aboutSection };
