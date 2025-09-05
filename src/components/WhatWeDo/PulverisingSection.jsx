import React from "react";
import machineImg from "../../assets/images/galleryImage8.jpg"; // Replace with correct path
import factoryImg from "../../assets/images/galleryImage2.jpg"; // Replace with correct path
import vectorLine from "../../assets/images/Vectorline.png"; // dotted line image
import ProductInfoSection from "../Products/AllProduct/ProductInfoSection";

const PulverisingSection = () => {
  const cards = [
    {
      id: 1,
      title: "Excellent Flowability",
      description:
        "GreenEthene Powders Allows Optimum Distribution Of Powder Even In Complex Moulds & Gives Uniform Wall Thickness In Moulded Parts. All This Because, GreenEthene Powder Is Grinded Keeping In Mind International Dry Flow Standards.",
    },
    {
      id: 2,
      title: "Perfect Particle Size Distribution",
      description:
        "GreenEthene Powder Is Pulverised In Perfect Sizes Which Facilitates Their Fast & Easy Movement In The Processors Moulding, Enabling Efficient Operation Capabilities. Regular Online Bulk Denisty Tests Are Carried Out During Pulverising Operation.",
    },
    {
      id: 3,
      title: "Smooth Finish",
      description:
        "GreenEthene Being Unanimous In Particle Size Distribution Has Few Air Gaps Between Them, Thereby Increasing Its Mechanical Properties & Reducing The Creation Of Pin Holes On The Surface. This Results In Smooth Finishing Of The Moulded Surface.",
    },
    {
      id: 4,
      title: "Low Processing Time",
      description:
        "Perfect Particle Shape & Size Of The GreenEthene Powder, Offers Material & Weight Savings For The Moulded Part & Significantly Lowers The Processing Time.",
    },
  ];

  return (
    <section className="w-full md:py-16 relative">
      {/* Header */}

      <ProductInfoSection
        tagline="Pulverising Power"
        heading="Pulverising"
        description="PALLMAN pulverisers are the ultimate solution for critical pulverising requirements. In size reduction technology PALLMAN enjoys a leadership status with numerous patents and inventions. GreenAge utilizes the PALLMAN polygrinders to achieve outstanding quality that is not only consistent but is totally automatic. It has predefined sensors for Temperature, Pressure and Power consumption which register reading and control the system according to preset parameters."
      />

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-24 xl:gap-36 relative">
        {/* Left Top Cards */}
        <div className="flex flex-col gap-10 relative justify-end items-end w-full">
          {cards.slice(0, 2).map((card, index) => (
            <div
              key={card.id}
              className="relative bg-white text-blacks rounded-xl shadow-lg p-6 w-full  lg:max-w-[370px] xl:max-w-[440px] border border-gray-200"
            >
              {/* Number Circle */}
              <div className="hidden lg:flex absolute -left-16 top-0 w-10 h-10  items-center justify-center bg-white text-black font-bold rounded-full border-2 border-black shadow-lg z-20">
                {card.id}
              </div>
              <h3 className="text-lg xl:text-2xl font-bold text-blacks">
                {card.title}
              </h3>
              <p className="text-sm md:text-base xl:text-lg text-grays mt-2 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Top Right Image */}
        <div className="flex justify-center h-60 md:h-full lg:h-[470px] xl:h-[500px] bg-gray-100 overflow-hidden rounded-xl my-8 md:my-0 lg:my-6  items-start">
          <img
            src={machineImg}
            alt="Machine"
            className="lg:rounded-ss-[50px] shadow-xl w-full h-full object-cover lg:ps-10 lg:pt-10 overflow-hidden"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="flex justify-center bg-gray-100 overflow-hidden rounded-xl items-start">
          <img
            src={factoryImg}
            alt="Factory"
            className="lg:rounded-ss-[50px] shadow-xl w-full h-full object-cover lg:ps-10 lg:pt-10 overflow-hidden"
          />
        </div>

        {/* Bottom Right Cards */}
        <div className="flex flex-col gap-10 relative py-8 md:p-0 lg:my-8">
          {cards.slice(2, 4).map((card) => (
            <div
              key={card.id}
              className="relative bg-white text-blacks rounded-xl shadow-lg p-6 w-full md:max-w-[350px] border border-gray-200"
            >
              {/* Number Circle */}
              <div className="hidden lg:flex absolute -left-16 top-0 w-10 h-10  items-center justify-center bg-white text-black font-bold rounded-full border-2 border-black shadow-lg z-20">
                {card.id}
              </div>
              <h3 className="text-lg xl:text-2xl font-bold text-blacks">
                {card.title}
              </h3>
              <p className="text-sm md:text-base xl:text-lg text-grays mt-2 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dotted Gradient Connector */}
      {/* <div className="absolute top-[300px] left-[180px] w-[2px] h-[550px] bg-gradient-to-b from-[#83BF2D] to-[#00A3AF] border-doted"></div> */}
      <img
        src={vectorLine}
        alt="Dotted Path"
        className="absolute lg:top-[30%] xl:top-[26%] lg:left-[27%] xl:left-[29%] -translate-x-1/2 w-[120px] md:w-[350px] lg:w-[460px] xl:w-[590px] z-10 hidden lg:flex pointer-events-none"
      />
    </section>
  );
};

export default PulverisingSection;
