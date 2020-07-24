import React from 'react';
import CategoryCard from '../categoryCard/categoryCard';

import './home.scss';

const Home = () => (
  <div className='homepage'>
    <div className='categories'>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  </div>
);

export default Home;
