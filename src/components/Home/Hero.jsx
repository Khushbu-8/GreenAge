import React from "react";
import productImg from "../../assets/images/product-hero.png";
import backgroundImg from "../../assets/images/background-hero.png";
import powder1 from "../../assets/images/powder1.png";
import powder2 from "../../assets/images/powder2.png";
import powder3 from "../../assets/images/powder3.png";
import powder4 from "../../assets/images/powder4.png";
import RectangleFram from "../../assets/images/Rectangle-fram.png";
import { Button } from "../UI";

const Hero = () => {
  const powders = [
    { id: 1, img: powder1, label: "Natural" },
    { id: 2, img: powder2, label: "Green" },
    { id: 3, img: powder3, label: "Blue" },
    { id: 4, img: powder4, label: "Red" },
  ];

  return (
    <section className="relative w-full pt-20 pb-5 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-80 z-0"></div>

      {/* Rectangle Frame - Top */}
      <img
        src={RectangleFram}
        alt="Rectangle Frame Top"
        className="absolute h-[200px] top-16 left-1/2 -translate-x-1/2 w-full  opacity-90 z-[1] pointer-events-none"
      />

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left max-w-lg">
          <div className="text-sm md:text-base xl:text-xl font-semibold text-blue inline-block px-3 py-1 rounded-md mb-2">  
            {/* WELCOME TO GREENAGE */}
            //  WELCOME TO GREENAGE //
          </div>
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-snug text-blacks">
            Rotomoulding LLDPE <span className="font-normal">Powder</span>
          </h1>
          <p className="mt-4 text-grays text-base md:text-lg leading-relaxed">
            Discover high-quality rotomoulding LLDPE powder designed to deliver
            exceptional durability and performance. Perfect for creating strong,
            lightweight, and versatile products.
          </p>
          <div className="my-6 flex justify-center md:justify-start">
          <Button
            text="Get In Touch"
          />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative flex justify-center items-center mb-8 md:mb-0">
          {/* Background Gradient Box */}
          <div className="absolute -top-10 w-96 h-96 lg:w-96 lg:h-96 bg-gradient-to-b from-[#00A3AF] to-[#83BF2D] rounded-full blur-3xl opacity-40"></div>
          {/* Product Image */}
          <img
            src={productImg}
            alt="Product"
            className="relative z-10 w-full drop-shadow-x object-coverl"
          />
        </div>
      </div>

      {/* Powder Colors Section */}
      <div className="container mx-auto mt-14 px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {powders.map((powder) => (
            <div
              key={powder.id}
              className="group bg-white rounded-2xl shadow-md p-2 flex flex-col items-center cursor-pointer transform hover:-translate-y-4 transition duration-300"
            >
              <img
                src={powder.img}
                alt={powder.label}
                className="w-40 h-40 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Rectangle Frame - Bottom */}
      <img
        src={RectangleFram}
        alt="Rectangle Frame Bottom"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full opacity-90 z-[1] pointer-events-none"
      />
    </section>
  );
};

export default Hero;
