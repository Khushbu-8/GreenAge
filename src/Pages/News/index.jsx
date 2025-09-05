import React from 'react';
import { HeroSection }from '../../components/UI';
import NewsSection from '../../components/News/NewsSection';
import aboutGroupImg from "../../assets/AboutUsimages/About-group.png";
const News = () => {
  return (
    <main className="pt-0">
      <HeroSection title="News" tagline="News" rightImage={aboutGroupImg} />
      <div className="container mx-auto  py-8">
        <NewsSection />
      </div>
    </main>
  );
};

export default News;