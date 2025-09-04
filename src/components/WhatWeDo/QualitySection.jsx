import React from "react";
import ProductInfoSection from "../Products/AllProduct/ProductInfoSection";

const QualitySection = () => {
  const qualityData = [
    { id: 1, title: "PITA - Peak Internal Air Temperature Apparatus" },
    { id: 2, title: "ARM Low Temperature Impact Strength Tester (-40oc)" },
    { id: 3, title: "Bulk Density Apparatus" },
    { id: 4, title: "Melt Flow Index (MFI) Apparatus" },
    { id: 5, title: "Environmental Stress Crack Resistance (ESCR) Apparatus." },
    { id: 6, title: "Elongation Counter" },
    { id: 7, title: "Granulometry Tester (Sieve Analyser)" },
  ];

  return (
    <section className="w-full bg-white py-12">
      {/* Top Title */}
 <ProductInfoSection
          tagline="Quality You Can Trust "
          heading="Quality"
          description="GreenAge boasts of state-of-the-art infrastructure equipped with latest technology and world class Rotomoulding machineries in the enterprising city of Ahmedabad, Gujarat. Our laboratory is endowed with basic Data Sheet measurement apparatus such as:"
        />     

      {/* Cards Layout */}
      <div className="flex flex-wrap justify-center gap-6 mx-auto">
        {qualityData.map((item, index) => {
          const isLastCard = index === qualityData.length - 1;
          const isOdd = qualityData.length % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`flex items-center gap-5 bg-white shadow-lg border-l-[2px] border-[#00A96E] rounded-xl px-6 py-5 hover:shadow-xl transition duration-300 w-[550px]
                ${isLastCard && isOdd ? "mx-auto" : ""}
              `}
            >
              {/* Number Circle */}
              <div className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-gray-100 text-[#00A96E] font-semibold text-lg">
                {index + 1}
              </div>

              {/* Title */}
              <p className="text-[#1C1C1C] font-medium text-base leading-snug">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QualitySection;
