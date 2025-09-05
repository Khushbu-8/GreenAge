import React, { useState } from "react";
import productsImg from "../../assets/Productimages/products-right.png";
import ProductHero from "../../components/UI/ProductHero";
import GreenetheneBrand from "../../components/Products/AllProduct/GreenetheneBrand";
import PackagingLeadTime from "../../components/Products/AllProduct/PackagingLeadTime";
import Characteristics from "../../components/Products/AllProduct/Characteristics";
import GradesSection from "../../components/Products/AllProduct/GradesSection";
import ProductInfoSection from "../../components/Products/AllProduct/ProductInfoSection";
import Applications from "../../components/Products/Butene/Applications";
import powderImage from "../../assets/images/powder1.png";
// Import images
import waterTank from "../../assets/Productimages/water-tank.png";
import roadBarriers from "../../assets/Productimages/road-barriers.png";
import undergroundTank from "../../assets/Productimages/underground-tank.png";
import undergroundManholes from "../../assets/Productimages/underground-manholes.png";
import pallets from "../../assets/Productimages/pallets.png";
import fireExtinguisher from "../../assets/Productimages/fire-extinguisher.png";
import portableToilet from "../../assets/Productimages/portable-toilet.png";

import Refrigerator from "../../assets/Productimages/refrigerator.png";
import Exhibition from "../../assets/Productimages/exhibition.png";

import FishBox1 from "../../assets/Productimages/fish-box1.png";
import FishBox2 from "../../assets/Productimages/fish-box2.png";
import IceBox1 from "../../assets/Productimages/ice-box1.png";
import IceBox2 from "../../assets/Productimages/ice-box2.png";

import TractorHood from "../../assets/Productimages/tractor-hood.png";
import TractorInterior from "../../assets/Productimages/tractor-interior.png";
import TruckMudGuard from "../../assets/Productimages/truck-mud-guard.png";

import FloatingJetty from "../../assets/Productimages/floating-jetty.png";
import MarineBuoys from "../../assets/Productimages/marine-buoys.png";

import BowlTypePot from "../../assets/Productimages/bowl-type-pot.png";
import GraniteFlowerPot from "../../assets/Productimages/granite-flower-pot.png";
import TerracotaPlanter1 from "../../assets/Productimages/terracota-planter1.png";
import TerracotaPlanter2 from "../../assets/Productimages/terracota-planter2.png";
import WhitePlanter from "../../assets/Productimages/white-planter.png";
import ProductOverviewCard from "../../components/Products/Butene/ProductOverviewCard";
import GradesDetail from "../../components/Products/AllProduct/GradesDetail";

import gradesImg1 from "../../assets/Productimages/grades-table1.png";
import gradesImg2 from "../../assets/Productimages/grades-table2.png";
import gradesImg3 from "../../assets/Productimages/grades-table3.png";

