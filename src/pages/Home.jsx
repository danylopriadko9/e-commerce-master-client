import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import MainPageDescription from '../components/MainPageDescription';
import NewsSlider from '../components/NewsSlider';
import ProductSlider from '../components/ProductSlider';
import SEO from '../components/SEO';
import SliderComponent from '../components/Slider';
import {
  fetchHomeInformation,
  fetchWatchedProducts,
} from '../redux/Slicess/homeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const {
    discountProducts,
    newProducts,
    watchedProducts,
    news,
    watchedProductsIds,
    status,
    watchedProductsStatus,
  } = useSelector((state) => state.home);

  const { language } = useSelector((state) => state.language);

  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (watchedProductsIds.length) {
      dispatch(fetchWatchedProducts({ ids: watchedProductsIds }));
    }
  }, [watchedProductsIds]);

  return (
    <>
      <SEO
        title={`Оборудование для ресторанов, кафе, столовой с 1993 года`}
        description={`Комплексное оснащение профессиональным оборудованием для кухни ресторана, кафе, столовой, кулинарного цеха - прямые поставки, большой опыт в реализации проектов, консультации профессионалов.`}
        keywords={`оборудование для общественного питания, оборудование общепита, профессиональное кухонное оборудование, оборудование для кафе и ресторанов`}
      />
      <SliderComponent />
      <ProductSlider
        title={t('sliders_titles.discounts')}
        items={discountProducts[language] || []}
        status={status}
      />
      <ProductSlider
        title={t('sliders_titles.new_products')}
        items={newProducts[language] || []}
        status={status}
      />
      {watchedProducts.length > 0 && (
        <ProductSlider
          title={t('sliders_titles.watched')}
          items={watchedProducts}
          status={watchedProductsStatus}
        />
      )}
      <NewsSlider
        title={t('sliders_titles.news')}
        items={news[language] || []}
        status={status}
      />
      <MainPageDescription />
    </>
  );
};

export default Home;
