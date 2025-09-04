import React from "react";

const  TitleHeading = ({ tagline, heading, align = "center" }) => {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignment} gap-2 pb-10`}>
      {/* Tagline */}
      {tagline && (
        <p className="text-blue font-semibold tracking-wide text-sm md:text-base xl:text-xl">
          // {tagline} //
        </p>
      )}

      {/* Heading */}
      {heading && (
        <h2 className="text-[#231F20] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
          {heading}
        </h2>
      )}
    </div>
  );
};

export default TitleHeading;
