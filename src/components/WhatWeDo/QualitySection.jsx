import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PiatMachineImage from "../../assets/Whatwedoimages/piat-machine.jpg"; // Replace with correct path
import ARMLowTemp from "../../assets/Whatwedoimages/ARM Low Temp.jpg"
import DF_BD1 from "../../assets/Whatwedoimages/Dry Flow and Bulk Density 1.jpg"
import DF_BD2 from "../../assets/Whatwedoimages/Dry Flow and Bulk Density 2.jpg"
import ESCR from "../../assets/Whatwedoimages/ESCR.png"
import MeltFlowTester from "../../assets/Whatwedoimages/Melt Flow Tester.jpg"
import PIAT from "../../assets/Whatwedoimages/PIAT.jpg"
import SeiveAnalyser from "../../assets/Whatwedoimages/Seive Analyser.jpg"
import Tensile_Elongation from "../../assets/Whatwedoimages/Tensile and Elongation.png"
const qualityItems = [
  {
    id: 1,
    title: "Lab Rotomoulding Machine with PIAT facility",
    description: `PIAT is considered as a single most important factor in Process Control for
Rotmoulding process. It helps moulder in understanding curing cycle of powder/grade
and ensure necessary changes in its production process as per PIAT. Automatically
controlled by PLC integrated with 5 inch Human Machine Interface (HMI) touch
screen with LAN support. Equipment has a Max swing diameter of 400mm with a
dedicated offset arm &amp; is equipped with electrical heaters with PID controller that can
heat oven up from 30 to 300 oC Temperature in 5 mins.`,
    image: PiatMachineImage, // change to your actual image path
  },
  {
    id: 2,
    title: "ARM Low Temperature (-40 C) Impact Test Equipment",
    description:`Back in a day when PIAT technique was not invented, rotomoulders use to conduct curing
tests by using Low Temperature dart impact test. If the specimens showed brittle failures it
means over curing and if it showed ductile failures, it would mean under curing. -40 C is
taken to ensure even minor variations in molding parameters would show different failures in
impact results. Also the temperature has direct correlation with ambient environment
temperature where moulded products were intended for use (USA/Europe/Australia etc).`,
    image: ARMLowTemp, // change to your actual image path

  },
  {
    id: 3,
    title: "Tensile &amp; Elongation Testing Equipment",
    description:`tensile stresses. For under cure products, the tensile strength &amp; elongation properties are
drastically affected as porosity acts as weak point. We conduct tests as per ASTM D638
standards`,
    image: Tensile_Elongation,
  },
  {
    id: 4,
    title: "Flexural Modulus Testing Equipment",
   description:`Flexural Modulus is an ideal test for measuring stiffness of the product for a specific grade. It
helps to understand how the product will behave &amp; survive when in service. It also shows
grades resistance power to compressive stresses.`,
    image:PIAT,
  },
  {
    id: 5,
    title: "ESCR Testing Equipment",
   description:`Environmental Stress Crack Resistance is a very critical test for measuring long term
performance of a grade. We have 6 station ESCR machine for conducting tests as per
standard ASTM`,
    image:ESCR,
  },
  {
    id: 6,
    title: "Spectrophotometer Equipment",
   description:`Ensuring consistency in our colour compounds, all our colour masterbatches &amp; powder
batches need to pass through Spectrophotometer tests.`,
    image:PiatMachineImage,
  },
  {
    id: 7,
    title: "Melt Flow Index/Rate (MFI/MFR) Testing Equipment",
   description:`ASTM D1238`,
    image:MeltFlowTester,
  },
  {
    id: 8,
    title: "Density Testing Equipment",
   description:`ASTM D792`,
    image:DF_BD1,
  },
  {
    id: 9,
    title: "ARM Standard Dry Flow &amp; Bulk Density Tester",
   description:`ARM Standard`,
    image:DF_BD2,
  },
  {
    id: 10,
    title: "Sieve Analyser (PSD)",
   description:``,
    image: SeiveAnalyser,
  },
];

const QualitySection = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white  font-sans">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-[#00A96E] font-semibold uppercase tracking-wider text-sm mb-1">
          // Quality You Can Trust //
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Quality</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
        Greenage Industries is a ISO 9001:2015 certified company by TUV SUD. At Greenage Industries
quality is not an USP but culture inbuild in our systems. Starting from sourcing quality raw materials,
to high tech compounding &amp; pulverizing processing to auto bagging to storage is all maintained and
operated as per world class standards. We thrive to ensure the issues in quality gets identified at our
end before our product reaches to customer, for which we have a dedicated Quality Check &amp;
Assurance department.
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {qualityItems.map((item) => (
          <div
            key={item.id}
            className={`border rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${
              openId === item.id ? "border-[#00A96E]" : "border-gray-200"
            }`}
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 md:p-6 bg-white text-left"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full border font-semibold ${
                    openId === item.id
                      ? "bg-[#E9F8F1] border-[#00A96E] text-[#00A96E]"
                      : "bg-gray-100 border-gray-300 text-gray-700"
                  }`}
                >
                  {item.id}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm md:text-lg">
                  {item.title}
                </h3>
              </div>
              {openId === item.id ? (
                <ChevronUp className="text-[#00A96E]" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </button>

            {/* Accordion Content */}
            {openId === item.id && item.description && (
              <div className="p-4 md:p-6 !pt-0 text-gray-600 text-sm md:text-base leading-relaxed">
                <p className="mb-4">{item.description}</p>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl border w-full max-h-[400px] object-contain"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualitySection;
