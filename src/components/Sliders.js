import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectFade,
} from 'swiper';
import { sliderParams } from '../styles/speakers';
import speakerImage11 from '../assets/images/speakerImages/team1/speaker1.jpg';
import speakerImage12 from '../assets/images/speakerImages/team1/speaker2.jpg';
import speakerImage21 from '../assets/images/speakerImages/team2/speaker1.jpeg';
import speakerImage22 from '../assets/images/speakerImages/team2/speaker2.jpg';
import speakerImage31 from '../assets/images/speakerImages/team3/speaker1.jpg';
import speakerImage32 from '../assets/images/speakerImages/team3/speaker2.PNG';
import speakerImage41 from '../assets/images/speakerImages/team4/speaker1.jpg';
import speakerImage42 from '../assets/images/speakerImages/team4/speaker2.jpg';
import speakerImage51 from '../assets/images/speakerImages/team5/speaker1.jpg';
import speakerImage52 from '../assets/images/speakerImages/team5/speaker2.jpg';

import 'swiper/swiper-bundle.css';
import '../styles/slider.css';
import { Grid, Typography } from '@material-ui/core';
import { sliderStyles } from '../styles/speakers';
import { makeStyles } from '@material-ui/core/styles';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, EffectFade]);
const Sliders = () => {
  const classes = sliderStyles();
  const backgroundImg = {
    backgroundSize: 'cover',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 440,
    backgroundPositionY: 0,
  };
  const noImage = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

  const slides = [
    <SwiperSlide key={1}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage51})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16, paddingBottom: '56px' }}
        className={classes.details}
      >
        <Typography className={classes.name}>Apurba Mitra</Typography>
        <Typography>Head, Climate Program, WRI India</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={2}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundPositionX: '-60px',
          // backgroundPositionY: '40px',
          backgroundImage: `url(${speakerImage41})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16, paddingBottom: '56px' }}
        className={classes.details}
      >
        <Typography className={classes.name}>Karthik S</Typography>
        <Typography>Chief naturalist at Jungle Lodges Resorts</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={3}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundPositionX: '-60px',
          backgroundImage: `url(${speakerImage11})`,
        }}
      />
      <div
        style={{ background: '#eee', paddingBottom: '56px' }}
        className={classes.details}
      >
        <Typography className={classes.name}>Marianne Manuel</Typography>
        <Typography>Assistant Director at Dakshin Foundation</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={4}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundPositionX: '-60px',
          backgroundImage: `url(${speakerImage42})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16, paddingBottom: '56px' }}
        className={classes.details}
      >
        <Typography className={classes.name}>Prof. Nandini Rajamani</Typography>
        <Typography>Assistant Professor at IISER Tirupati</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={5}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage21})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16, paddingBottom: '32px' }}
        className={classes.details}
      >
        <Typography className={classes.name}>Dr.NH Ravindranath </Typography>
        <Typography>
          Professor(retd.) at centre for Sutainable Technologies, IISc, Banglore
        </Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={6}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          backgroundSize: 'cover',
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: 440,
          backgroundPositionY: '-80px',
          backgroundImage: `url(${speakerImage52})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16, paddingBottom: '56px' }}
        className={classes.details}
      >
        <Typography className={classes.name}>Pranab Mukhopadhyay</Typography>
        <Typography>Professor of Economics, Goa University</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={7}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundPositionX: '-60px',
          backgroundImage: `url(${speakerImage12})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16, paddingBottom: '56px' }}
        className={classes.details}
      >
        <Typography className={classes.name}>Puja Mitra</Typography>
        <Typography>Founder - Director of TerraConscious</Typography>
      </div>
    </SwiperSlide>,

    <SwiperSlide key={8}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage22})`,
        }}
      />
      <div
        style={{ background: '#eee', paddingBottom: '56px' }}
        className={classes.details}
      >
        <Typography className={classes.name}>Rina Singh</Typography>
        <Typography>Founder and Designer, Eka, Eka Core</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={9}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage31})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Shubhashis Dey</Typography>
        <Typography>
          Director - Climate Policy and Clean Energy Finance Program in Shakti
          Sustainable Energy Foundation
        </Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={10}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage32})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16, paddingBottom: '32px' }}
        className={classes.details}
      >
        <Typography className={classes.name}>Yashima Jain</Typography>
        <Typography>
          Works with the Green Business Certification Institute (GBCI)
        </Typography>
      </div>
    </SwiperSlide>,
  ];

  return (
    <Grid>
      <Swiper {...sliderParams}>
        {slides}
        <div
          className='swiper-pagination'
          style={{ paddingTop: 24, position: 'relative' }}
        />
        {/* <div className='swiper-button-prev' />
        <div className='swiper-button-next' /> */}
      </Swiper>
    </Grid>
  );
};

export default Sliders;
