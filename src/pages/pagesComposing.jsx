import React from 'react';
import { useParams } from 'react-router-dom';

import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';

const PagesComposing = () => {
  const { url } = useParams();

  if (url.includes('tovar')) {
    return <ProductPage url={url} />;
  }
  if (url.includes('group')) {
    return <CategoryPage />;
  }

  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '960px',
        widows: '100%',
        minHeight: '50vh',
        padding: '20px',
      }}
    >
      Страница отсутствует
    </div>
  );
};

export default PagesComposing;
