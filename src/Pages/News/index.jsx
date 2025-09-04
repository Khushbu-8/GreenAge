import React from 'react';
import { HeroSection }from '../../components/UI';
import NewsSection from '../../components/News/NewsSection';

const News = () => {
  return (
    <main className="pt-0">
      <HeroSection title="News" tagline="News" rightImage={aboutGroupImg} />
      <div className="container mx-auto px-4 py-8">
        <NewsSection />
      </div>
    </main>
  );
};

export default News;