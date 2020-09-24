import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
    Navigation,
    Pagination,
    EffectCoverflow,
    EffectFade,
} from 'swiper'
import { sliderParams } from '../styles/speakers'
import speakerImage1 from '../assets/images/speakerImages/speaker1.jpg'
import speakerImage2 from '../assets/images/speakerImages/speaker2.jpg'
import speakerImage3 from '../assets/images/speakerImages/speaker3.jpg'
import 'swiper/swiper-bundle.css'
import '../styles/slider.css'
import { Grid, Typography } from '@material-ui/core'
import { sliderStyles } from '../styles/speakers'

SwiperCore.use([Navigation, Pagination, EffectCoverflow, EffectFade])
const Sliders = () => {
    const classes = sliderStyles()
    const backgroundImg = {
        backgroundSize: 'cover',

        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 420,
        backgroundPositionY: 0,
    }
    const slides = [
        <SwiperSlide key={1}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <Grid
                item
                src={speakerImage1}
                alt='image1'
                style={{
                    ...backgroundImg,
                    backgroundImage: `url(${speakerImage1})`,
                }}
            ></Grid>
            <div style={{ background: '#eee' }} className={classes.details}>
                <Typography className={classes.name}>Sahar Mansoor</Typography>
                <Typography>Founder, Bare Necessities Zero-Waste Pioneer</Typography>
            </div>
        </SwiperSlide>,
        <SwiperSlide key={1}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <Grid
                item
                src={speakerImage1}
                alt='image1'
                style={{
                    ...backgroundImg,
                    backgroundImage: `url(${speakerImage2})`,
                }}
            ></Grid>
            <div style={{ background: '#eee' }} className={classes.details}>
                <Typography className={classes.name}>Sakshi Agarwal</Typography>
                <Typography>Co-Founder Farm Theory</Typography>
            </div>
        </SwiperSlide>,
        <SwiperSlide key={1}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <Grid
                item
                src={speakerImage3}
                alt='image1'
                style={{
                    ...backgroundImg,
                    backgroundImage: `url(${speakerImage3})`,
                }}
            ></Grid>
            <div
                style={{ background: '#eee', marginBottom: 16 }}
                className={classes.details}
            >
                <Typography className={classes.name}>Aarti Khosla</Typography>
                <Typography>Founder and Director, Climate Trends</Typography>
            </div>
        </SwiperSlide>,
    ]

    return (
        <Grid>
            <Swiper {...sliderParams}>
                {slides}
                <div
                    className='swiper-pagination'
                    style={{ paddingTop: 24, position: 'relative' }}
                />
            </Swiper>
        </Grid>
    )
}

export default Sliders
