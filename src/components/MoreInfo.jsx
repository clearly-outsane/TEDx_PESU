import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { aboutSection, aboutPageStyles } from '../styles/Sections';
import { ReactComponent as AboutSvg } from '../assets/svg/Countdown.svg';
import theme from '../styles/theme';

const MoreInfo = () => {
  const classes = aboutPageStyles();
  return (
    <>
      <div
        className={clsx(classes.container, classes.whiteBackground)}
        style={{ minWidth: '100%' }}
        id='horizontal'
      >
        <Container maxWidth='lg' style={{ zIndex: '1' }}>
          <Grid
            container
            justify='flex-start'
            alignItems='center'
            style={{ marginTop: 124 }}
          >
            <Typography
              variant='h2'
              // className={clsx(classes.blac)}
              gutterBottom
            >
              How does it work?
            </Typography>
          </Grid>
        </Container>
        <Container maxWidth='lg'>
          <Grid container justify='center' style={{ height: '100%' }}>
            <Grid
              container
              item
              xs={12}
              sm={7}
              alignItems='flex-start'
              style={{ marginTop: 48 }}
            >
              <Grid item xs={12}>
                <Typography variant='h6'>
                  Every month, a group of people (could be friends, neighbors,
                  colleagues) get together and watch TED Talks which are
                  specific to the monthly theme. They then discuss their
                  takeaways and exchange their ideas and views on it. The
                  members of our club will host the Circles, which will be
                  joined by experts who are well versed with the topic! Theme of
                  the month:
                  <a
                    // href='https://countdown.ted.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      color: theme.palette.secondary.main,
                      textDecoration: 'none',
                      paddingLeft: '10px',
                    }}
                  >
                    Appreciating Earth
                  </a>{' '}
                </Typography>
                <br />
                {/* <Typography variant='h6' className={clsx(classes.whiteText)}>
                  We believe that change begins with each of us – that’s why
                  TEDxPESU has launched its own chapter of Countdown. We will
                  showcase the work and ideas of local thinkers and doers to
                  spark a discussion, and help you understand how you can make a
                  difference.
                </Typography> */}
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <div className={classes.backgroundTextMore}>
          <AboutSvg
            style={{
              width: '100%',
              transform: 'translate(0,4vw)',
              height: '14vw',
              opacity: '0.48',
              color: '#222',
              // background: '#222',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
