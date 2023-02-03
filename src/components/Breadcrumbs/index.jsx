import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  BreadcrumbsContainer,
  BreadcrumbsLink,
  BreadcrumbsTriangle,
  BreadcrumbsWrap,
  CompareLink,
  CompareLinkContainer,
  CompareSpan,
} from './Breadcrumbs';

import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = () => {
  const location = useLocation();

  if (location.pathname.includes('tovar')) return <ProductBreadcrumbs />;

  if (location.pathname.includes('group')) {
    return <CategoryBreadcrumbs />;
  }

  return <></>;
};

const ProductBreadcrumbs = () => {
  const location = useLocation();
  const { language } = useSelector((state) => state.language);
  const [parentCategory, setParentCategory] = React.useState({});
  const [category, setCategory] = React.useState();
  const { t, i18n } = useTranslation();

  const { productIds } = useSelector((state) => state.comparePage);

  const { product_information, categories } = useSelector(
    (state) => state.home
  );

  React.useEffect(() => {
    if (categories[language] && product_information.category_id) {
      const category = categories[language].find(
        (el) => el.category_id === product_information.category_id
      );
      const parent = categories[language].find(
        (el) => el.category_id === category.parent_id
      );

      setParentCategory(parent);
      setCategory(category);
    }
  }, [categories, location.pathname, product_information]);
  return (
    <>
      <BreadcrumbsWrap>
        <BreadcrumbsContainer>
          {parentCategory && (
            <>
              <BreadcrumbsLink to={`/group_${parentCategory.url}`}>
                {parentCategory.name}
              </BreadcrumbsLink>
              <BreadcrumbsTriangle />
            </>
          )}

          {category && (
            <>
              <BreadcrumbsLink to={`/group_${category.url}`}>
                {category.name}
              </BreadcrumbsLink>
              <BreadcrumbsTriangle />
            </>
          )}

          {product_information && (
            <>
              <BreadcrumbsLink to={`/tovar_${product_information.url}`}>
                {product_information.product_name}
              </BreadcrumbsLink>
            </>
          )}
        </BreadcrumbsContainer>
        <CompareLinkContainer>
          <AiOutlineCheckCircle />
          <CompareSpan>
            {productIds.length}{' '}
            {(productIds.length === 1 && 'Товар') ||
              (productIds.length < 5 && 'Товара') ||
              (productIds.length >= 5 && 'Товаров')}
          </CompareSpan>
          <CompareLink to='/compare'>Сравнить</CompareLink>
        </CompareLinkContainer>
      </BreadcrumbsWrap>
    </>
  );
};

const CategoryBreadcrumbs = () => {
  const { meta } = useSelector((state) => state.categoryPage);
  const { categories } = useSelector((state) => state.home);
  const { language } = useSelector((state) => state.language);
  const { productIds } = useSelector((state) => state.comparePage);
  const { t, i18n } = useTranslation();

  const [actualParentCategory, setActualCategory] = React.useState(null);
  React.useEffect(() => {
    if (Object.keys(meta).length && categories[language]) {
      setActualCategory((prev) => {
        const parentId = categories[language].find(
          (el) => el.category_id === meta.category_id
        ).parent_id;

        const parentCategory = categories[language].find(
          (el) => el.category_id === parentId
        );

        return parentCategory;
      });
    }
  }, [meta, language, categories]);

  return (
    <BreadcrumbsWrap>
      <BreadcrumbsContainer>
        {actualParentCategory && (
          <>
            <BreadcrumbsLink to={`/group_${actualParentCategory?.url}`}>
              {actualParentCategory?.name}
            </BreadcrumbsLink>
            <BreadcrumbsTriangle />
          </>
        )}
        {meta && (
          <>
            <BreadcrumbsLink>{meta?.name}</BreadcrumbsLink>
          </>
        )}
      </BreadcrumbsContainer>
      <CompareLinkContainer>
        <AiOutlineCheckCircle />
        <CompareSpan>
          {productIds.length}{' '}
          {(productIds.length === 1 && t('breadcrumps.product')) ||
            (productIds.length < 5 && t('breadcrumps.product2')) ||
            (productIds.length >= 5 && t('breadcrumps.products'))}
        </CompareSpan>
        <CompareLink to='/compare'>{t('breadcrumps.compare')}</CompareLink>
      </CompareLinkContainer>
    </BreadcrumbsWrap>
  );
};

export default Breadcrumbs;
