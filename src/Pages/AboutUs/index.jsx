import React from 'react';
import { AboutUs } from '../../components/Home';
import { People, AboutHero, OurStory, WhyGreenage } from '../../components/AboutUs';
import { HeroSection } from '../../components/UI';
import aboutGroupImg from "../../assets/AbourUsimages/About-group.png";

const AboutUsPage = () => {
  return (
    <main className="pt-0">
      <HeroSection title="About Us" tagline="About Us" rightImage={aboutGroupImg} />
    <div className='container'>
        <OurStory />
        <WhyGreenage />
        <People />
     
    </div>
      {/* <AboutUs /> */}     
    </main>
  );
};

export default AboutUsPage;