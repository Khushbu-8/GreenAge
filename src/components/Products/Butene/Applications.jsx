import React from "react";
import TitleHeading from "../../UI/TitleHeading";
import { ApplicationCard } from "../../UI";

const Applications = ({ heading, tagline, applications }) => {
  return (
    <div className="w-full mx-auto py-12">
      {/* Top Heading */}
      <TitleHeading tagline={tagline} heading={heading} />

      {/* Grid Layout */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-6">
        {applications.map((item, index) => (
          <ApplicationCard key={index} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Applications;
