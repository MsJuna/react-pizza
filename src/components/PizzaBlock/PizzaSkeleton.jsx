import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <div className='pizza-block__wrapper'>
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={466}
      viewBox='0 0 280 466'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='130' cy='125' r='125' />
      <rect x='0' y='272' rx='10' ry='10' width='260' height='29' />
      <rect x='1' y='424' rx='10' ry='10' width='89' height='32' />
      <rect x='109' y='421' rx='16' ry='16' width='150' height='37' />
      <rect x='250' y='431' rx='0' ry='0' width='1' height='0' />
      <rect x='79' y='415' rx='0' ry='0' width='0' height='34' />
      <rect x='0' y='322' rx='10' ry='10' width='260' height='90' />
    </ContentLoader>
  </div>
);

export default Skeleton;
