import React from 'react';

import {
  CategoryPageBtnContainer,
  CategoryPageCharacteristics,
  CategoryPageContainer,
  CategoryPageFilterContainer,
  CategoryPageProductsContainer,
  CategoryPageH1,
  CategoryPageSubmitBtn,
  CategoryPageFilterBtn,
  CategoryPageBtnSpan,
  CategoryPageBarrier,
  CategoryPageSelect,
  CategoryPageSelectContainer,
  CategoryPageSpan,
  CategoryPageOption,
  CategoryPageBrandsAndCostContainer,
  CategoryPageBrandsContainer,
  CategoryPageRadio,
  CategoryPageBrand,
  CategoryPageH3,
  CategoryPageCharacteristicsContainer,
} from './CategoryPageElements.js';

import ProductSlider from '../../components/ProductSlider';
import MainPageDescription from '../../components/MainPageDescription';
import ProductsItem from './ProductsItem/index.jsx';

import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineFilter } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  clearParamsAndManufacturers,
  fetchCategoryProducts,
  fetchFiltredProducts,
  fetchPropertyProducts,
  manufacturersChange,
  paramsChange,
} from '../../redux/Slicess/categoryPageSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/Pagination /Pagination.jsx';
import ProductSkeleton from '../../components/Skeleton/ProductCategorySkeleton.jsx';
import SEO from '../../components/SEO/index.jsx';
import {
  CategoriesPageImageContainer,
  CategoriesPageItem,
  CategoryItemImage,
  CategoryItemLink,
} from '../CategoriesPage/CategoriesPageElements.js';
import { useTranslation } from 'react-i18next';

