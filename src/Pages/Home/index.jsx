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
    </main>
  );
};

export default Home;