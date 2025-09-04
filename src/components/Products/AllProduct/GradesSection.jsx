import React from "react";
import { Download } from "lucide-react";

const grades = [
  {
    name: "Ge3645",
    density: "0.936",
    mfi: "4.5",
    tensile: "18",
    impact: "25",
    characteristics: "Good Stiffness, High Processing Speed, Impact Strength & ESCR",
    application: "General Moulding, Medium Sized Tanks & Fuel Tanks.",
    brochure: "/brochures/Ge3645.pdf",
  },
  {
    name: "Ge3938",
    density: "0.939",
    mfi: "3.8",
    tensile: "21",
    impact: "22",
    characteristics: "Flexible Very High ESCR & Impact Strength",
    application: "Large Tank For Water, IBCS, Floats And Bins",
    brochure: "/brochures/Ge3938.pdf",
  },
  {
    name: "Ge3904U",
    density: "0.939",
    mfi: "4",
    tensile: "20",
    impact: "50",
    characteristics:
      "Hexene Co-Polymer Based, Excellent Impact Strength With Surface Finish & Fast Cycle Time",
    application:
      "Low Temperature Service Parts, Parts That Require Precise Dimension Or Less Tolerance",
    brochure: "/brochures/Ge3904U.pdf",
  },
  {
    name: "Ge3804",
    density: "0.938",
    mfi: "4",
    tensile: "20",
    impact: "ARM 19",
    characteristics: "High Glow, Long Durability, Fair Impact Resistance.",
    application: "General Purpose Products, Drums, Container And Pallets.",
    brochure: "/brochures/Ge3804.pdf",
  },
];

const GradesSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
    <div className="flex flex-col md:flex-row text-start justify-between items-start md:items-center gap-5 md:gap-0 pb-10">
        
        {/* Left Section */}
        <div className="max-w-3xl">
          {/* Subtitle */}
          <p className="text-blue font-semibold text-sm md:text-sm uppercase tracking-wide">
            // Versatile Grades, Singular Purpose //
          </p>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-[#222] mt-1">
            Grades Of GreenEthene
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-md  mt-3 leading-relaxed">
            Grading Of GreenEthene Powders Is Based On Density, Melt Flow, Impact Resistance,
            Rigidity, ESCR (Environmental Stress Crack Resistance), Grind Type And Custom Compound Colors.
          </p>
        </div>

        {/* Right Section - Download Button */}
        <div>
          <button className="bg-[#2EC971] hover:bg-[#26b065] transition-all duration-300 flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full shadow-md">
            <span>Download Brochure</span>
            <Download size={20} className="text-white" />
          </button>
        </div>
      </div>
    

      {/* Table */}
      <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200">
        <table className="min-w-full bg-[#F8FCFF] border-collapse">
          <thead>
            <tr className="bg-[#E8F8F9] fk text-blue text-left text-sm md:text-base font-semibold sticky top-0">
              <th className="px-4 py-3 items-center">Grade</th>
              <th className="px-4 py-3 items-center text-center">Density <span className="text-gray font-light md:text-sm"> (gm/cm³)</span></th>
              <th className="px-4 py-3 items-center text-center flex flex-col">MFI <span className="text-gray font-light md:text-sm"> (gm/10 Mins)</span></th> 
              <th className="px-4 py-3 items-center text-center ">Tensile Strength <span className="text-gray font-light md:text-sm"> (MPa)</span></th>
              <th className="px-4 py-3 items-center text-center ">Impact Strength <span className="text-gray font-light md:text-sm"> (kg.cm/cm)</span></th>
              <th className="px-4 py-3 items-center text-center ">Characteristics </th> 
              <th className="px-4 py-3 items-center  text-center">Typical Application </th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 text-gray-800 hover:bg-[#EFFFFF] transition duration-200"
              >
                {/* Grade Name + Download */}
                <td className="px-4 py-3  items-center gap-2 font-semibold text-blue">
                  <a
                    href={grade.brochure}
                    download
                    className="hover:underline"
                  >
                    {grade.name}
                  </a>
                  <a
                    href={grade.brochure}
                    download
                    className="p-1 rounded-full hover:bg-green-100 flex justify-center transition items-center text-center"
                  >
                    <Download className="w-4 h-4 text-green-600 hover:text-green-800" />
                  </a>
                </td>

                <td className="px-4 py-3">{grade.density}</td>
                <td className="px-4 py-3 ">{grade.mfi}</td>
                <td className="px-4 py-3">{grade.tensile}</td>
                <td className="px-4 py-3">{grade.impact}</td>
                <td className="px-4 py-3 max-w-xs text-gray-700">{grade.characteristics}</td>
                <td className="px-4 py-3 max-w-xs text-gray-700">{grade.application}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GradesSection;
