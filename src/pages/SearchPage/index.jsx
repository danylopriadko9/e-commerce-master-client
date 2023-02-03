import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SearchPageBarrier,
  SearchPageContainer,
  SearchPageH1,
  SearchPageWrap,
} from './SearchPageElements';
import ProductsItem from '../../pages/CategoryPage/ProductsItem';
import { useNavigate } from 'react-router-dom';
import { fetchSearchProducts } from '../../redux/Slicess/searchSlice';
import Pagination from '../../components/Pagination /Pagination';
import { useTranslation } from 'react-i18next';

const SearchPage = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const { products, numberOfPages } = useSelector((state) => state.search2);
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const search = queryParameters.get('src');
  const page = queryParameters.get('page');
  const group = queryParameters.get('groupId');
  const lan = queryParameters.get('lan');

  const [actualPage, setActualPage] = React.useState(page);

  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    dispatch(
      fetchSearchProducts({
        searchValue: search,
        page: page,
        groupId: group,
        lan: lan,
      })
    );
  }, [page, search, lan]);

  React.useEffect(() => {
    setActualPage(Number(page));
  }, [page]);

  React.useEffect(() => {
    return navigate(
      `/search?src=${search.trim()}&lan=${language}&page=${page}`
    );
  }, [language]);

  const nextPage = () => {
    if (Number(page) < numberOfPages) {
      return navigate(
        `/search?src=${search.trim()}&lan=${lan}&page=${Number(page) + 1}`
      );
    }
  };

  const preventPage = () => {
    if (actualPage > 1) {
      setActualPage((prev) => prev - 1);
      return navigate(
        `/search?src=${search.trim()}&lan=${lan}&page=${Number(page) - 1}`
      );
    }
  };

  const handleSetPageNumber = (num) => {
    window.scrollTo(0, 0);
    return navigate(`/search?src=${search.trim()}&lan=${lan}&page=${num}`);
  };

  if (!products.length) {
    return (
      <SearchPageContainer>
        <SearchPageH1>
          <SearchPageBarrier />
          {t('search_page.for_search')}
          {search}
          {t('search_page.no_results')}
        </SearchPageH1>
      </SearchPageContainer>
    );
  }

  return (
    <SearchPageContainer>
      <SearchPageH1>
        <SearchPageBarrier />
        {t('search_page.results')} {search}
      </SearchPageH1>
      <SearchPageWrap>
        {products.length > 0 &&
          products.map((el) => <ProductsItem key={el.product_id} item={el} />)}
      </SearchPageWrap>
      <Pagination
        nextPage={nextPage}
        numberOfPages={numberOfPages}
        actualPage={actualPage}
        handleSetPageNumber={handleSetPageNumber}
        preventPage={preventPage}
      />
    </SearchPageContainer>
  );
};

export default SearchPage;
