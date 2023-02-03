import React from 'react';

import { GrClose } from 'react-icons/gr';
import { BsArrowLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

import {
  CartCheckInBlock,
  CartCheckInBtn,
  CartCloseContainer,
  CartContainer,
  CartContinueBtn,
  CartFooter,
  CartH2,
  CartHeader,
  CartHeaderBarrier,
  CartItemsContainer,
  CartLink,
  CartTotalPrice,
  CartWrap,
} from './CartElements';

import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import Ofer from './Ofer';
import { fetchCartItems } from '../../redux/Slicess/cartSlice2';
import { useTranslation } from 'react-i18next';

const Cart = ({ cartStatus, setCartStatus }) => {
  const { cartProducts, cartProductsIdsQty, totalPrice } = useSelector(
    (state) => state.cart
  );
  const { t, i18n } = useTranslation();
  const [oferStatus, setOferStatus] = React.useState(false);

  const dispatch = useDispatch();

  const { language } = useSelector((state) => state.language);

  React.useEffect(() => {
    if (cartProducts.length) {
      const ids = cartProductsIdsQty.map((el) => el.product_id);
      dispatch(fetchCartItems(ids));
    }
  }, [language]);

  if (oferStatus) {
    return <Ofer setOferStatus={setOferStatus} setCartStatus={setCartStatus} />;
  }
  return (
    <CartContainer cartStatus={cartStatus} onClick={() => setCartStatus(false)}>
      <CartWrap
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <CartHeader>
          {t('cart.cart')}
          <CartHeaderBarrier />
          <CartCloseContainer onClick={() => setCartStatus(false)}>
            <GrClose />
          </CartCloseContainer>
        </CartHeader>
        <CartItemsContainer>
          {cartProducts.length > 0 ? (
            cartProducts.map((el) => <CartItem key={el.product_id} {...el} />)
          ) : (
            <CartH2>{t('cart.cart_is_empty')}</CartH2>
          )}
        </CartItemsContainer>
        <CartFooter>
          <CartContinueBtn onClick={() => setCartStatus(false)}>
            <BsArrowLeft />
            <CartLink>{t('cart.continue')}</CartLink>
          </CartContinueBtn>
          <CartCheckInBlock>
            {cartProducts.length > 0 ? (
              <>
                <CartTotalPrice>
                  <span>Итого:</span>
                  <span>{Math.ceil(totalPrice)} UAH</span>
                </CartTotalPrice>
                <CartCheckInBtn onClick={() => setOferStatus(true)}>
                  <FiShoppingCart />
                  {t('cart.create_ofer')}
                </CartCheckInBtn>
              </>
            ) : (
              <></>
            )}
          </CartCheckInBlock>
        </CartFooter>
      </CartWrap>
    </CartContainer>
  );
};

export default Cart;
