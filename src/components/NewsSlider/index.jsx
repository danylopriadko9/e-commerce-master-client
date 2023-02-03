import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import {
  NewsSliderContainer,
  NewsSliderHeader,
  NewsSliderH1,
  NewsSliderBarrier,
  NewsSliderWrap,
} from './NewsSliderElements';
import NewItem from './NewItem';

const NewsSlider = ({ title, items }) => {
  return (
    <NewsSliderContainer>
      <NewsSliderHeader>
        <NewsSliderH1>
          <NewsSliderBarrier />
          {title}
        </NewsSliderH1>
      </NewsSliderHeader>
      <NewsSliderWrap>
        <Slider {...settings}>
          {items &&
            items.length > 0 &&
            items.map((el) => <NewItem key={el} item={el} />)}
        </Slider>
      </NewsSliderWrap>
    </NewsSliderContainer>
  );
};

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default NewsSlider;
