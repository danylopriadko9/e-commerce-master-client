import React from 'react';
import {
  OferBth,
  OferCloseContainer,
  OferConfirmLink,
  OferContainer,
  OferHeader,
  OferHeaderBarrier,
  OferHero,
  OferHeroH3,
  OferP,
  OferSpan,
  OferWrap,
  OferHeroSection,
  OferBlock,
  OferH2,
  OferTitle,
  OferInput,
  OferSectionWrap,
  OferInputs,
  OferRadioContainer,
  OferRadioWrap,
  OferRadio,
  OferRadioLabel,
  OferRadioFirlsLine,
  OferConfirmBlock,
} from './OferElements';

import { GrClose } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Ofer = ({ setCartStatus, setOferStatus }) => {
  const [feeMethod, setFeeMethod] = React.useState(0);
  const [deliveryValiant, setDeliveryvariant] = React.useState(0);
  const [qty, setQty] = React.useState(0);
  const [product, setProduct] = React.useState('');

  const { t, i18n } = useTranslation();

  const { cartProductsIdsQty } = useSelector((state) => state.cart);

  const [contactInfo, setContactInfo] = React.useState({
    name: '',
    city: '',
    phone: '',
    email: '',
    deliveryAdres: '',
  });

  const handleClose = () => {
    setCartStatus(false);
    setOferStatus(false);
  };

  const handleChangeContactInformation = (e) => {
    setContactInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  React.useEffect(() => {
    setQty(() => {
      return cartProductsIdsQty.reduce((acc, val) => {
        return (acc += val.qty);
      }, 0);
    });
  }, []);

  React.useEffect(() => {
    setProduct(() => {
      if (qty === 1) return t('ofer.product');
      else if (qty >= 5 && qty <= 20) return t('ofer.products');
      else return t('ofer.product2');
    });
  }, [qty]);

  return (
    <OferContainer onClick={handleClose}>
      <OferWrap
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <OferHeader>
          {t('ofer.ofer')}
          <OferHeaderBarrier />
          <OferCloseContainer onClick={() => setOferStatus(false)}>
            <GrClose />
          </OferCloseContainer>
        </OferHeader>
        <OferHero>
          <OferHeroSection>
            <OferHeroH3>{'Итого'.toUpperCase()}</OferHeroH3>
            <OferP>
              <OferSpan>
                {qty} {product} {t('ofer.sum')}
              </OferSpan>
              <OferSpan>98 664 UAH</OferSpan>
            </OferP>
            <OferP>
              <OferSpan>{t('ofer.delivery_cost')}</OferSpan>
              <OferSpan>1000 UAH</OferSpan>
            </OferP>
            <OferP>
              <OferSpan>{t('ofer.to_pay')}</OferSpan>
              <OferSpan>98 664 UAH</OferSpan>
            </OferP>
          </OferHeroSection>
          <OferHeroSection alingCenter={true}>
            <OferBth>{t('ofer.confirm_ofer')}</OferBth>
            <OferConfirmLink>{t('ofer.confirm_user')}</OferConfirmLink>
          </OferHeroSection>
        </OferHero>
        <OferBlock directionColumn={true}>
          <OferTitle>
            <OferH2>{t('ofer.contacts')}</OferH2>
            <OferHeaderBarrier />
          </OferTitle>
          <OferSectionWrap>
            <OferInputs>
              <OferInput
                name='name'
                onChange={handleChangeContactInformation}
                placeholder={t('ofer.name_and_surname')}
              />
              <OferInput
                name='city'
                onChange={handleChangeContactInformation}
                placeholder={t('ofer.city')}
              />
              <OferInput
                name='phone'
                onChange={handleChangeContactInformation}
                placeholder={t('ofer.phone')}
              />
            </OferInputs>
            <OferInputs>
              <OferInput
                name='email'
                onChange={handleChangeContactInformation}
                placeholder='Email'
              />
            </OferInputs>
          </OferSectionWrap>
        </OferBlock>
        <OferBlock directionColumn={true}>
          <OferTitle>
            <OferH2>{t('ofer.chose_delivery_method')}</OferH2>
            <OferHeaderBarrier />
          </OferTitle>
          <OferRadioContainer directionColumn={true}>
            <OferRadioFirlsLine>
              <OferRadioWrap>
                <OferRadio
                  onClick={() => setDeliveryvariant(1)}
                  type='radio'
                  id='pickup'
                  name='delivery'
                />
                <OferRadioLabel
                  onClick={() => setDeliveryvariant(1)}
                  htmlFor='pickup'
                >
                  {t('ofer.pickup')}
                </OferRadioLabel>
              </OferRadioWrap>
              <OferRadioWrap>
                <OferRadio
                  onClick={() => setDeliveryvariant(2)}
                  type='radio'
                  id='post'
                  name='delivery'
                />
                <OferRadioLabel
                  onClick={() => setDeliveryvariant(2)}
                  htmlFor='post'
                >
                  {t('ofer.novaja_pochta')}
                </OferRadioLabel>
              </OferRadioWrap>
            </OferRadioFirlsLine>
            <OferRadioWrap>
              <OferRadio
                onClick={() => setDeliveryvariant(3)}
                type='radio'
                id='delivery'
                name='delivery'
              />
              <OferInput
                placeholder={t('ofer.delivery_adres')}
                disabled={deliveryValiant === 3 ? false : true}
                name='deliveryAdres'
                onChange={handleChangeContactInformation}
              />
            </OferRadioWrap>
          </OferRadioContainer>
        </OferBlock>
        <OferBlock directionColumn={true}>
          <OferTitle>
            <OferH2>{t('ofer.pay')}</OferH2>
            <OferHeaderBarrier />
          </OferTitle>
          <OferRadioContainer directionColumn={false}>
            <OferRadioWrap>
              <OferRadio type='radio' id='cash' name='pay' />
              <OferRadioLabel htmlFor='cash'>{t('ofer.cash')}</OferRadioLabel>
            </OferRadioWrap>
            <OferRadioWrap>
              <OferRadio type='radio' id='card' name='pay' />
              <OferRadioLabel htmlFor='card'>
                {t('ofer.pay_cart')}
              </OferRadioLabel>
            </OferRadioWrap>
            <OferRadioWrap>
              <OferRadio type='radio' id='privat' name='pay' />
              <OferRadioLabel htmlFor='privat'>
                {t('ofer.privat24')}
              </OferRadioLabel>
            </OferRadioWrap>
            <OferRadioWrap>
              <OferRadio type='radio' id='nocash' name='pay' />
              <OferRadioLabel htmlFor='nocash'>
                {t('ofer.non_cash')}
              </OferRadioLabel>
            </OferRadioWrap>
          </OferRadioContainer>
        </OferBlock>
        <OferConfirmBlock>
          <OferBth>{t('ofer.confirm')}</OferBth>
          <OferConfirmLink>{t('ofer.confirm_user')}</OferConfirmLink>
        </OferConfirmBlock>
      </OferWrap>
    </OferContainer>
  );
};

export default Ofer;
