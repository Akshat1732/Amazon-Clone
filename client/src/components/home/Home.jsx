import React from 'react';
import Banner from './Banner';
import CategoryCards from './CategoryCards';
import Slider from './Slider';
import './home.css';

export const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <main>
        <CategoryCards />
      </main>
    </div>
  )
}

export default Home;