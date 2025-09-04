import React from 'react';
import { Gallery } from '../../components/Home';
import aboutGroupImg from "../../assets/AbourUsimages/About-group.png";
import { HeroSection } from '../../components/UI';

const GalleryPage = () => {
  return (
    <main className="pt-0">
      <HeroSection title="Gallery" tagline="Gallery" rightImage={aboutGroupImg} />
      <div className="container mx-auto">
         <Gallery limit={18} />
      </div>
     
    </main>
  );
};

export default GalleryPage;