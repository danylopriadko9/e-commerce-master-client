import React from 'react';
import {
  Slide,
  SlideBtn,
  SlideImage,
  SliderContainer,
  SliderOverflow,
  SlideText,
} from './SliderElements';
import { slides } from './data';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

const SliderComponent = () => {
  return (
    <>
      <SliderContainer>
        <Slider {...settings}>
          {slides.map((el) => (
            <Slide key={el.id}>
              <SliderOverflow>
                <SlideText>{el.mainText}</SlideText>
                <SlideBtn>{el.btnText}</SlideBtn>
              </SliderOverflow>
              <SlideImage src={el.img} />
            </Slide>
          ))}
        </Slider>
      </SliderContainer>
    </>
  );
};

export default SliderComponent;
