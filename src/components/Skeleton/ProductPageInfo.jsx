import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={240}
    viewBox='0 0 400 240'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='102' y='108' rx='0' ry='0' width='0' height='66' />
    <rect x='0' y='0' rx='0' ry='0' width='63' height='20' />
    <rect x='0' y='25' rx='0' ry='0' width='350' height='20' />
    <rect x='0' y='55' rx='0' ry='0' width='350' height='20' />
    <rect x='0' y='85' rx='0' ry='0' width='200' height='20' />
    <rect x='0' y='120' rx='0' ry='0' width='80' height='20' />
    <rect x='0' y='170' rx='0' ry='0' width='220' height='98' />
    <rect x='0' y='145' rx='0' ry='0' width='80' height='20' />
  </ContentLoader>
);

export default ProductSkeleton;
