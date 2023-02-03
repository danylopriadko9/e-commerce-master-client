import React from 'react';
import {
  CompagePageBtn,
  CompagePageBtnIcon,
  CompagePageCharacteristics,
  CompagePageCharacteristicsHeader,
  CompagePageParam,
  CompagePageParams,
  CompareItemH2,
  CompareItemsContainer,
  ComparePageBarrier,
  ComparePageCategoryBtn,
  ComparePageCategoryBtns,
  ComparePageCompareProductQty,
  ComparePageContainer,
  ComparePageH1,
  ComparePageHeader,
  ComparePageWrap,
} from './ComparePageElements';

import { BsCheckCircle } from 'react-icons/bs';

import ProductSlider from '../../components/ProductSlider';
import CompareItem from './CompareItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearAll,
  fetchCompageInformation,
} from '../../redux/Slicess/compareSlice';
import { useTranslation } from 'react-i18next';

const CompagePage = () => {
  const { t, i18n } = useTranslation();
  const [actualCategory, setActualcategory] = React.useState(null);
  const { language } = useSelector((state) => state.language);
  const {
    categoryCharacteristics,
    productsCharacteristics,
    productsInfo,
    categoryInfo,
    productIds,
    categoriesIds,
    relationProducts,
    status,
  } = useSelector((state) => state.comparePage);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (productIds.length) {
      dispatch(fetchCompageInformation({ productIds, categoriesIds }));
    }
  }, [language]);

  React.useEffect(() => {
    if (
      !productsInfo.filter((el) => el.category_id === actualCategory).length
    ) {
      setActualcategory((prev) => categoriesIds[0]);
    }
  }, [productIds, language]);

  React.useEffect(() => {
    setActualcategory((prev) => categoriesIds[0]);
  }, [language]);

  if (!productIds.length) {
    return (
      <ComparePageContainer>
        <ComparePageHeader>
          <CompareItemH2>{t('compare.no_products_to_compare')}</CompareItemH2>
        </ComparePageHeader>
      </ComparePageContainer>
    );
  }
  return (
    <ComparePageContainer>
      <ComparePageHeader>
        <ComparePageH1>
          <ComparePageBarrier />
          {t('compare.comparing')}
          <ComparePageCompareProductQty>
            {productIds.length} {t('compare.products')}
          </ComparePageCompareProductQty>
        </ComparePageH1>
      </ComparePageHeader>

      <ComparePageCategoryBtns>
        {categoryInfo?.length > 0 &&
          categoryInfo.map((el) => (
            <ComparePageCategoryBtn
              key={el.category_id}
              onClick={() => setActualcategory(el.category_id)}
              active={el.category_id === actualCategory}
            >
              {el.name}
            </ComparePageCategoryBtn>
          ))}
      </ComparePageCategoryBtns>
      <ComparePageWrap>
        <CompagePageCharacteristics>
          <CompagePageCharacteristicsHeader>
            <CompagePageBtn to='/'>
              <CompagePageBtnIcon>
                <BsCheckCircle />
              </CompagePageBtnIcon>
              {t('compare.add')}
            </CompagePageBtn>
            <CompagePageBtn onClick={() => dispatch(clearAll())}>
              <CompagePageBtnIcon>
                <BsCheckCircle />
              </CompagePageBtnIcon>
              {t('compare.clear')}
            </CompagePageBtn>
          </CompagePageCharacteristicsHeader>
          <CompagePageParams>
            {actualCategory &&
              categoryCharacteristics.length > 0 &&
              categoryCharacteristics
                .filter((el) => el.category_id === actualCategory)
                .map((el, i) => (
                  <CompagePageParam secound={i % 2 === 0} key={el.property_id}>
                    {el.name}
                  </CompagePageParam>
                ))}
          </CompagePageParams>
        </CompagePageCharacteristics>
        <CompareItemsContainer>
          {actualCategory &&
            productsInfo.length > 0 &&
            productsInfo
              .filter((el) => el.category_id === actualCategory)
              .map((el) => (
                <>
                  <CompareItem
                    key={el.product_id}
                    item={el}
                    productCharacteristics={productsCharacteristics.filter(
                      (e) => e.product_id === el.product_id
                    )}
                    categoryCharacteristics={categoryCharacteristics.filter(
                      (e) => el.category_id === e.category_id
                    )}
                  />
                </>
              ))}
        </CompareItemsContainer>
      </ComparePageWrap>

      <ProductSlider
        items={relationProducts}
        status={status}
        title={t('sliders_titles.buy_also')}
      />
    </ComparePageContainer>
  );
};

export default CompagePage;
