import React from 'react';
import { Hero, Products, Info, ScrollToTop } from '../components';

function Home() {
  return (
    <main>
      <ScrollToTop/>
      <Hero />
      <Products />
      <Info />
    </main>
  );
}

export default Home;
