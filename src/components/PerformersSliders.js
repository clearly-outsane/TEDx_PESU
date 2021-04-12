import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectFade,
} from "swiper";
import { performerParams } from "../styles/speakers";
import performer1 from "../assets/images/performersImages/sourcandy.jpg";
import performer2 from "../assets/images/performersImages/bbb.png";
import performer3 from "../assets/images/performersImages/par.jpg";
import performer4 from "../assets/images/performersImages/prajwal.jpg";
import "swiper/swiper-bundle.css";
import "../styles/slider.css";
import { Grid, Typography } from "@material-ui/core";
import { sliderStyles } from "../styles/speakers";
import { makeStyles } from "@material-ui/core/styles";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, EffectFade]);
const PerformersSliders = () => {
  const classes = sliderStyles();
  const backgroundImg = {
    backgroundSize: "cover",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
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
          backgroundImage: `url(${performer1})`,
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
          backgroundImage: `url(${performer2})`,
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
          backgroundImage: `url(${performer3})`,
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
          backgroundImage: `url(${performer4})`,
        }}
      />
      <div style={{ background: "#eee" }} className={classes.details}>
        <Typography className={classes.name}>Sakshi Agarwal</Typography>
        <Typography>Co-Founder, Farm Theory</Typography>
      </div>
    </SwiperSlide>,
  ];
  return (
    <Grid>
      <Swiper {...performerParams}>
        {slides}
        <div
          className="swiper-pagination"
          style={{ paddingTop: 24, position: "relative" }}
        />
      </Swiper>
    </Grid>
  );
};

export default PerformersSliders;