const Products = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Tab data
  const tabs = ["All", "Butene", "Hexene", "Ripple"];

  const applicationsData = [
    { img: waterTank, title: "Water Storage Tank" },
    { img: roadBarriers, title: "Road Barriers" },
    { img: undergroundTank, title: "Underground Tank" },
    { img: undergroundManholes, title: "Underground Manholes" },
    { img: pallets, title: "Pallets" },
    { img: fireExtinguisher, title: "Fire Extinguisher" },
    { img: portableToilet, title: "Portable Toilet" },
  ];
  const hexeneApplicationsData = [
    { img: Refrigerator, title: "Refrigeration Products" },
    { img: Exhibition, title: "Exhibition Tool BoxRoad Barriers" },
  ];
  const InsulatedBoxesData = [
    { img: FishBox1, title: "Insulated Fish Box" },
    { img: FishBox2, title: "Insulated Water Box" },
    { img: IceBox1, title: "Ice Box" },
    { img: IceBox2, title: "Insulated Ice Box" },
  ];
  const AutoMobilePartsData = [
    { img: TractorHood, title: "Tractor Hood" },
    { img: TractorInterior, title: "Tractor Interior" },
    { img: TruckMudGuard, title: "Truck Mud Guard" },
  ];
  const MarineData = [
    { img: FloatingJetty, title: "Floating Jetty" },
    { img: MarineBuoys, title: "Marine Buoys" },
  ];

  const rippleApplicationsData = [
    { img: BowlTypePot, title: "Bowl Type Pot" },
    { img: GraniteFlowerPot, title: "Granite Flower Pot" },
    { img: TerracotaPlanter1, title: "Terracota Planter" },
    { img: TerracotaPlanter2, title: "Terracota Planter" },
    { img: WhitePlanter, title: "White Planter" },
  ];

  const parameters = [
    "UV Stability (UV 8+)",
    "Anti-Oxidation (OIT >20 Mins)",
    "Custom Colours based on Panton & RAL Standards (BWS 8 Light Fastness & High Weather Fastness)",
    "PreAddivated with Internal Mold Release Agents",
    "Custom Powder Size",
  ];

  return (
    <main className="pt-0">
      {/* Product Hero Section */}
      <ProductHero
        title={activeTab === "All" ? "Products" : activeTab}
        tagline="WELCOME TO GREENAGE"
        rightImage={productsImg}
      />

      {/* Tabs Section */}
      <section className="bg-white w-full py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Small heading */}
          <div className="text-sm md:text-base xl:text-lg font-semibold text-blue px-3 py-1 text-center rounded-md mb-2">
            // What We Offer //
          </div>

          {/* Main heading */}
          <h2 className="text-2xl md:text-4xl xl:text-5xl text-blacks text-center font-extrabold mb-8">
            Our Products
          </h2>

          {/* Tabs */}
          <div className="border-b border-gray-200 overflow-x-auto">
            <div className="flex flex-nowrap justify-center items-center min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 sm:px-12 md:px-16 lg:px-20 py-3 rounded-t-lg text-sm md:text-base lg:text-lg font-semibold border transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradients text-white shadow-md"
                      : "bg-whites text-gray-600 hover:bg-green-100 hover:text-green-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Tab Content */}
      <section className="container mx-auto ">
        {activeTab === "All" && (
          <div className="text-center pb-24 lg:pb-20">
            {/* for Greenethene */}
            <ProductInfoSection
              tagline="// SUSTAINABLE BY NATURE, POWERED BY SCIENCE //"
              heading="Greenethene, The Brand"
              description="GreenAge Industries have etched their name in the field of development and manufacturing of Rotomoulding Powder/Compounds in blazing fonts. Foundation of the company was laid back in the year 2012, as a subsidiary of the 30-year-old Umiya Group of Industries..."
            />
            {/* <Characteristics  */}
            <ProductInfoSection
              tagline="// ECO-ETHENE FOR A GREENER PLANET //"
              heading="Characteristics Of GreenEthene"
              description="GreenEthene Contains A Premium UV And AO Stabilisation Package. They Are Also Provided With Special Internal Release Agent, Enabling Molders To Omit The Usage Of Externally Applied Release Agent."
            />
            {/* <Characteristics /> */}
            <Characteristics
              tagline="// ECO-ETHENE FOR A GREENER PLANET //"
              heading="Characteristics Of GreenEthene"
              description="GreenEthene Contains A Premium UV And AO Stabilisation Package. They Are Also Provided With Special Internal Release Agent, Enabling Molders To Omit The Usage Of Externally Applied Release Agent."
              image={powderImage}
              rightTitle="100% Customisable On Following Parameters"
              parameters={parameters}
            />
            {/* <GradesSection /> */}
            <GradesDetail
              tagline="Versatile Grades, Singular Purpose"
              title="Grades of GreenEthene"
              description="Grading of GreenEthene powders is based on density, melt flow, impact resistance, rigidity, ESCR (Environmental Stress Crack Resistance), grind type and custom compound colors."
              imageSrc={gradesImg1}
              buttons={[
                {
                  label: "Download Brochure",
                  downloadName: "Brochure.png",
                  gradient:
                    "linear-gradient(180deg, #83BF2D -53.23%, #00A3AF 191.13%)",
                },
              ]}
            />
            <PackagingLeadTime />
          </div>
        )}

        {activeTab === "Butene" && (
          <div className="text-center pb-28 lg:pb-20">
            {/* For technology allplication */}
            <ProductInfoSection
              tagline="// GreenEthene in Action //"
              heading="Technology Application"
              description="Since the early 1990â€™s, linear low density polyethylenes (LLDPEs) have come to the fore in rotational moulding applications, because of their outstanding physical properties (excellent environmental stress crack resistance and impact performance) and ease of processing. Our butene based Ge-3645 & Ge-3938 LLDPE powders are eminently suitable for rotational moulding for these reasons."
              description2="During the manufacture of Polyethylene (PE) a variety of catalyst and co-monomers can be used which also have an effect on the properties of the PE. Butene (C4) comonomer is the most common providing low cost, good mechanical properties and the most widely used."
              description3="Ge-3645 & Ge-3938 are both butene co-monomer based linear low density polyethylene (LLDPE) grade additivated with antioxidants and UV stabilizers. Items produced by these grades have a very good balance between mechanical properties and ESCR resistance. They possesses good hardness & exhibits good processability."
            />
            {/* <GradesDetailSection/> */}
            <GradesDetail
              tagline="GreenEthene Grades"
              title="Grades Detail"
              description="Grading Of GreenEthene Powders Is Based On Density, Melt Flow, Impact Resistance, Rigidity, ESCR (Environmental Stress Crack Resistance), Grind Type And Custom Compound Colors."
              imageSrc={gradesImg2}
              buttons={[
                {
                  label: "GE-3645 TDS",
                  downloadName: "GE-3645-TDS.png",
                  variant: "gradient-border",
                  gradient:
                    "linear-gradient(180deg, #83BF2D -53.23%, #00A3AF 191.13%)",
                },
                {
                  label: "GE-3938 TDS",
                  downloadName: "GE-3938-TDS.png",
                  gradient:
                    "linear-gradient(180deg, #83BF2D -53.23%, #00A3AF 191.13%)",
                },
              ]}
            />
 <ProductOverviewCard />
            {/* <Applications Butan tab /> */}
            <Applications
              tagline="APPLIED INNOVATION"
              heading="Application"
              applications={applicationsData}
            />
           
          </div>
        )}

        {activeTab === "Hexene" && (
          <div className="text-center pb-28 lg:pb-20">
            {/* for Hexen Technology  */}
            <ProductInfoSection
              tagline="GreenEthene in Action "
              heading="Technology Application"
              description="When subjected to stress over a period of time most materials commonly fail by cracking. Polyethylene may also suffer this mode of failure. It is important to understand that different grades of Polyethylene can exhibit vastly different performance with respect to crack resistance. The crack resistance should be a major consideration when selecting a grade of polyethylene for a particular application."
              description2="The crack resistance of a specific grade of Linear Low Density Polyethylene is governed largely by the size of its molecules (indicated by its Melt Index) and the type and level of comonomer employed in its manufacture. Comonomers such as butene (C4), hexene (C6) and octene (C8) are reacted into the polymer chain in order to produce small side chains which in turn create a deviation, or change of angle in the molecule chain. The effect of this change of angle is somewhat akin to the effect of a knot in a piece of wood. The Polyethylene becomes more difficult to split. The size and quantity of comonomer molecules introduced in to the polymer chain determine the degree to which the crack resistance is improved. For example, the side chain created by the incorporation of hexene is twice the size of that created by the incorporation of butene. As a result, the chain deviation caused by hexene is significantly greater than that caused by the incorporation of butene and results in the hexene LLDPE exhibiting a crack resistance approximately 10 times better than the butene LLDPE. The incorporation of octene in to the polymer chain creates only a slightly larger deviation than that created by the incorporation of hexene and the change in crack resistance is less significant."
            />
            <GradesDetail
              tagline=" GreenEthene Grades"
              title="Grades Detail"
              imageSrc={gradesImg3}
              buttons={[
                {
                  label: "GE-2904U",
                  downloadName: "GE-2904U.png",
                  gradient:
                    "linear-gradient(180deg, #83BF2D -53.23%, #00A3AF 191.13%)",
                },
              ]}
            />
            <ProductOverviewCard />

            {/* <Applications Hexene tab /> */}
            <Applications
              tagline="APPLIED INNOVATION"
              heading="Application"
              applications={hexeneApplicationsData}
            />
            <Applications
              tagline="Insulated for Excellence"
              heading="Insulated Boxes"
              applications={InsulatedBoxesData}
            />
            <Applications
              tagline="Driven by Precision"
              heading="Auto Mobile Parts"
              applications={AutoMobilePartsData}
            />
            <Applications
              tagline="GreenEthene at Sea"
              heading="Marine"
              applications={MarineData}
            />
          </div>
        )}

        {activeTab === "Ripple" && (
          <div className="text-center pb-28 lg:pb-20">
            {/* For Spacial Effect  */}
            <ProductInfoSection
              tagline="// Designed to Dazzle //"
              heading="Special Effect"
              description="Aesthetics increases the value of any product. What better relevancy than Rotational Moulding application, where its famously known as Designers Paradise. It is now possibleto rotomould products and design applications in plastic in whichclear functions with flowing forms and fascinating coloureffects unite into a unique whole.In order to offer rotomoulders with poweer that can increase the aesthetic appeal of their products we have developed special effect powders."
              description2="Designers and architects can now refine rotomolded objects with impressive effects.In this way, customized product applications emerge that rangefrom decorative components for toys to sportinggoods, furniture, planters and sculptural elements.These products can be furnished with any type ofsurface structure and custom coloured to order."
            />
            {/* For Sparkel Effect  */}
            <ProductInfoSection
              tagline="// Shine Beyond Limits //"
              heading="Sparkel Effect"
              description="For achieving the luxurious sparkle effect of Gold, Copper, Silver etc, the powders are first grinded to a particularly specific particle size distribution. They are then dry-blended on high speed mixtures."
              description2="The biggest challenge is to ensure you have pigment suitable for rotomoulding application and are of particle size that ensures they are also coated on every powder particleduring dry-blending. This will ensure that you have even & homogenous sparkle effect in finished rotomoulded product."
              description3="At Greenage we have worked with our multinational pigment supplier and have developed pigments that are not just very fine but specific in particle size distribution and are specifically designed forrotomoulding process. We have also invested in high tech customised high speed mixtures that ensures every pigment particle is coated on powder perfectly during dry-blending process."
            />
            {/* For  stone Effect */}
            <ProductInfoSection
              tagline="// Nature-Inspired. Design-Perfected //"
              heading="Granite / Marle / Stone Effect"
              description="Still today in 21st century, Marble sells more than Ceramic Tiles when it comes to decorating your precious home even though it is expensive that tiles. Reason being, Marble is natural and has that natural earthly feeling to it."
              description2="We have done extensive research and development in developing Marble effect powders for rotational moulding and today we proudly offer our extensive range of Stone Effect powders for many aesthetic focused rotomoulding applications. These powders can be customised as per request with customers choice of effect and colours."
              description3="Please feel free to ask our sales representative for free sample to conduct moulding trails."
            />

            <Applications
              tagline="APPLIED INNOVATION"
              heading="Application"
              applications={rippleApplicationsData}
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default Products;
