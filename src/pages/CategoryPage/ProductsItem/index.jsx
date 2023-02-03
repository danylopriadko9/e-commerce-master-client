import React from 'react';
import { useTranslation } from 'react-i18next';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../../../redux/Slicess/cartSlice2.js';
import { addProductToCompare } from '../../../redux/Slicess/compareSlice.js';
import { addProductToWatched } from '../../../redux/Slicess/homeSlice.js';

import {
  ProductsItemProductWrap,
  ProductsItemImage,
  ProductsItemCategoryName,
  ProductsItemPrice,
  ProductsItemDiscount,
  ProductsItemImageContainer,
  ProductsItemDiscountPercent,
  ProductsItemModelName,
  ProductsItemOldPrice,
  ProductsItemAddToCartBtn,
  ProductsItemCompareBtn,
  ProductsItemBtnsContainer,
} from './ProductsItemElements.js';

const ProductsItem = ({ item }) => {
  const navigate = useNavigate();
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

  const onCardClick = () => {
    navigate(`/tovar_${url}`);
    dispatch(addProductToWatched(product_id));
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <ProductsItemProductWrap onClick={onCardClick}>
        <ProductsItemImageContainer>
          <ProductsItemImage
            src={`http://localhost:8000/static/product/${product_id}/${filename}`}
          />
        </ProductsItemImageContainer>
        <ProductsItemCategoryName>{category_name}</ProductsItemCategoryName>
        <ProductsItemModelName>{product_name}</ProductsItemModelName>
        <ProductsItemPrice>{`${
          discount_percent
            ? Math.ceil(base_price - (base_price / 100) * discount_percent)
            : Math.ceil(base_price)
        } ${iso}`}</ProductsItemPrice>
        {discount_percent && (
          <ProductsItemDiscount>
            <ProductsItemOldPrice>
              {`${Math.ceil(base_price)} ${iso}`}
            </ProductsItemOldPrice>
            <ProductsItemDiscountPercent>
              -{`${Math.ceil(discount_percent)}%`}
            </ProductsItemDiscountPercent>
          </ProductsItemDiscount>
        )}

        <ProductsItemBtnsContainer>
          <ProductsItemAddToCartBtn
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
                })
              );
            }}
          >
            <FiShoppingCart />
            {t('productPage.addItemToCart')}
          </ProductsItemAddToCartBtn>
          <ProductsItemCompareBtn
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                addProductToCompare({
                  product_id,
                  category_id,
                })
              );
            }}
          >
            <AiOutlinePlusCircle />
            {t('productPage.addItemToCompare')}
          </ProductsItemCompareBtn>
        </ProductsItemBtnsContainer>
      </ProductsItemProductWrap>
    </>
  );
};

export default ProductsItem;
