import React from "react";

import client1 from "../../assets/images/client1.png"; // Hi-Tech Elastomers
import client2 from "../../assets/images/client2.png"; // IndiaBungy
import client3 from "../../assets/images/client3.png"; // NagMagic
import client4 from "../../assets/images/client4.png"; // Astral
import client5 from "../../assets/images/client5.png"; // SabarTex
import client6 from "../../assets/images/client6.png"; // Promens
import  TitleHeading  from "../UI/TitleHeading";

const clients = [client1, client2, client3, client4, client5, client6];

const OurClients = () => {
  return (
    <section className="py-12 lg:py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}

        <TitleHeading tagline="Our Clients" heading="Hear From Our Clients"  />

        {/* Clients Logo Section */}
        <div className="bg-gray-100 rounded-lg shadow-md py-6 px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
            {clients.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
