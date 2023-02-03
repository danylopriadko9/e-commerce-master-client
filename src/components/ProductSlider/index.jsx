import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import {
  ProductSliderContainer,
  ProductSliderHeader,
  ProductSliderH1,
  ProductSliderBarrier,
  ProductSliderWrap,
} from './ProductSliderElements.js';
import ProductItemSkeleton from '../Skeleton/ProductItemSkeleton.jsx';
import ProductCard from './ProductCard/index.jsx';

const ProductSlider = ({ items, status, title }) => {
  if (status === 'success' && items && !items.length) return <></>;

  if (items.length < 4) {
    return (
      <ProductSliderContainer>
        <ProductSliderHeader>
          <ProductSliderH1>
            <ProductSliderBarrier />
            {title}
          </ProductSliderH1>
        </ProductSliderHeader>
        <ProductSliderWrap flex={true}>
          {status === 'success'
            ? items.map((el) => (
                <ProductCard center={false} key={el.product_id} item={el} />
              ))
            : [1, 2, 3, 4].map((el) => <ProductItemSkeleton key={el} />)}
        </ProductSliderWrap>
      </ProductSliderContainer>
    );
  }
  return (
    <ProductSliderContainer>
      <ProductSliderHeader>
        <ProductSliderH1>
          <ProductSliderBarrier />
          {title}
        </ProductSliderH1>
      </ProductSliderHeader>
      <ProductSliderWrap flex={false}>
        <Slider {...settings}>
          {status === 'success'
            ? items.map((el) => (
                <ProductCard center={true} key={el.product_id} item={el} />
              ))
            : [1, 2, 3, 4].map((el) => <ProductItemSkeleton key={el} />)}
        </Slider>
      </ProductSliderWrap>
    </ProductSliderContainer>
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

export default ProductSlider;
