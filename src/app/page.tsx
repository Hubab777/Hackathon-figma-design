import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import Discountitem from './components/DiscountItem';
import LatestProduct from './components/LatestProduct';
import TrendingProducts from './components/TrendingProducts';
import UniqueFeature from './components/UniqueFeature';
import Services from './components/Services';
import CategoryItems from './components/CategoryItems';
import Blog from './components/Blog';

const page = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <LatestProduct />
      <Services />
      <UniqueFeature />
      <TrendingProducts />
      <Discountitem />
      <CategoryItems />
      <Blog />
    </div>
  )
}

export default page

