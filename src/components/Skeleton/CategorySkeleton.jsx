import React from 'react';
import ContentLoader from 'react-content-loader';

const CategorySkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={220}
    height={250}
    viewBox='0 0 220 250'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='0' rx='5' ry='5' width='220' height='200' />
    <rect x='0' y='210' rx='5' ry='5' width='220' height='35' />
  </ContentLoader>
);

export default CategorySkeleton;
