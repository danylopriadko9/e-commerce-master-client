import React from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductFromCart,
  setProductQty,
} from '../../../redux/Slicess/cartSlice2';

import {
  CartItemCategory,
  CartItemCenter,
  CartItemContainer,
  CartItemCounterBtn,
  CartItemCounterInput,
  CartItemDiscount,
  CartItemDiscountPercent,
  CartItemId,
  CartItemInformation,
  CartItemLeft,
  CartItemModel,
  CartItemOldPrice,
  CartItemPhoto,
  CartItemPhotoContainer,
  CartItemPrice,
  CartItemRight,
  CartItemSum,
  CartItemSumValue,
} from './CartItemElements';

const CartItem = ({
  product_name,
  category_name,
  base_price,
  discount_percent,
  product_id,
  iso,
  filename,
}) => {
  const dispatch = useDispatch();
  const [itemQty, setItemQty] = React.useState(1);
  const { cartProductsIdsQty } = useSelector((state) => state.cart);

  React.useEffect(() => {
    if (itemQty === 0) {
      dispatch(deleteProductFromCart(product_id));
    } else dispatch(setProductQty({ itemQty, product_id }));
  }, [itemQty]);

  React.useEffect(() => {
    setItemQty(
      () => cartProductsIdsQty.find((el) => el.product_id === product_id).qty
    );
  }, [cartProductsIdsQty]);

  const handleChange = () => {};

  return (
    <CartItemContainer>
      <CartItemLeft>
        <CartItemPhotoContainer>
          <CartItemPhoto
            src={`http://localhost:8000/static/product/${product_id}/${filename}`}
          />
        </CartItemPhotoContainer>

        <CartItemInformation>
          <CartItemId>#{product_id}</CartItemId>
          <CartItemCategory>{category_name}</CartItemCategory>
          <CartItemModel>{product_name}</CartItemModel>
          <CartItemPrice>{`${
            discount_percent
              ? Math.ceil(base_price - (base_price / 100) * discount_percent)
              : Math.ceil(base_price)
          } ${iso}`}</CartItemPrice>
          {discount_percent && (
            <CartItemDiscount>
              <CartItemOldPrice>{`${Math.ceil(
                base_price
              )} ${iso}`}</CartItemOldPrice>
              <CartItemDiscountPercent>
                -{`${Math.ceil(discount_percent)}%`}
              </CartItemDiscountPercent>
            </CartItemDiscount>
          )}
        </CartItemInformation>
      </CartItemLeft>
      <CartItemCenter>
        <CartItemCounterBtn onClick={() => setItemQty((prev) => prev - 1)}>
          <AiOutlineMinus />
        </CartItemCounterBtn>
        <CartItemCounterInput
          type='number'
          value={itemQty}
          onChange={handleChange}
        />
        <CartItemCounterBtn onClick={() => setItemQty((prev) => prev + 1)}>
          <AiOutlinePlus />
        </CartItemCounterBtn>
      </CartItemCenter>
      <CartItemRight>
        <CartItemSum>Сумма:</CartItemSum>
        <CartItemSumValue>
          {discount_percent
            ? Math.ceil(base_price - (base_price / 100) * discount_percent) *
              itemQty
            : Math.ceil(base_price) * itemQty}{' '}
          {iso}
        </CartItemSumValue>
      </CartItemRight>
    </CartItemContainer>
  );
};

export default CartItem;
