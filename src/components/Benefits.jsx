import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { aboutSection } from '../styles/Sections';
import { ReactComponent as AboutSvg } from '../assets/svg/Countdown.svg';
import theme from '../styles/theme';

const Benefits = () => {
  const classes = aboutSection();
  const [offset, setoffset] = useState();

  const handleScroll = () => setoffset(window.pageYOffset);
  window.addEventListener('scroll', handleScroll);
  return (
    <>
      <div
        className={clsx(classes.container, classes.blackBackground)}
        style={{ minWidth: '100%', backgroundColor: "black"   }}
        id='horizontal'
      >
        <Container maxWidth='lg'>
          <Grid
            container
            justify='flex-start'
            alignItems='center'
            style={{ marginTop: 40 }}
          >
            <Typography
              variant='h2'
              className={clsx(classes.whiteText)}
              gutterBottom
              style={{ color: "red", fontWeight: "bold" }}
            >
              What do you get out of it?
            </Typography>
          </Grid>
        </Container>
        <Container maxWidth='lg'>
          <Grid container justify='center' style={{ height: '100%', marginLeft: (offset * 0.015) - 54 + '%' }}>
            <Grid
              container
              item
              xs={12}
              sm={7}
              alignItems='flex-start'
              style={{ marginTop: 48 }}
            >
              <Grid item xs={12}>
                <Typography variant='h6' className={clsx(classes.whiteText)} style={{ color: "white" }}>
                  {/* <a
                    href='https://countdown.ted.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      color: theme.palette.secondary.main,
                      textDecoration: 'none',
                    }}
                  >
                    TED Circles
                  </a>{' '} */}
                  By engaging in constructive conversations, you gain a
                  different perspective on things, which helps expand your
                  horizons and grow your mind. The power of ideas and
                  conversation positively impacts you, the community, and the
                  world. Additionally, interacting with people who are experts
                  in their field is not an opportunity you would want to miss
                  out on!
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

        {/* <div className={classes.backgroundText}>
          <AboutSvg
            style={{
              width: '100%',
              transform: 'translate(0,4vw)',
              height: '14vw',
            }}
            fill='white'
          />
        </div> */}
      </div>
    </>
  );
};

export default Benefits;
