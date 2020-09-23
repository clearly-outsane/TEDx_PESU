import {makeStyles} from "@material-ui/core/styles";

const speakerStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxSizing:'border-box',
        marginLeft:'auto',
        marginRight:'auto',
        paddingLeft:"16px",
        paddingRight:"16px",
    },
    speakerHeader:{
        margin:"0 auto",
        paddingTop:50,
    },
    heading: {
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "bold",
        transition: "0.5s",
    },
    details: {
        fontFamily: "Raleway",
        fontStyle: "normal",
    },

}));

const sliderStyles = makeStyles((theme) => ({
    details: {
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    name: {
        fontWeight: "bold",
    },
}));

const sliderParams = {
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
    },
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        360: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
};


export {speakerStyles,sliderStyles,sliderParams}