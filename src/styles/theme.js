import {
  createMuiTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E62B1E",
    },
    secondary: {
      main: "#f1ff39",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      //   '"Segoe UI"',
      "Raleway",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export const ContrastTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#f1ff39",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        outline: "none",
      },
    },
  },
})(TextField);

export const PrimaryButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      boxShadow: "0 0  24px rgba(230, 43, 30,0.48)",
      backgroundColor: theme.palette.primary.main,
    },
    width: 124,
  },
}))(Button);

export default theme;
