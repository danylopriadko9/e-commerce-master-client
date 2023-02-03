import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductItemSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={240}
    height={360}
    viewBox='0 0 240 360'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='440' cy='68' r='120' />
    <rect x='4' y='0' rx='20' ry='20' width='220' height='200' />
    <rect x='3' y='210' rx='10' ry='10' width='220' height='35' />
    <rect x='3' y='255' rx='5' ry='5' width='135' height='20' />
    <rect x='3' y='295' rx='5' ry='5' width='90' height='20' />
    <rect x='3' y='320' rx='5' ry='5' width='140' height='20' />
  </ContentLoader>
);

export default ProductItemSkeleton;
