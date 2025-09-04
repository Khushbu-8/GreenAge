import React from "react";
import Storyimage1 from "../../assets/AbourUsimages/Storyimage1.jpg";
import Storyimage2 from "../../assets/AbourUsimages/Storyimage2.jpg";
import ProductInfoSection from "../Products/AllProduct/ProductInfoSection";

const OurStory = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="mx-auto">
        {/* Section Title */}
        <ProductInfoSection
          tagline="// Who We Are //"
          heading="Our Story, Our Strength"
          description="GreenAge Industries have etched their name in the field of development and manufacturing of Rotomoulding Powder/Compounds in blazing fonts. Foundation of the company was laid back in the year 2012. As a subsidiary of 30 year old Umiya Group of Industries which deals in manufacturing and marketing of various dosage forms of plastics packaging products like PET containers (Jars/ Bottles), PP Twins/ Ropes, Kitchenware (Cutlery), Plastic Bags, Green Age has been able to create its own glowing identity."
          description2="GreenAge Industries boasts of niche clientele in number of leading and prominent companies such as K K Nag Ltd, Astral Polytechnik Ltd, Consta Cool Pvt Ltd, Promens India Pvt Ltd, ITC Ltd (Food Division), Parle Agro, Dabur India Ltd., WaghBakri Tea etc. We have steered our way up as the first preference of our patrons through outstanding quality, right quantity and punctuality in delivery of our products."
          description3="Our adherence to technical details and support while innovating and improvising to expand the range of rotomoulding materials has carved our name as the industry leader. Our relationship with our customers extends way beyond the sales, in the form of technical support and services."
        />

        {/* Mission & Vision Cards */}
        <div className="grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <div className="group relative rounded-xl border border-gray-200 overflow-hidden hover:border-transparent hover:bg-gradient-to-r hover:from-green-400 hover:to-teal-500 p-[1px] transition-all duration-300">
            <div className="bg-white rounded-xl overflow-hidden relative px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-10">
              {/* Image */}
              <img
                src={Storyimage1}
                alt="Mission"
                className="w-full h-40 sm:h-52 md:h-64 lg:h-72 object-cover rounded-t-xl"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="bg-white p-2 sm:p-3 md:p-4 rounded-md shadow-xl border hover:border-none transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-500">
                  <h6 className="font-bold text-black text-sm sm:text-base md:text-lg group-hover:text-white">
                    Our Mission
                  </h6>
                  <p className="mt-2 text-xs sm:text-sm md:text-base font-normal text-gray-500 group-hover:text-white">
                    To Become 100,000 Mt/Yr Global Polymer Processing Company By
                    Year 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative rounded-xl border border-gray-200 overflow-hidden hover:border-transparent hover:bg-gradient-to-r hover:from-green-400 hover:to-teal-500 p-[1px] transition-all duration-300">
            <div className="bg-white rounded-xl overflow-hidden relative px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-10">
              {/* Image */}
              <img
                src={Storyimage2}
                alt="Vision"
                className="w-full h-40 sm:h-52 md:h-64 lg:h-72 object-cover rounded-t-xl"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="bg-white p-2 sm:p-3 md:p-4 border hover:border-none rounded-md shadow-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-500">
                  <h6 className="font-bold text-black text-sm sm:text-base md:text-lg group-hover:text-white">
                    Our Vision
                  </h6>
                  <p className="mt-2 text-xs sm:text-sm md:text-base font-normal text-gray-500 group-hover:text-white">
                    To Satisfy Material Needs Of Rotomoulders By Providing
                    Innovative Solutions, To Shape Their Desires Into Reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
