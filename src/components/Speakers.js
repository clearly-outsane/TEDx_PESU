import React from "react";
import { responsiveFontSizes, Typography } from "@material-ui/core";
import {speakerStyles} from '../styles/speakers'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Sliders from "./Sliders";



let theme = createMuiTheme({
    typography: {
        fontFamily: "Raleway",
    },
});

theme = responsiveFontSizes(theme);

const Speakers = () => {
    const classes = speakerStyles();
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <div className={classes.speakerHeader}>
                <Typography className={classes.heading} align="left" variant="h3">
                    Meet the event
                </Typography>
                <Typography className={classes.heading} align="left" variant="h3">
                    speakers
                </Typography>
                </div>
                <Sliders />

            </ThemeProvider>
        </div>
    );
};

export default Speakers;
