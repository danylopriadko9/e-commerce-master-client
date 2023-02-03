import React from 'react';

import { MdCompare } from 'react-icons/md';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';

import {
  ProductSliderProductWrap,
  ProductSliderImage,
  ProductSliderCategoryName,
  ProductSliderPrice,
  ProductSliderDiscount,
  ProductSliderImageContainer,
  ProductSliderDiscountPercent,
  ProductSliderModelName,
  ProductSliderOldPrice,
  ProductSliderProductOverflow,
  ProductSlideIcon,
} from '../ProductSliderElements.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductToWatched } from '../../../redux/Slicess/homeSlice';
import { addItemToCart } from '../../../redux/Slicess/cartSlice2.js';
import { addProductToCompare } from '../../../redux/Slicess/compareSlice.js';

const ProductCard = ({ item, center }) => {
  const dispatch = useDispatch();
  const {
    product_name,
    category_name,
    url,
    base_price,
    discount_percent,
    filename,
    product_id,
    iso,
    category_id,
  } = item;
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/tovar_${url}`);
    dispatch(addProductToWatched(product_id));
  };
  return (
    <>
      <ProductSliderProductWrap center={center}>
        <ProductSliderImageContainer>
          <ProductSliderImage
            src={`http://localhost:8000/static/product/${product_id}/${filename}`}
          />
        </ProductSliderImageContainer>
        <ProductSliderCategoryName>{category_name}</ProductSliderCategoryName>
        <ProductSliderModelName>{product_name}</ProductSliderModelName>
        <ProductSliderPrice>{`${
          discount_percent
            ? Math.ceil(base_price - (base_price / 100) * discount_percent)
            : Math.ceil(base_price)
        } ${iso}`}</ProductSliderPrice>
        {discount_percent && (
          <ProductSliderDiscount>
            <ProductSliderOldPrice>{`${Math.ceil(
              base_price
            )} ${iso}`}</ProductSliderOldPrice>
            <ProductSliderDiscountPercent>
              -{`${Math.ceil(discount_percent)}%`}
            </ProductSliderDiscountPercent>
          </ProductSliderDiscount>
        )}
        <ProductSliderProductOverflow onClick={onCardClick}>
          <ProductSlideIcon>
            <BsCheckLg />
          </ProductSlideIcon>
          <ProductSlideIcon
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                addItemToCart({
                  product_name,
                  category_name,
                  url,
                  base_price,
                  discount_percent,
                  filename,
                  product_id,
                  iso,
                  category_id,
                })
              );
            }}
          >
            <RiShoppingCart2Fill />
          </ProductSlideIcon>
          <ProductSlideIcon
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addProductToCompare({ product_id, category_id }));
            }}
          >
            <MdCompare />
          </ProductSlideIcon>
        </ProductSliderProductOverflow>
      </ProductSliderProductWrap>
    </>
  );
};

export default ProductCard;
