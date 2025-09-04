import React from "react";
import bag from "../../../assets/Productimages/bag.png"; // replace with actual images
import bag2 from "../../../assets/Productimages/bag2.png";
import bag3 from "../../../assets/Productimages/bag3.png";

const ProductOverviewCard = () => {
  return (
    <section className="w-full bg-white py-10">
      {/* Top 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Regulatory Information */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border text-start border-gray-200">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-blacks mb-4">
            Regulatory Information
          </h2>
          <p className="text-grays leading-relaxed text-sm md:text-base xl:text-lg">
            Ge-3645& Ge-3938 Meets The Requirement Stipulated In Standard
            IS:10141:2001 On “Specification for Polyethylene For Safe Use In
            Contact With Foodstuff, Pharmaceuticals & Drinking Water”. It Also
            Conforms to IS 12701:1996 “Specification For Rotational Moulded
            Polyethylene Water Storage Tanks.”
          </p>
        </div>

        {/* Custom Grades */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border text-start border-gray-200">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-blacks mb-4">
            Custom Grades
          </h2>
          <p className="text-grays leading-relaxed text-sm md:text-base xl:text-lg">
            Different Rotomoulding Applications Can Require Different Grades Of
            Material For Specific Performance Requirements. We Produce Customized
            Grades by Compounding Different Materials, Additives And By Altering
            The Grinding Specifications As Required.
          </p>
        </div>
      </div>

      {/* Third Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-gray-200 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl xl:text-3xl text-start font-bold text-blacks mb-4">
            Storage Conditions
          </h2>
          <p className="text-grays text-start leading-relaxed text-sm md:text-base xl:text-lg">
            Powders Are Packed In Specialized Bag On Fully Automatic Packing
            Lines In 20 Kg Packing. The Bag Design Is Customized To Ensure
            Logistic Convenience While Handling. When Filled It Takes Shape Of
            Box That Ensures Easy Handling While Loading And Unloading On
            Stacks/Pallets. Being Packed On Automised Packing Lines Ensures
            Exact Weight, Leakage Proof Along With Excellent Moisture Resistance.
            The Bags Are Marked With Powder Batch Details On 2 Sides Which Ensures
            No Matter How It Is Stacked, It Is Easy For Operators To Identify The
            Material. Bags Should Be Stored In Dry/Closed Conditions At Temperature
            Below 50 °C.
          </p>
        </div>

        {/* Right Images */}
        <div className="flex flex-wrap lg:flex-nowrap w-full h-[350px] items-center justify-center gap-6 lg:gap-8 flex-1 px-5 bg-gray-100 rounded-lg">
          <img
            src={bag}
            alt="Bag"
            className=" w-full h-full object-contain"
          />
         
        </div>
      </div>
    </section>
  );
};

export default ProductOverviewCard;
