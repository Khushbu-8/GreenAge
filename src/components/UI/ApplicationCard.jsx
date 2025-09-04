import React from "react";

const ApplicationCard = ({ img, title }) => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center gap-5 bg-white p-5 rounded-2xl shadow-sm 
              cursor-pointer  border
             transition-all duration-100 border-gradients"
    >
      {/* Image */}

      <div className="flex-shrink-0 w-32 h-24 lg:w-60 lg:h-32 xl:w-72 xl:h-40 py-2 flex items-center justify-center bg-gray-100 rounded-lg">
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>
      {/* Title */}

      <h3 className="text-base sm:text-lg md:text-xl xl:text-3xl font-semibold text-blacks text-center sm:text-left">
        {title}
      </h3>
    </div>
  );
};

export default ApplicationCard;
