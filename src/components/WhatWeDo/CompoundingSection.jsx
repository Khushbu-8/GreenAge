import React from "react";
import { ArrowUpRight } from "lucide-react";
import machineImg from "../../assets/WhatWeDoimages/machineImg.png";

const CompoundingSection = () => {
  return (
    <section className="w-full py-14">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image Section */}
        <div className="relative w-full lg:w-1/2 px-10">
          <img
            src={machineImg}
            alt="Compounding Machine"
            className="rounded-[40px] w-full object-cover"
          />
       
           </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 text-left">
          {/* Subheading */}
          <p className="text-blue font-semibold tracking-wide text-md mb-2">
            // COMPOUNDING WITH PURPOSE //
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-4xl font-bold  mb-6">
            Compounding
          </h2>

          {/* Description */}
          <p className="text-grays leading-relaxed text-base md:text-md">
            Rotomoulding Is A Process Where A Polymer Is Exposed To Thermal Stress
            Multiple Time Starting With Compounding Followed By Pulverising & Finally
            During Moulding. Ensuring Minimal Thermal Degradation Of Polymer At Each
            Stage Ensures Optimum Quality Of Finished Product. Compounding Process
            Tends To Expose Polymer Directly To Highest Thermal & Physical Stress.
            Keeping Control Over Thermal Exposure In Compounding Is A Critical Job.
            We At Greenage Ensures Our Compounding Lines Are Designed Keeping In Mind
            The Rotomoulding Requirement. We Have High Speed Extrusion Lines That
            Ensures Minimal Residual Processing Time Leading To Low Thermal
            Degradation Of Polymer. Double Mixing Zone With Barrier Design In Screw
            Profile, Ensures Excellent Dispersion Of Colour & Performance Additives
            Like UV Stabilizers, Anti Oxidants, Anti Microbial Etc. PULVERISING
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompoundingSection;
