import React from 'react';
import { Container, responsiveFontSizes, Typography } from '@material-ui/core';
import { speakerStyles } from '../styles/speakers';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Sliders from './Sliders';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Raleway',
  },
});

theme = responsiveFontSizes(theme);

const Speakers = () => {
  const classes = speakerStyles();
  return (
    <div style={{ backgroundColor: 'black', marginTop: '-125px' }}>
      <Container className={classes.Container}>
        <div>
          <Typography
            className={classes.heading}
            align='left'
            variant='h2'
            style={{ fontWeight: 400, marginTop: 124, color: 'red' }}
          >
            Meet the event
          </Typography>
          <Typography
            className={classes.heading}
            align='left'
            variant='h2'
            style={{ marginBottom: 24, color: 'red' }}
          >
            speakers
          </Typography>
        </div>
        <Sliders />
      </Container>
    </div>
  );
};

export default Speakers;
