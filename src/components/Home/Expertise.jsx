import React from "react";
import shapeImg from "../../assets/images/shape.png"; // Replace with your image path
import TitleHeading from "../UI/TitleHeading";

const Expertise = () => {
  return (
    <section className="w-full py-12 ">
      {/* Top Heading */}
      <TitleHeading tagline="Our Expertise" heading="Expertise That Delivers" />

      {/* Card */}
      <div className="relative  mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border">
        {/* Top Numbers */}
        <div className="absolute top-3 sm:top-5 left-4 sm:left-6 text-blue text-sm sm:text-lg md:text-xl xl:text-3xl font-bold">
          01
        </div>
        <div className="absolute top-3 sm:top-5 right-4 sm:right-6 text-gray-300 text-sm sm:text-lg md:text-xl  xl:text-3xl font-bold">
          02
        </div>

        {/* Vertical Text Left */}
        <div className="hidden md:block absolute left-4 md:left-8 bottom-10 -translate-y-1/2 -rotate-90 origin-left text-blue font-semibold text-sm md:text-lg xl:text-xl whitespace-nowrap">
          Growth Requires Expert Nurturing
        </div>

        {/* Vertical Text Right */}
        <div className="hidden md:block absolute right-4 md:right-8 bottom-52  -translate-y-1/2 -rotate-90 origin-right text-blacks text-sm md:text-lg  xl:text-xl whitespace-nowrap">
          European Bioplastic
        </div>

        {/* Inner Content */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blacks">
            Growth Requires Expert Nurturing
          </h3>
          <p className="text-grays text-sm sm:text-base mt-3 leading-relaxed">
            GreenAge, the company tended by expertise, technology and world
            class machineries is headed towards consistent growth. A progress
            nurtured by competencies is our USP.
          </p>

          {/* Image */}
          <div className="mt-6 sm:mt-8">
            <img
              src={shapeImg}
              alt="Shape"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
