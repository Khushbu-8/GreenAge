import React from "react";

const ProductInfoSection = ({ tagline, heading, description, description2, description3 }) => {
  return (
    <section className="w-full bg-white py-12 ">
      <div className=" mx-auto text-center">
        {/* Top Tagline */}
        {tagline && (
          <p className="text-blue text-sm md:text-base xl:text-lg font-semibold tracking-wide uppercase mb-3">
            {tagline}
          </p>
        )}

        {/* Heading */}
        {heading && (
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-extrabold text-blacks my-6">
            {heading}
          </h2>
        )}

        {/* Descriptions */}
        {description && (
          <p className="text-grays text-sm md:text-base xl:text-lg leading-relaxed mb-4">
            {description}
          </p>
        )}
        {description2 && (
          <p className="text-grays text-sm md:text-base xl:text-lg leading-relaxed mb-4">
            {description2}
          </p>
        )}
        {description3 && (
          <p className="text-grays text-sm md:text-base xl:text-lg leading-relaxed">
            {description3}
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductInfoSection;
