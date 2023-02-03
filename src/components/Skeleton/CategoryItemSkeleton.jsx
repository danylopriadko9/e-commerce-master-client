import ContentLoader from 'react-content-loader';
const CategoryItemSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={220}
    height={470}
    viewBox='0 0 220 470'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='440' cy='68' r='120' />
    <rect x='102' y='108' rx='0' ry='0' width='0' height='66' />
    <rect x='0' y='0' rx='5' ry='5' width='220' height='260' />
    <rect x='0' y='290' rx='5' ry='5' width='70' height='15' />
    <rect x='0' y='270' rx='5' ry='5' width='110' height='15' />
    <rect x='0' y='315' rx='5' ry='5' width='150' height='15' />
    <rect x='0' y='350' rx='5' ry='5' width='100' height='40' />
    <rect x='0' y='405' rx='4' ry='4' width='220' height='100' />
  </ContentLoader>
);

export default CategoryItemSkeleton;
