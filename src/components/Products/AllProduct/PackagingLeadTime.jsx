import React from "react";

// Import icons (replace these paths with your actual image paths)
import packagingIcon from "../../../assets/Productimages/packaging.png";
import leadTimeIcon from "../../../assets/Productimages/lead-time.png";

const PackagingLeadTime = () => {
  const data = [
    {
      id: 1,
      icon: packagingIcon,
      title: "Packaging",
      description:
        "Packaging Is Done In Specialized Laminated Sacks To Ensure Their Damage Free And Contamination Free Transportation. Clear Labelling Of The Products Along With Sample Pouches Facilitates The Customers To Keep A Record Of The Delivered Batches. No Extra Price For Samples Or Trials Is Charged.",
    },
    {
      id: 2,
      icon: leadTimeIcon,
      title: "Lead Time Required",
      description:
        "Lead Time Required For Stocked Powder Is Around 3 Days And For Production Is 5 Days. Immediate Orders For Custom Colour And Production Can Also Be Carried Out On Demand.",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-6 md:p-8 shadow-lg bg-gray-100 hover:scale-[1.02] transition-all duration-300"
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 md:w-12 md:h-12 mb-4"
            />

            {/* Title */}
            <h3 className="text-xl text-start md:text-2xl xl:text-3xl font-bold text-blacks mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-start lg:text-lg text-gray leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagingLeadTime;