const CategoryPage = () => {
  const [filterStatus, setFilterStatus] = React.useState(false);
  const location = useLocation();
  const queryParameters = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    products,
    numberOfPages,
    status,
    propertyProducts,
    values,
    characteristics,
    propertyStatus,
    manufacturers,
    filteredManufacturers,
    params,
    meta,
  } = useSelector((state) => state.categoryPage);

  const { language } = useSelector((state) => state.language);
  const { categories } = useSelector((state) => state.home);

  const page = queryParameters.get('page');
  const filter = queryParameters.get('filter');

  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (!filter) {
      dispatch(
        fetchCategoryProducts({
          url: location.pathname.replace('/group_', ''),
          page: page || 1,
        })
      );
      dispatch(
        fetchPropertyProducts({ url: location.pathname.replace('/group_', '') })
      );
    } else {
      dispatch(
        fetchFiltredProducts({
          url: location.pathname.replace('/group_', ''),
          manufacturers: filteredManufacturers,
          params,
          page,
        })
      );
    }
  }, [page, location.pathname, language]);

  React.useEffect(() => {
    navigate(`${location.pathname}?page=1`);
    dispatch(
      fetchPropertyProducts({ url: location.pathname.replace('/group_', '') })
    );
  }, [language]);

  const nextPage = () => {
    if (!page) {
      navigate(`${location.pathname}?page=2`);
    }
    if (Number(page) < numberOfPages) {
      return navigate(
        `${location.pathname}?page=${Number(page) + 1}${
          filter ? '&filter=true' : ''
        }`
      );
    }
  };

  const preventPage = () => {
    if (Number(page) > 1) {
      return navigate(
        `${location.pathname}?page=${Number(page) - 1}${
          filter ? '&filter=true' : ''
        }`
      );
    }
  };

  const handleSetPageNumber = (num) => {
    window.scrollTo(0, 0);
    return navigate(
      `${location.pathname}?page=${num}${filter ? '&filter=true' : ''}`
    );
  };

  const handleChangeSelect = (property_id, property_value_id) => {
    dispatch(paramsChange({ property_id, property_value_id }));
  };

  const handleChangeManufacturer = (e) => {
    dispatch(manufacturersChange(e.target.value));
  };

  const handleSearchFilteredProducts = () => {
    navigate(`${location.pathname}?page=1&filter=true`);
    dispatch(
      fetchFiltredProducts({
        url: location.pathname.replace('/group_', ''),
        manufacturers: filteredManufacturers,
        params,
        page,
      })
    );
  };

  const handleClearFilterParams = () => {
    dispatch(clearParamsAndManufacturers());
    navigate(`${location.pathname}?page=1`);
    dispatch(
      fetchCategoryProducts({
        url: location.pathname.replace('/group_', ''),
        page: page || 1,
      })
    );
    dispatch(
      fetchPropertyProducts({ url: location.pathname.replace('/group_', '') })
    );
  };

  if (
    categories[language] &&
    categories[language].find(
      (el) => el.url === location.pathname.replace('/group_', '')
    ).parent_id === 0 &&
    categories[language].find(
      (el) =>
        el.parent_id ===
        categories[language].find(
          (el) => el.url === location.pathname.replace('/group_', '')
        ).category_id
    )
  ) {
    const category = categories[language].find(
      (el) => el.url === location.pathname.replace('/group_', '')
    );
    return <ParentCategoryPage category={category} />;
  }
  return (
    <>
      <SEO
        title={meta.meta_title}
        description={meta.met_description}
        keywords={meta.meta_keywords}
      />
      <CategoryPageContainer>
        <CategoryPageH1>
          <CategoryPageBarrier />
          {propertyStatus === 'success' && meta.name}
        </CategoryPageH1>
        <CategoryPageFilterContainer filterStatus={filterStatus}>
          {propertyStatus === 'success' && characteristics.length > 0 && (
            <CategoryPageCharacteristics>
              <CategoryPageH3>{t('filtration.characteristics')}</CategoryPageH3>
              <CategoryPageCharacteristicsContainer>
                {propertyStatus === 'success' &&
                  characteristics.map((el) => (
                    <CategoryPageSelectContainer key={el.property_id}>
                      <CategoryPageSpan>{el.name}</CategoryPageSpan>
                      <CategoryPageSelect
                        onChange={(e) =>
                          handleChangeSelect(el.property_id, e.target.value)
                        }
                      >
                        <CategoryPageOption value=''> </CategoryPageOption>
                        {values
                          .filter((e) => e.property_id === el.property_id)
                          .map((item) => (
                            <CategoryPageOption
                              key={item.property_value_id}
                              value={item.property_value_id}
                            >
                              {item.name}
                            </CategoryPageOption>
                          ))}
                      </CategoryPageSelect>
                    </CategoryPageSelectContainer>
                  ))}
              </CategoryPageCharacteristicsContainer>
            </CategoryPageCharacteristics>
          )}

          <CategoryPageBrandsAndCostContainer>
            <CategoryPageBrandsContainer>
              <CategoryPageH3>{t('filtration.brand')}</CategoryPageH3>
              {propertyStatus === 'success' &&
                manufacturers.map((el) => (
                  <CategoryPageBrand key={el.manufacturer_id}>
                    <CategoryPageSpan>{el.name}</CategoryPageSpan>
                    <CategoryPageRadio
                      type='checkbox'
                      value={el.manufacturer_id}
                      name='manufacturer'
                      onChange={handleChangeManufacturer}
                    />
                  </CategoryPageBrand>
                ))}
            </CategoryPageBrandsContainer>
          </CategoryPageBrandsAndCostContainer>
        </CategoryPageFilterContainer>
        <CategoryPageBtnContainer filterStatus={filterStatus}>
          <div style={{ display: 'flex' }}>
            <CategoryPageFilterBtn
              onClick={() => setFilterStatus((prev) => !prev)}
            >
              <HiOutlineFilter />
              <CategoryPageBtnSpan>
                {filterStatus
                  ? t('filtration.close_filter')
                  : t('filtration.open_filter')}
              </CategoryPageBtnSpan>
            </CategoryPageFilterBtn>
            {filterStatus && (
              <CategoryPageFilterBtn onClick={handleClearFilterParams}>
                <AiOutlineClose />
                <CategoryPageBtnSpan>
                  {t('filtration.clear_filter')}
                </CategoryPageBtnSpan>
              </CategoryPageFilterBtn>
            )}
          </div>
          <CategoryPageSubmitBtn
            filterStatus={filterStatus}
            onClick={handleSearchFilteredProducts}
          >
            <AiOutlineCheck />
          </CategoryPageSubmitBtn>
        </CategoryPageBtnContainer>
        {!products.length && (
          <CategoryPageH1>{t('filtration.not_result')}</CategoryPageH1>
        )}
        <CategoryPageProductsContainer>
          {status === 'success'
            ? products.map((el) => (
                <ProductsItem key={el.product_id} item={el} />
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
                <ProductSkeleton key={el} />
              ))}
        </CategoryPageProductsContainer>
      </CategoryPageContainer>
      {numberOfPages > 0 && (
        <Pagination
          numberOfPages={numberOfPages}
          actualPage={page || 1}
          nextPage={nextPage}
          preventPage={preventPage}
          handleSetPageNumber={handleSetPageNumber}
        />
      )}

      <ProductSlider
        status={propertyStatus}
        items={propertyProducts}
        title={t('sliders_titles.buy_also')}
      />
      <MainPageDescription />
    </>
  );
};

const ParentCategoryPage = ({ category }) => {
  const [subcategories, setSubcategories] = React.useState([]);
  const { categories } = useSelector((state) => state.home);
  const { language } = useSelector((state) => state.language);

  React.useEffect(() => {
    if (category) {
      setSubcategories((prev) => {
        return categories[language].filter(
          (el) => el.parent_id === category.category_id
        );
      });
    }
  }, [category, language]);
  return (
    <CategoryPageContainer>
      <CategoryPageH1>
        <CategoryPageBarrier />
        {category.name}
      </CategoryPageH1>
      <CategoryPageProductsContainer>
        {subcategories.length > 0 &&
          subcategories.map((el) => (
            <CategoriesPageItem key={el.category_id} to={`/group_${el.url}`}>
              <CategoriesPageImageContainer>
                <CategoryItemImage
                  src={`http://localhost:8000/static/category/${el.category_id}/${el.filename}`}
                />
              </CategoriesPageImageContainer>
              <CategoryItemLink>{el.name}</CategoryItemLink>
            </CategoriesPageItem>
          ))}
      </CategoryPageProductsContainer>
    </CategoryPageContainer>
  );
};

export default CategoryPage;
