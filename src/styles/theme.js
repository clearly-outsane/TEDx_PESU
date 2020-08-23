import {
  createMuiTheme,
  makeStyles,
  withStyles,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// import HelveticaWoff2 from "../assets/fonts/Helvetica.woff2";

// const helvetica = {
//   fontFamily: "Helvetica",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 400,
//   src: `
//     local('Helvetica'),
//     local('Helvetica-Regular'),
//     url(${HelveticaWoff2}) format('woff2')
//   `,
//   unicodeRange:
//     "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
// };

let theme = createMuiTheme({
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
    h4: {
      fontSize: "2.5rem",
      fontWeight: 400,
    },
    h6: { fontWeight: 400 },
    h5: { fontSize: "2rem" },
  },
  overrides: {
    // MuiCssBaseline: {
    //   "@global": {
    //     "@font-face": [helvetica],
    //   },
    // },
  },
});
theme = responsiveFontSizes(theme);

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

export const PrimaryTextField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: "black",
      fontWeight: 700,
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        boxShadow: "0 0  18px rgba(0, 0, 0,0.1)",
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    borderColor: "black",
  },
}))(TextField);

export const PrimaryButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      boxShadow: "0 0  24px rgba(230, 43, 30,0.48)",
      backgroundColor: theme.palette.primary.main,
    },
    width: 124,
    height: "100%",
  },
}))(Button);

export const LargePrimaryButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      boxShadow: "0 0  24px rgba(230, 43, 30,0.48)",
      backgroundColor: theme.palette.primary.main,
    },
    width: 240,
    height: 64,
    fontSize: "1rem",
  },
}))(Button);

export default theme;
