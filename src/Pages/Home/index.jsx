import React from 'react';
import { 
  Hero, 
  AboutUs, 
  Services, 
  Expertise, 
  Gallery, 
  OurClients, 
  OurReviews 
} from '../../components/Home';
import { ScrollToTop } from '../../components/UI';

const Home = () => {
  return (
    <main>
      <Hero />
     <div className='container '>
      <AboutUs />
      <Services />
      <Expertise />
      <Gallery limit={9} />
      <OurClients />
      <OurReviews />
     </div>
     
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
};

export default Home;