import React from 'react';
import { CompareItemCloseContainer } from '../ComparePageElements';
import {
  CompareItemCategoryName,
  CompareItemContainer,
  CompareItemDiscount,
  CompareItemDiscountPercent,
  CompareItemImage,
  CompareItemImageContainer,
  CompareItemModelName,
  CompareItemOldPrice,
  CompareItemPrice,
  CompareItemProductWrap,
  CompareItemParams,
  CompareItemParam,
} from './CompareItemElements';

import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { deleteCompareItem } from '../../../redux/Slicess/compareSlice';
import { useTranslation } from 'react-i18next';

const CompareItem = ({
  item,
  productCharacteristics,
  categoryCharacteristics,
}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  return (
    <CompareItemContainer>
      <CompareItemProductWrap>
        <CompareItemCloseContainer
          onClick={() =>
            dispatch(
              deleteCompareItem({
                product_id: item.product_id,
                category_id: item.category_id,
              })
            )
          }
        >
          <GrClose />
        </CompareItemCloseContainer>
        <CompareItemImageContainer>
          <CompareItemImage
            src={`http://localhost:8000/static/product/${item.product_id}/${item.filename}`}
          />
        </CompareItemImageContainer>
        <CompareItemCategoryName>{item.category_name}</CompareItemCategoryName>
        <CompareItemModelName>{item.product_name}</CompareItemModelName>
        <CompareItemPrice>{`${
          item.discount_percent
            ? Math.ceil(
                item.base_price -
                  (item.base_price / 100) * item.discount_percent
              )
            : Math.ceil(item.base_price)
        } ${item.iso}`}</CompareItemPrice>
        {item.discount_percent && (
          <CompareItemDiscount>
            <CompareItemOldPrice>{`${Math.ceil(item.base_price)} ${
              item.iso
            }`}</CompareItemOldPrice>
            <CompareItemDiscountPercent>
              -{`${Math.ceil(item.discount_percent)}%`}
            </CompareItemDiscountPercent>
          </CompareItemDiscount>
        )}
      </CompareItemProductWrap>
      <CompareItemParams>
        {categoryCharacteristics.map((el, i) => (
          <CompareItemParam secound={i % 2 === 0} key={el.property_id}>
            {productCharacteristics.find(
              (e) => e.property_id === el.property_id
            )
              ? productCharacteristics.find(
                  (e) => e.property_id === el.property_id
                ).name
              : t('compare.no_desc')}
          </CompareItemParam>
        ))}
      </CompareItemParams>
    </CompareItemContainer>
  );
};

export default CompareItem;
