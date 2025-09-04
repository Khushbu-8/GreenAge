import React from "react";
import { Download } from "lucide-react";

const GradesDetail = ({
  tagline,
  title,
  description,
  buttons = [],
  imageSrc,
}) => {
  const handleDownload = (imagePath, fileName) => {
    const link = document.createElement("a");
    link.href = imagePath;
    link.download = fileName || "Grades-Detail.png";
    link.click();
  };

  return (
    <section className="w-full bg-white  py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center text-center justify-between gap-4 mb-10 ">
        {/* Left Heading */}
        <div className="md:text-start text-center">
          <p className="text-blue font-semibold tracking-wide text-sm md:text-base xl:text-xl ">
            // {tagline} //
          </p>
          <h2 className="text-xl md:text-4xl xl:text-5xl font-bold text-blacks py-4">{title}</h2>
          {description && (
            <p className="text-grays text-sm md:text-base xl:text-lg w-full mt-2">{description}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-nowrap gap-3 sm:gap-4  justify-center md:flex-wrap md:justify-end lg:flex-nowrap  lg:justify-end ">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleDownload(imageSrc, btn.downloadName)}
              className=" bg-gradients flex items-center justify-center gap-2 px-4 sm:px-5  py-2 sm:py-2.5 rounded-full text-white text-sm sm:text-base font-medium shadow-md border transition-all duration-300 whitespace-nowrap"
            >
              {btn.label} <Download size={18} />
            </button>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center">
        <img
          src={imageSrc}
          alt="Grades Detail Table"
          className="w-full rounded-lg border"
        />
      </div>
      <div>
        <p className="text-grays text-start text-sm md:text-base xl:text-lg leading-relaxed mt-4">
           *PIAT â€“ For moulding oven temperature was 300 oC and cube mould of size 175mmx175mmx175mm was moulded with wall thickness of 3.17mm.\
          </p>
      </div>
    </section>
  );
};

export default GradesDetail;
