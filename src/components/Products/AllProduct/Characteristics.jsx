import React from "react";
import ProductInfoSection from "./ProductInfoSection";

const Characteristics = ({
  tagline,
  heading,
  description,
  image,
  rightTitle,
  parameters,
}) => {
  return (
    <section className=" pb-16">
      {/* Top Section: Tagline + Heading + Description */}
      <ProductInfoSection
        tagline={tagline}
        heading={heading}
        description={description}
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side Image */}
        <div className="flex-shrink-0 w-full md:w-[45%] flex justify-center">
          <img
            src={image}
            alt="Characteristics"
            className="rounded-2xl border"
          />
        </div>

        {/* Right Side Parameters */}
        <div className="w-full md:w-[50%]">
          {/* Dynamic Right Title */}
          {
            rightTitle && (
              <h3 className="text-blue text-start  text-lg md:text-2xl font-semibold mb-8">
                {rightTitle}
              </h3>
            )
          }
          {/* <h3 className="text-blue text-xl md:text-2xl font-semibold mb-8">
            {rightTitle}
          </h3> */}

          {/* Parameters List */}
          <div className="space-y-10 relative">
            {parameters.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 relative group"
              >
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#c2e98d] to-[#cae5e7] flex items-center justify-center text-white font-bold text-lg shadow-xl relative z-10">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradients shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Connector Line */}
                {index !== parameters.length - 1 && (
                  <div className="absolute left-6 top-14 w-[1px] h-10 bg-gradient-to-b from-[#83BF2D] to-[#00A3AF] z-0"></div>
                )}

                {/* Parameter Text */}
                <p className="text-sm md:text-base text-start lg:text-lg font-medium leading-snug max-w-[80%] transition">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
