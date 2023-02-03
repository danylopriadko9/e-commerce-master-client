import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ProductCharacteristicsBarrier,
  ProductCharacteristicsContainer,
  ProductCharacteristicsH1,
  ProductCharacteristicsMainContainer,
  ProductCharacteristicsText,
  ProductCharacteristicsWrap,
  ProductCharacteristicsP,
} from './ProductCharacteristicsElemets';

const ProductCharacteristics = ({ description, characteristics }) => {
  const description_ref = React.useRef(null);

  React.useEffect(() => {
    if (description) {
      description_ref.current.innerHTML = description;
    }
  }, [description]);
  const { t, i18n } = useTranslation();

  return (
    <ProductCharacteristicsMainContainer>
      <ProductCharacteristicsContainer>
        <ProductCharacteristicsWrap>
          <ProductCharacteristicsH1>
            <ProductCharacteristicsBarrier></ProductCharacteristicsBarrier>
            {t('product_page.characteristics')}
          </ProductCharacteristicsH1>
          <ProductCharacteristicsText>
            {characteristics?.length > 0
              ? characteristics.map((el) => (
                  <ProductCharacteristicsP key={el.property_id}>
                    {`${el.characteristic} - ${el.value}`}
                  </ProductCharacteristicsP>
                ))
              : t('product_page.empty')}
          </ProductCharacteristicsText>
        </ProductCharacteristicsWrap>
        <ProductCharacteristicsWrap>
          <ProductCharacteristicsH1>
            <ProductCharacteristicsBarrier></ProductCharacteristicsBarrier>
            {t('product_page.desc')}
          </ProductCharacteristicsH1>
          <ProductCharacteristicsText ref={description_ref} />
        </ProductCharacteristicsWrap>
      </ProductCharacteristicsContainer>
    </ProductCharacteristicsMainContainer>
  );
};

export default ProductCharacteristics;
