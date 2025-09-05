import React from "react";
import { HeroSection } from "../../components/UI";
import aboutGroupImg from "../../assets/AboutUsimages/About-group.png";
import ProductInfoSection from "../../components/Products/AllProduct/ProductInfoSection";
import Characteristics from "../../components/Products/AllProduct/Characteristics";

import techImage from "../../assets/Whatwedoimages/techmen.jpg";
import { CompoundingSection, PulverisingSection, QualitySection } from "../../components/WhatWeDo";

const WhatWeDo = () => {
  const parameters = [
    "Suitability and compatibility of a project.",
    "On -site technical assistance and troubleshooting.",
    "Analytical testing.",
    "Joint development projects.",
    "Recommendation and supply of wide range of ancillary products including surface enhancer and mould releasing agents.",
  ];
  return (
    <main className="pt-0">
      <HeroSection
        title="What We Do"
        tagline="What We Do"
        rightImage={aboutGroupImg}
      />
      <div className="container">
        <ProductInfoSection
          tagline="GreenEthene in Action "
          heading="Technology Application"
          description={`"INVESTING IN TCHNOLOGY KEEPS YOU A STEP AHEAD ALWAYS"`}
          description2="We at GreenAge believe in sowing the best to reap excellence. We have equipped ourselves with best Machineries available to combat our competitors. Latest High Tech Extruders give superior dispersion of the pigments, rapid change of colors giving consistent quality. Granules are pulverised in high tech PALLMAN Polygrinders to ensure consistent product output in terms of quality."
        />

        <CompoundingSection />
        <PulverisingSection />
        <QualitySection />
        <Characteristics
          tagline="//Driven by Deep Know How //"
          heading="Technical Know How"
          description="We have a team of expert engineers and technical manpower efficient and precise in their skills. Our technicians are capable of providing expert solution to all your technical queries. We can update you regarding:"
          image={techImage}
          parameters={parameters}
        />
      </div>
    </main>
  );
};

export default WhatWeDo;
