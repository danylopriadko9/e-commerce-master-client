import React from 'react';
import ContentLoader from 'react-content-loader';

const MainPageProductSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={230}
    height={285}
    viewBox='0 0 230 285'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='440' cy='68' r='120' />
    <rect x='102' y='108' rx='5' ry='5' width='0' height='66' />
    <rect x='0' y='0' rx='5' ry='5' width='230' height='80' />
    <rect x='0' y='90' rx='5' ry='5' width='100' height='20' />
    <rect x='0' y='240' rx='5' ry='5' width='120' height='20' />
    <rect x='0' y='115' rx='5' ry='5' width='230' height='110' />
  </ContentLoader>
);

export default MainPageProductSkeleton;
