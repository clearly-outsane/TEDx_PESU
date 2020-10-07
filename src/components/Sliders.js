import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectFade,
} from "swiper";
import { sliderParams } from "../styles/speakers";
import speakerImage1 from "../assets/images/speakerImages/speaker_1.JPG";
import speakerImage2 from "../assets/images/speakerImages/speaker2.jpg";
import speakerImage3 from "../assets/images/speakerImages/speaker3.jpg";
import speakerImage4 from "../assets/images/speakerImages/speaker-4.jpeg";
import speakerImage5 from "../assets/images/speakerImages/speaker5.jpg";
import speakerImage6 from "../assets/images/speakerImages/speaker6.jpg";
import speakerImage7 from "../assets/images/speakerImages/speaker7.JPG";
import speakerImage8 from "../assets/images/speakerImages/speaker8.jpeg";
import speakerImage9 from "../assets/images/speakerImages/speaker9.jpg";
import "swiper/swiper-bundle.css";
import "../styles/slider.css";
import { Grid, Typography } from "@material-ui/core";
import { sliderStyles } from "../styles/speakers";
import { makeStyles } from "@material-ui/core/styles";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, EffectFade]);
const Sliders = () => {
  const classes = sliderStyles();
  const backgroundImg = {
    backgroundSize: "cover",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: 420,
    backgroundPositionY: 0,
  };
  const noImage = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const slides = [
    <SwiperSlide key={1}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt="image1"
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage1})`,
        }}
      />
      <div style={{ background: "#eee" }} className={classes.details}>
        <Typography className={classes.name}>Sahar Mansoor</Typography>
        <Typography>Founder, Bare Necessities Zero-Waste Pioneer</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={2}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt="image1"
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage4})`,
        }}
      />
      <div
        style={{ background: "#eee", marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>RK Misra</Typography>
        <Typography>
          Co-Founder, YULU Bikes and Founder Director, Centre for SMART cities
        </Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={3}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt="image1"
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage5})`,
        }}
      />
      <div
        style={{ background: "#eee", marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Wilma Rodrigues</Typography>
        <Typography>Founder and CEO, Sahaas Zero Waste</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={4}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt="image1"
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage2})`,
        }}
      />
      <div style={{ background: "#eee" }} className={classes.details}>
        <Typography className={classes.name}>Sakshi Agarwal</Typography>
        <Typography>Co-Founder, Farm Theory</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={5}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt="image1"
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage3})`,
        }}
      />
      <div
        style={{ background: "#eee", marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Aarti Khosla</Typography>
        <Typography>Founder and Director, Climate Trends</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={6}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt="image1"
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage6})`,
        }}
      />
      <div
        style={{ background: "#eee", marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Gopi Sankarasubramani</Typography>
        <Typography>Farmer & Trustee, Navadarshanam</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={7}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt="image1"
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage7})`,
        }}
      />
      <div
        style={{ background: "#eee", marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Garvita Gulati</Typography>
        <Typography>Founder, Why Waste?</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={8}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt="image1"
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage8})`,
        }}
      />
      <div
        style={{ background: "#eee", marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Haaziq Kazi</Typography>
        <Typography>Creator and Innovator of ERVIS, Changemaker</Typography>
      </div>
    </SwiperSlide>,
    <SwiperSlide key={9}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Grid
        item
        alt="image1"
        style={{
          ...backgroundImg,
          backgroundImage: `url(${speakerImage9})`,
        }}
      />
      <div
        style={{ background: "#eee", marginBottom: 16 }}
        className={classes.details}
      >
        <Typography className={classes.name}>Smita Kulkarni</Typography>
        <Typography>Co-Founder, Stonesoup</Typography>
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
          className="swiper-pagination"
          style={{ paddingTop: 24, position: "relative" }}
        />
        {/*<div className="swiper-button-prev" />*/}
        {/*<div className="swiper-button-next" />*/}
      </Swiper>
    </Grid>
  );
};

export default Sliders;
