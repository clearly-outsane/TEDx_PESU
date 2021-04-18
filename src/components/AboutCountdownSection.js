import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import ScrollAnimation from 'react-animate-on-scroll';
import { aboutSection } from '../styles/Sections';
import { ReactComponent as AboutSvg } from '../assets/svg/Countdown.svg';
import theme from '../styles/theme';
import AboutCountdownImage from '../assets/svg/circle1.jpeg';
import { Translate } from '@material-ui/icons';

const AboutSection = () => {
  const classes = aboutSection();
  return (
    <>
      <div
        className={classes.container}
        style={{ minWidth: '100%' }}
        id='horizontal'
        style={{ background: '#393939', minHeight: '100vh' }}
      >
        <Container maxWidth='lg'>
          <Grid
            container
            justify='flex-start'
            alignItems='center'
            style={{ marginTop: 124 }}
          >
            <Typography
              variant='h2'
              className={clsx(classes.whiteText)}
              gutterBottom
            >
              What is TED circles?
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
                <ScrollAnimation
                  animateIn='bounceInRight'
                  animateOut='bounceOutLeft'
                  // duration='2s'
                  // scrollableParentSelector='#scrolly-div'
                >
                  <Typography variant='h6' className={clsx(classes.whiteText)}>
                    <a
                      href='https://countdown.ted.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        color: theme.palette.secondary.main,
                        textDecoration: 'none',
                      }}
                    >
                      TED Circles
                    </a>{' '}
                    TED Circles is a community of small groups that engage in
                    fruitful conversations encircling big ideas. It takes place
                    virtually and helps communities stay connected, which is of
                    the essence during the pandemic.
                  </Typography>
                </ScrollAnimation>
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

        <div className={classes.backgroundText}>
          {/* <AboutCountdownImage
            style={{
              width: '100%',
              transform: 'translate(0,4vw)',
              height: '14vw',
            }}
            fill='white'
          /> */}
          <img
            src={AboutCountdownImage}
            style={{
              width: '100%',
              height: '14vw',
              transform: 'translate(0,4vw)',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
