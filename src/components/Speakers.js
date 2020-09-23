import React from "react";
import {Container, responsiveFontSizes, Typography} from '@material-ui/core';
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
        <Container className={classes.root}>
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
        </Container>
    );
};

export default Speakers;
