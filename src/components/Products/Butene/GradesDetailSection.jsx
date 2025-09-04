import React from "react";
import { Download } from "lucide-react";

const GradesDetailSection = () => {
  return (
    <section className="w-full bg-white px-6 lg:px-16 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Left Heading */}
        <div>
          <h4 className="text-[#0097C5] font-bold uppercase tracking-wide text-sm">
            Greenthene Grades
          </h4>
          <h2 className="text-3xl font-bold text-gray-900">Grades Detail</h2>
          <p className="text-gray-600 text-sm max-w-2xl mt-1">
            Grading Of GreenEthene Powders Is Based On Density, Melt Flow, Impact Resistance,
            Rigidity, ESCR (Environmental Stress Crack Resistance), Grind Type And Custom Compound Colors.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-3">
          <button className="bg-[#00A06B] hover:bg-[#008957] transition-colors text-white font-medium rounded-full flex items-center gap-2 px-5 py-2 shadow-md">
            GE-3645 TDS <Download size={18} />
          </button>
          <button className="bg-[#00A06B] hover:bg-[#008957] transition-colors text-white font-medium rounded-full flex items-center gap-2 px-5 py-2 shadow-md">
            GE-3938 TDS <Download size={18} />
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
        <table className="w-full border-collapse text-left">
          {/* Top Header */}
          <thead>
            <tr className="bg-[#F6F9FC]">
              <th
                rowSpan="2"
                className="px-6 py-4 text-[#0097C5] text-sm font-semibold w-[25%] align-middle border-r border-gray-200"
              >
                Butene Grades Specifications
              </th>
              <th
                colSpan="2"
                className="px-6 py-4 text-center text-[#0097C5] text-sm font-semibold border-r border-gray-200"
              >
                Grade Name
              </th>
              <th
                colSpan="2"
                className="px-6 py-4 text-center text-[#0097C5] text-sm font-semibold"
              >
                Specimen Type
              </th>
            </tr>
            <tr className="bg-[#F6F9FC] border-t border-gray-200">
              <th className="px-6 py-3 text-center text-gray-700 text-sm font-semibold border-r border-gray-200">
                Ge 3645
              </th>
              <th className="px-6 py-3 text-center text-gray-700 text-sm font-semibold border-r border-gray-200">
                Ge 3938
              </th>
              <th className="px-6 py-3 text-center text-gray-700 text-sm font-semibold border-r border-gray-200">
                Compression Molded
              </th>
              <th className="px-6 py-3 text-center text-gray-700 text-sm font-semibold">
                Rotomolded
              </th>
            </tr>
            <tr className="bg-[#F6F9FC] border-t border-gray-200">
              <th className="px-6 py-3 text-gray-700 text-sm font-semibold">Parameter</th>
              <th className="px-6 py-3 text-gray-700 text-sm font-semibold">Standard</th>
              <th className="px-6 py-3 text-gray-700 text-sm font-semibold">Specimen Type</th>
              <th className="px-6 py-3 text-gray-700 text-sm font-semibold">Compression Molded</th>
              <th className="px-6 py-3 text-gray-700 text-sm font-semibold">Rotomolded</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm text-gray-700">
            {[
              ["MFI", "ASTM D1238", "gm/10 min", "4.5", "3.8"],
              ["Density", "ASTM D1505", "gm/cm3", "0.936", "0.939"],
              ["Recommended PIAT*", "In-lab StdPrc*", "°C", "190 °C", "190 °C"],
              [
                "Tensile Strength at Yield",
                "ASTM D638",
                "(kg/cm2) (Mpa) (Psi)",
                "(180) (17.5) (2540)",
                "(185) (18) (2610)"
              ],
              [
                "Tensile Strength at Break",
                "ASTM D638",
                "(kg/cm2) (Mpa) (Psi)",
                "-",
                "(120) (11.75) (1705)"
              ],
              ["IZOD Impact Strength", "ASTM D256", "Kg.cm/cm", "25", "22"],
              ["ARM Low Temperature", "ARM Std (3.17mm @ -40°C/F)", "(J/mm) (ft/lbs)", "(22) (80)", "(22) (80)"],
              [
                "Flexural Modulus At 1% Strain",
                "ASTM D790",
                "(kg/cm2) (Mpa) (Psi)",
                "(6000) (590) (85575)",
                "(2300) (225) (32630)"
              ],
              ["Elongation at Yield", "ASTM D638", "%", "20", "14"],
              ["Elongation at Break", "ASTM D638", "%", "600", "165"],
              ["ESCR", "ASTM D1693", "Hrs", "350", "300"],
            ].map((row, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`px-6 py-4 text-center ${
                      i === 0
                        ? "font-medium text-gray-900 text-left"
                        : "text-gray-700"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-gray-500 mt-3">
        *PIAT For Moulding Oven Temperature Was 300°C And Cube Mould Of Size 175mm x 175mm x 175mm Was
        Moulded With Wall Thickness Of 3.17mm.
      </p>
    </section>
  );
};

export default GradesDetailSection;
