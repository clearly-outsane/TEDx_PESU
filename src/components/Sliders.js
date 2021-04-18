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

// import speakerImage2 from '../assets/images/speakerImages/speaker2.jpg';
// import speakerImage3 from '../assets/images/speakerImages/speaker3.jpg';
// import speakerImage4 from '../assets/images/speakerImages/speaker-4.jpeg';
// import speakerImage5 from '../assets/images/speakerImages/speaker5.jpg';
// import speakerImage6 from '../assets/images/speakerImages/speaker6.jpg';
// import speakerImage7 from '../assets/images/speakerImages/speaker7.JPG';
// import speakerImage8 from '../assets/images/speakerImages/speaker8.jpeg';
// import speakerImage9 from '../assets/images/speakerImages/speaker9.jpg';
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
          backgroundImage: `url(${speakerImage11})`,
        }}
      />
      <div style={{ background: '#eee' }} className={classes.details}>
        <Typography className={classes.name}>Marianne Manuel</Typography>
        <Typography>Assistant Director, Dakshin Foundation</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={2}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage12})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Pooja Mitra</Typography>
        <Typography>Founder and Director, TerraConscious</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={3}>
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
        style={{ background: '#eee', marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Dr.NH RabindraNath </Typography>
        <Typography>
          Professor(retired), centre for sutainable Technologies, IISc Banglore
        </Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={4}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage22})`,
        }}
      />
      <div style={{ background: '#eee' }} className={classes.details}>
        <Typography className={classes.name}>Reena Singh</Typography>
        <Typography>Founder and Designer, eka core</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={5}>
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
    <SwiperSlide key={6}>
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
        style={{ background: '#eee', marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Sheema Jain</Typography>
        <Typography>
          Works with the Green Business Certification Institute (GBCI)
        </Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={7}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage41})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Karthikeyan S</Typography>
        <Typography>Chief naturalist at jungle lodges resorts</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={8}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage42})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Prof. Nandini Rajamani</Typography>
        <Typography>Assistant Professor at IISER Tirupati</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={9}>
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
        style={{ background: '#eee', marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Apurba Mitra</Typography>
        <Typography>Head, Climate Program, WRI India</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={10}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt='image1'
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage52})`,
        }}
      />
      <div
        style={{ background: '#eee', marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Pranab Mukhopadhyay</Typography>
        <Typography>Professor of Economics, Goa University</Typography>
      </div>
    </SwiperSlide>,
    // <SwiperSlide>
    //   {/*  <div*/}
    //   {/*    style={{*/}
    //   {/*      backgroundColor: "#eee",*/}
    //   {/*      color: "#222",*/}
    //   {/*      width: "100%",*/}
    //   {/*      height: "420px",*/}
    //   {/*    }}*/}
    //   {/*  >*/}
    //   {/*  <Typography*/}
    //   {/*    style={{*/}
    //   {/*      paddingTop: "50%",*/}
    //   {/*      margin: "auto",*/}
    //   {/*      fontSize: "24px",*/}
    //   {/*      fontWeight: "Bold",*/}
    //   {/*      textAlign: "center",*/}
    //   {/*      paddingLeft: "10px",*/}
    //   {/*      paddingRight: "10px",*/}
    //   {/*    }}*/}
    //   {/*  >*/}
    //   {/*    More Speakers to be announced soon...*/}
    //   {/*  </Typography>*/}
    //   {/*</div>*/}
    // </SwiperSlide>,
  ];

  return (
    <Grid>
      <Swiper {...sliderParams}>
        {slides}
        <div
          className='swiper-pagination'
          style={{ paddingTop: 24, position: 'relative' }}
        />
        {/*<div className="swiper-button-prev" />*/}
        {/*<div className="swiper-button-next" />*/}
      </Swiper>
    </Grid>
  );
};

export default Sliders;
