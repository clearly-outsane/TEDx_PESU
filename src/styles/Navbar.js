import { makeStyles } from "@material-ui/core/styles";

const navbarStyles = makeStyles((theme) => ({
  logo: {
    height: "56%", //not sure what height to keep this - 100% is too large
    width: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
}));

export { navbarStyles };
