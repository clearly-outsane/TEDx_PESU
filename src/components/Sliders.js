import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    EffectCoverflow,
    EffectFade,
} from "swiper";
import {sliderParams} from '../styles/speakers';
import speakerImage1 from "../assets/images/speakerImages/speaker1.jpg";
import speakerImage2 from "../assets/images/speakerImages/speaker2.jpg"
import speakerImage3 from "../assets/images/speakerImages/speaker3.jpg";
import "swiper/swiper-bundle.css";
import '../styles/slider.css'
import { Typography } from "@material-ui/core";
import {sliderStyles} from '../styles/speakers';


SwiperCore.use([Navigation, Pagination, EffectCoverflow, EffectFade]);
const Sliders = () => {
    const classes = sliderStyles();
    const slides = [
        <SwiperSlide key={1}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={speakerImage1} alt="image1" />
            <div style={{ background: "#eee" }} className={classes.details}>
                <Typography className={classes.name}>Speakers name</Typography>
                <Typography>Environmantalists</Typography>
            </div>
        </SwiperSlide>,
        <SwiperSlide key={1}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={speakerImage2} alt="image1" />
            <div style={{ background: "#eee" }} className={classes.details}>
                <Typography className={classes.name}>Speakers name</Typography>
                <Typography>Environmantalists</Typography>
            </div>
        </SwiperSlide>,
        <SwiperSlide key={1}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={speakerImage3} alt="image1" />
            <div style={{ background: "#eee" }} className={classes.details}>
                <Typography className={classes.name}>Speakers name</Typography>
                <Typography>Environmantalists</Typography>
            </div>
        </SwiperSlide>
    ];

    return (
        <Swiper {...sliderParams}>
            {slides}
            <div className="swiper-pagination" />
        </Swiper>
    );
};

export default Sliders;
