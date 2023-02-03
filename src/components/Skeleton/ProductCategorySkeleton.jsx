import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={220}
    height={435}
    viewBox='0 0 220 435'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='102' y='108' rx='0' ry='0' width='0' height='66' />
    <rect x='0' y='0' rx='10' ry='10' width='220' height='180' />
    <rect x='0' y='190' rx='0' ry='0' width='220' height='20' />
    <rect x='0' y='220' rx='0' ry='0' width='110' height='20' />
    <rect x='0' y='250' rx='0' ry='0' width='110' height='20' />
    <rect x='0' y='280' rx='0' ry='0' width='200' height='20' />
    <rect x='0' y='310' rx='0' ry='0' width='220' height='55' />
    <rect x='0' y='370' rx='0' ry='0' width='220' height='55' />
  </ContentLoader>
);

export default ProductSkeleton;
