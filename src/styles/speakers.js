import { makeStyles } from "@material-ui/core/styles";

const speakerStyles = makeStyles((theme) => ({
  Container: {
    boxSizing: "border-box",
    minHeight: "100vh",
  },
  speakerHeader: {
    paddingTop: 50,
  },
  heading: {
    fontStyle: "normal",
    fontWeight: "bold",
    transition: "0.5s",
  },
}));

const sliderStyles = makeStyles((theme) => ({
  details: {
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  name: {
    fontWeight: "bold",
  },
}));

const sliderParams = {
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
  },
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  stretch: 0,
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

export { speakerStyles, sliderStyles, sliderParams };
